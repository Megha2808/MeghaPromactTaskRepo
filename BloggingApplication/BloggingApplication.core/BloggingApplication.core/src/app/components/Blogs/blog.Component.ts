import { Component, OnInit } from '@angular/core';
import { Service } from '../../Service/service';
import { IPost } from '../../Models/post';
import { Global } from '../../Shared/global';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'display-blog',
    template: `
                    <div id="blogpagination">
                        <div *ngIf='posts && posts.length==0' class="alert alert-info" role="alert">No record found!</div>
                        <div *ngIf='posts && posts.length'>
                            <div id="repeate" *ngFor="let p of posts" style="padding:5px;">
                                <div style="border:2px solid black; margin-bottom:10px; width:500px;">
                                    <h3 style="font-weight:bold;text-transform: uppercase;">
                                        <a>
                                            {{p.Title}}
                                        </a>
                                    </h3>
                                    <p>Posted by <span style="font-weight:bold"> "{{p.username}}" </span> in <span style="font-weight:bold;"> {{p.Categoryname}} </span> on <span style="font-weight:bold"> {{ p.createdOn| date:'longDate'}}</span> </p>
                                    <p>{{p.partialcontent}}...</p>
                                </div>
                            </div>
                        </div>
                    </div>`
})

export class BlogComponent implements OnInit {
    posts: IPost[];
    msg: string;
    id: number;
    private sub: any;

    constructor(private _Service: Service, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.id = null;
        this.route.params.subscribe(params => {
            this.id = +params["id"];
        });
        this.Loadposts();
    }

    Loadposts(): void {
        this._Service.get(Global.BASE_API_ENDPOINT + 'Posts/')
            .subscribe(posts => { this.posts = posts; },
            error => this.msg = <any>error);
    }

    LoadpostByCategory(): void {
        this._Service.get(Global.BASE_API_ENDPOINT + 'Posts/categoryId/' + this.id)
            .subscribe(posts => { this.posts = posts; },
            error => this.msg = <any>error);
    }
}

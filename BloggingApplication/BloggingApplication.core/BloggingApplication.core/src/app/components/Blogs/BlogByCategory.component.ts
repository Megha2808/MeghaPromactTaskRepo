import { Component, OnInit } from '@angular/core';
import { Service } from '../../Service/service';
import { IPost } from '../../Models/post';
import { Global } from '../../Shared/global';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: '',
    templateUrl: 'app/components/Blogs/blogs.component.html'
})

export class BlogByCategoryComponent implements OnInit {
    posts: IPost[];
    msg: string;
    id: number;
    private sub: any;

    constructor(private _Service: Service, private route: ActivatedRoute) {
        //this.id = this.route.params.forEach['Id'];
        //alert(this.id);
    }

    ngOnInit(): void {
        this.sub = this.route.params.forEach(params => {
            this.id = params["id"];
            alert(+params["id"]);
            //alert(this.id);
        });

        this.Loadposts();
    }

    Loadposts(): void {
        this._Service.get(Global.BASE_API_ENDPOINT + 'Posts/categoryId/' + this.id)
            .subscribe(posts => { this.posts = posts; },
            error => this.msg = <any>error);
    }
}

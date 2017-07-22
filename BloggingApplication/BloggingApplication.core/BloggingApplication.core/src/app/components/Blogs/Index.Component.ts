import { Component, OnInit } from '@angular/core';
import { Service } from '../../Service/service';
import { ITag } from '../../Models/tag';
import { ICategory } from '../../Models/category';
import { IPost } from '../../Models/post';
import { Global } from '../../Shared/global';
import { ActivatedRoute } from '@angular/router';

@Component({       
    templateUrl: 'app/components/Blogs/Index.component.html',
})

export class IndexBlogComponent implements OnInit {
    tags: ITag[];
    msg: string;
    categories: ICategory[];
    posts: IPost[];
    categoryid: number;
    tagid: number;
    private sub: any;

    constructor(private _Service: Service, private route: ActivatedRoute) { }

    ngOnInit(): void {
        
        this.LoadTags();
        this.LoadCategories();

        this.route.params.subscribe((params: any) => {
            if (params.id) {
                //alert("has id");
                if (params.categoryName) {
                    //alert("has categoryname");
                    this.categoryid = +params["id"];
                    //alert(this.categoryid);
                    this.LoadpostByCategory();
                }
                else if (params.tagName) {
                    this.tagid = +params["id"];
                    //alert("has tagname");
                    //alert(this.tagid);
                    this.LoadpostByTags();
                }
            } else {
                //alert("noo id");
                this.Loadposts();
            }
        });
    }

    LoadTags(): void {

        this._Service.get(Global.BASE_API_ENDPOINT + 'Tags/')
            .subscribe(tags => { this.tags = tags; },
            error => this.msg = <any>error);
    }
    Loadposts(): void {
        this._Service.get(Global.BASE_API_ENDPOINT + 'Posts/')
            .subscribe(posts => { this.posts = posts; },
            error => this.msg = <any>error);
    }
    LoadCategories(): void {
        this._Service.get(Global.BASE_API_ENDPOINT + 'Categories/')
            .subscribe(categories => { this.categories = categories; },
            error => this.msg = <any>error);
    }

    LoadpostByCategory(): void {
        this._Service.get(Global.BASE_API_ENDPOINT + 'Posts/categoryId/' + this.categoryid)
            .subscribe(posts => { this.posts = posts; },
            error => this.msg = <any>error);
    }
    LoadpostByTags(): void {
        this._Service.get(Global.BASE_API_ENDPOINT + 'Posts/tagId/' + this.tagid)
            .subscribe(posts => { this.posts = posts; },
            error => this.msg = <any>error);
    }

}

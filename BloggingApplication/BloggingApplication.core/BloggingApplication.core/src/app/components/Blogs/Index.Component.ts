import { Component, OnInit } from '@angular/core';
import { Service } from '../../Service/service';
import { ITag } from '../../Models/tag';
import { Global } from '../../Shared/global';


@Component({       
    templateUrl: 'app/components/Blogs/Index.component.html',

})

export class IndexBlogComponent implements OnInit {
    tags: ITag[];
    msg: string;

    constructor(private _tagService: Service) { }

    ngOnInit(): void {


        this.LoadTags();
    }
    LoadTags(): void {

        this._tagService.get(Global.BASE_API_ENDPOINT + 'Tags/')
            .subscribe(tags => { this.tags = tags; },
            error => this.msg = <any>error);
    }

}

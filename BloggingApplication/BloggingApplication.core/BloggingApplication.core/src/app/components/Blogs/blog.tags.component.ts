import { Component, OnInit } from '@angular/core';
import { Service } from '../../Service/service';
import { ITag } from '../../Models/tag';
import { Global } from '../../Shared/global';

@Component({
    selector: '',
    template: `<div *ngIf='tags && tags.length==0' class="alert alert-info" role="alert">No record found!</div>
                    <div *ngIf='tags && tags.length'>
                        <div *ngFor="let t of tags">
                            <ul>
                                <li><a [routerLink]="['/Home/Blog/Tag/',t.Name ,t.Id]">{{t.Name}}</a></li>
                            </ul>
                        </div>
                    </div>
`
})

export class BlogTagComponent implements OnInit {
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

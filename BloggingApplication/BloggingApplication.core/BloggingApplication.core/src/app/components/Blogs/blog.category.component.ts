import { Component, OnInit } from '@angular/core';
import { Service } from '../../Service/service';
import { ICategory } from '../../Models/category';
import { Global } from '../../Shared/global';

@Component({
    selector:'display-category',
    template: `<div *ngIf='categories && categories.length == 0' class="alert alert-info" role="alert">No record found!</div>
                <div *ngIf='categories && categories.length'>
                    <div *ngFor="let c of categories">
                        <ul>
                            <li><a [routerLink]="['/Home/Blog/Category/', c.Id]">{{c.Name }}</a></li>
                        </ul>
                    </div>
                </div>`
})

export class BlogCategoryComponent implements OnInit {
    categories: ICategory[];
    msg: string;

    constructor(private _Service: Service) { }

    ngOnInit(): void {
        this.LoadCategories();
    }

    LoadCategories(): void {
        this._Service.get(Global.BASE_API_ENDPOINT + 'Categories/')
            .subscribe(categories => { this.categories = categories; },
            error => this.msg = <any>error);
    }
}

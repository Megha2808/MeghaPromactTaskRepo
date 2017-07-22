"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var service_1 = require("../../Service/service");
var global_1 = require("../../Shared/global");
var BlogCategoryComponent = (function () {
    function BlogCategoryComponent(_Service) {
        this._Service = _Service;
    }
    BlogCategoryComponent.prototype.ngOnInit = function () {
        this.LoadCategories();
    };
    BlogCategoryComponent.prototype.LoadCategories = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Categories/')
            .subscribe(function (categories) { _this.categories = categories; }, function (error) { return _this.msg = error; });
    };
    return BlogCategoryComponent;
}());
BlogCategoryComponent = __decorate([
    core_1.Component({
        selector: '',
        template: "<div *ngIf='categories && categories.length == 0' class=\"alert alert-info\" role=\"alert\">No record found!</div>\n                <div *ngIf='categories && categories.length'>\n                    <div *ngFor=\"let c of categories\">\n                        <ul>\n                            <li><a [routerLink]=\"['/Home/Blog/Category/',c.Name ,c.Id]\">{{c.Name }}</a></li>\n                        </ul>\n                    </div>\n                </div>"
    }),
    __metadata("design:paramtypes", [service_1.Service])
], BlogCategoryComponent);
exports.BlogCategoryComponent = BlogCategoryComponent;
//# sourceMappingURL=blog.category.component.js.map
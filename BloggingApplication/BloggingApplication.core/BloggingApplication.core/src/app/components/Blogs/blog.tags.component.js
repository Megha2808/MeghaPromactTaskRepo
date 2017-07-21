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
var BlogTagComponent = (function () {
    function BlogTagComponent(_tagService) {
        this._tagService = _tagService;
    }
    BlogTagComponent.prototype.ngOnInit = function () {
        this.LoadTags();
    };
    BlogTagComponent.prototype.LoadTags = function () {
        var _this = this;
        this._tagService.get(global_1.Global.BASE_API_ENDPOINT + 'Tags/')
            .subscribe(function (tags) { _this.tags = tags; }, function (error) { return _this.msg = error; });
    };
    return BlogTagComponent;
}());
BlogTagComponent = __decorate([
    core_1.Component({
        selector: 'display-tags',
        template: "<div *ngIf='tags && tags.length==0' class=\"alert alert-info\" role=\"alert\">No record found!</div>\n                    <div *ngIf='tags && tags.length'>\n                        <div *ngFor=\"let t of tags\">\n                            <ul>\n                                <li><a href=\"/Home/Blog/Tag/{{t.Name}}/{{t.Id}}\">{{t.Name}}</a></li>\n                            </ul>\n                        </div>\n                    </div>\n"
    }),
    __metadata("design:paramtypes", [service_1.Service])
], BlogTagComponent);
exports.BlogTagComponent = BlogTagComponent;
//# sourceMappingURL=blog.tags.component.js.map
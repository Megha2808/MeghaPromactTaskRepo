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
var router_1 = require("@angular/router");
var BlogComponent = (function () {
    function BlogComponent(_Service, route) {
        this._Service = _Service;
        this.route = route;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Loadposts();
        this.route.params.subscribe(function (params) {
            if (params.id) {
                alert("has id");
                if (params.categoryName) {
                    alert("has categoryname");
                    _this.categoryid = +params["id"];
                    alert(_this.categoryid);
                    _this.LoadpostByCategory();
                }
                else if (params.tagName) {
                    _this.tagid = +params["id"];
                    alert("has tagname");
                    alert(_this.tagid);
                }
            }
            else {
                alert("noo id");
            }
        });
    };
    BlogComponent.prototype.Loadposts = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Posts/')
            .subscribe(function (posts) { _this.posts = posts; }, function (error) { return _this.msg = error; });
    };
    BlogComponent.prototype.LoadpostByCategory = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Posts/categoryId/' + this.categoryid)
            .subscribe(function (posts) { _this.posts = posts; }, function (error) { return _this.msg = error; });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    core_1.Component({
        selector: '',
        template: "\n                    <div id=\"blogpagination\">\n                        <div *ngIf='posts && posts.length==0' class=\"alert alert-info\" role=\"alert\">No record found!</div>\n                        <div *ngIf='posts && posts.length'>\n                            <div id=\"repeate\" *ngFor=\"let p of posts\" style=\"padding:5px;\">\n                                <div style=\"border:2px solid black; margin-bottom:10px; width:500px;\">\n                                    <h3 style=\"font-weight:bold;text-transform: uppercase;\">\n                                        <a>\n                                            {{p.Title}}\n                                        </a>\n                                    </h3>\n                                    <p>Posted by <span style=\"font-weight:bold\"> \"{{p.username}}\" </span> in <span style=\"font-weight:bold;\"> {{p.Categoryname}} </span> on <span style=\"font-weight:bold\"> {{ p.createdOn| date:'longDate'}}</span> </p>\n                                    <p>{{p.partialcontent}}...</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>"
    }),
    __metadata("design:paramtypes", [service_1.Service, router_1.ActivatedRoute])
], BlogComponent);
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map
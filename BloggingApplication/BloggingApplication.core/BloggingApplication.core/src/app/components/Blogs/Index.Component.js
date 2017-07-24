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
var IndexBlogComponent = (function () {
    function IndexBlogComponent(_Service, route) {
        this._Service = _Service;
        this.route = route;
        this.p = 1;
        this.term = '';
    }
    IndexBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LoadTags();
        this.LoadCategories();
        this.route.params.subscribe(function (params) {
            if (params.id) {
                //alert("has id");
                if (params.categoryName) {
                    //alert("has categoryname");
                    _this.categoryid = +params["id"];
                    //alert(this.categoryid);
                    _this.LoadpostByCategory();
                }
                else if (params.tagName) {
                    _this.tagid = +params["id"];
                    //alert("has tagname");
                    //alert(this.tagid);
                    _this.LoadpostByTags();
                }
            }
            else {
                //alert("noo id");
                _this.Loadposts();
            }
        });
    };
    IndexBlogComponent.prototype.postdetail = function (id) {
        //alert("heloo");
        //alert(id);
        this.post = this.posts.filter(function (x) { return x.Id === id; })[0];
    };
    IndexBlogComponent.prototype.LoadTags = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Tags/')
            .subscribe(function (tags) { _this.tags = tags; }, function (error) { return _this.msg = error; });
    };
    IndexBlogComponent.prototype.Loadposts = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Posts/')
            .subscribe(function (posts) { _this.posts = posts; }, function (error) { return _this.msg = error; });
    };
    IndexBlogComponent.prototype.LoadCategories = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Categories/')
            .subscribe(function (categories) { _this.categories = categories; }, function (error) { return _this.msg = error; });
    };
    IndexBlogComponent.prototype.LoadpostByCategory = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Posts/categoryId/' + this.categoryid)
            .subscribe(function (posts) { _this.posts = posts; }, function (error) { return _this.msg = error; });
    };
    IndexBlogComponent.prototype.LoadpostByTags = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Posts/tagId/' + this.tagid)
            .subscribe(function (posts) { _this.posts = posts; }, function (error) { return _this.msg = error; });
    };
    return IndexBlogComponent;
}());
IndexBlogComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/Blogs/Index.component.html',
    }),
    __metadata("design:paramtypes", [service_1.Service, router_1.ActivatedRoute])
], IndexBlogComponent);
exports.IndexBlogComponent = IndexBlogComponent;
//# sourceMappingURL=Index.Component.js.map
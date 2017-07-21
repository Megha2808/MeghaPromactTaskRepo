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
var BlogByCategoryComponent = (function () {
    function BlogByCategoryComponent(_Service, route) {
        this._Service = _Service;
        this.route = route;
        //this.id = this.route.params.forEach['Id'];
        //alert(this.id);
    }
    BlogByCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.forEach(function (params) {
            _this.id = params["id"];
            alert(+params["id"]);
            //alert(this.id);
        });
        this.Loadposts();
    };
    BlogByCategoryComponent.prototype.Loadposts = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Posts/categoryId/' + this.id)
            .subscribe(function (posts) { _this.posts = posts; }, function (error) { return _this.msg = error; });
    };
    return BlogByCategoryComponent;
}());
BlogByCategoryComponent = __decorate([
    core_1.Component({
        selector: '',
        templateUrl: 'app/components/Blogs/blogs.component.html'
    }),
    __metadata("design:paramtypes", [service_1.Service, router_1.ActivatedRoute])
], BlogByCategoryComponent);
exports.BlogByCategoryComponent = BlogByCategoryComponent;
//# sourceMappingURL=BlogByCategory.component.js.map
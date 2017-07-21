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
var IndexBlogComponent = (function () {
    function IndexBlogComponent(_tagService) {
        this._tagService = _tagService;
    }
    IndexBlogComponent.prototype.ngOnInit = function () {
        this.LoadTags();
    };
    IndexBlogComponent.prototype.LoadTags = function () {
        var _this = this;
        this._tagService.get(global_1.Global.BASE_API_ENDPOINT + 'Tags/')
            .subscribe(function (tags) { _this.tags = tags; }, function (error) { return _this.msg = error; });
    };
    return IndexBlogComponent;
}());
IndexBlogComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/Blogs/Index.component.html',
    }),
    __metadata("design:paramtypes", [service_1.Service])
], IndexBlogComponent);
exports.IndexBlogComponent = IndexBlogComponent;
//# sourceMappingURL=Index.Component.js.map
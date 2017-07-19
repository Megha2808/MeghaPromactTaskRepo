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
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../../Shared/enum");
var global_1 = require("../../Shared/global");
var PostComponent = (function () {
    function PostComponent(fb, _Service) {
        this.fb = fb;
        this._Service = _Service;
        this.indLoading = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.postFrm = this.fb.group({
            Id: [''],
            Title: ['', forms_1.Validators.required],
            Content: ['', forms_1.Validators.required],
            Tags: [this.tags[1]],
            Category_Id: [''],
        });
        this.LoadPost();
    };
    PostComponent.prototype.LoadPost = function () {
        var _this = this;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Categories/')
            .subscribe(function (categories) { _this.categories = categories; _this.indLoading = false; }, function (error) { return _this.msg = error; });
        this.indLoading = true;
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Posts/')
            .subscribe(function (postes) { _this.posts = postes; _this.indLoading = false; }, function (error) { return _this.msg = error; });
        this._Service.get(global_1.Global.BASE_API_ENDPOINT + 'Tags/')
            .subscribe(function (tags) { _this.tags = tags; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    //LoadPost(): void {
    //    this.indLoading = true;
    //    this._Service.get(Global.BASE_API_ENDPOINT + 'Posts/')
    //        .subscribe(postes => { this.posts = postes; this.indLoading = false; },
    //        error => this.msg = <any>error);
    //}
    PostComponent.prototype.addPost = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = 'Add New Post';
        this.modalBtnTitle = 'Add';
        this.Category_Id = this.categories.filter[0];
        this.Tags = this.Tags;
        this.postFrm.reset();
        this.modal.open();
    };
    PostComponent.prototype.editPost = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = 'Edit Post';
        this.modalBtnTitle = 'Update';
        this.post = this.posts.filter(function (x) { return x.Id === id; })[0];
        this.postFrm.setValue(this.post);
        this.modal.open();
    };
    PostComponent.prototype.deletePost = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = 'Confirm to Delete?';
        this.modalBtnTitle = 'Delete';
        this.post = this.posts.filter(function (x) { return x.Id === id; })[0];
        this.postFrm.setValue(this.post);
        this.modal.open();
    };
    PostComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.postFrm.enable() : this.postFrm.disable();
    };
    PostComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._Service.post(global_1.Global.BASE_API_ENDPOINT + 'AddPosts/', formData._value).subscribe(function (data) {
                    if (data === 1) {
                        _this.msg = "Data successfully added.";
                        _this.LoadPost();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.LoadPost();
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._Service.put(global_1.Global.BASE_API_ENDPOINT + 'editpost/', formData._value.Id, formData._value).subscribe(function (data) {
                    if (data === 1) {
                        _this.msg = "Data successfully updated.";
                        _this.LoadPost();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.LoadPost();
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                this._Service.delete(global_1.Global.BASE_API_ENDPOINT + 'Deletepost/', formData._value.Id).subscribe(function (data) {
                    if (data === 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadPost();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.LoadPost();
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    return PostComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], PostComponent.prototype, "modal", void 0);
PostComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/post/post.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, service_1.Service])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map
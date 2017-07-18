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
var tag_service_1 = require("../Service/tag.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../Shared/enum");
var global_1 = require("../Shared/global");
var TagComponent = (function () {
    function TagComponent(fb, _tagService) {
        this.fb = fb;
        this._tagService = _tagService;
        this.indLoading = false;
    }
    TagComponent.prototype.ngOnInit = function () {
        this.tagFrm = this.fb.group({
            Id: [''],
            Name: ['', forms_1.Validators.required]
        });
        this.LoadTags();
    };
    TagComponent.prototype.LoadTags = function () {
        var _this = this;
        this.indLoading = true;
        this._tagService.get(global_1.Global.BASE_API_ENDPOINT + 'Tags/')
            .subscribe(function (tags) { _this.tags = tags; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    TagComponent.prototype.addTag = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = 'Add New Tag';
        this.modalBtnTitle = 'Add';
        this.tagFrm.reset();
        this.modal.open();
    };
    TagComponent.prototype.editTag = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = 'Edit Tag';
        this.modalBtnTitle = 'Update';
        this.tag = this.tags.filter(function (x) { return x.Id === id; })[0];
        this.tagFrm.setValue(this.tag);
        this.modal.open();
    };
    TagComponent.prototype.deleteTag = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = 'Confirm to Delete?';
        this.modalBtnTitle = 'Delete';
        this.tag = this.tags.filter(function (x) { return x.Id === id; })[0];
        this.tagFrm.setValue(this.tag);
        this.modal.open();
    };
    TagComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.tagFrm.enable() : this.tagFrm.disable();
    };
    TagComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._tagService.post(global_1.Global.BASE_API_ENDPOINT + 'AddTags/', formData._value).subscribe(function (data) {
                    if (data === 1) {
                        _this.msg = "Data successfully added.";
                        _this.LoadTags();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.LoadTags();
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._tagService.put(global_1.Global.BASE_API_ENDPOINT + 'PutTag/', formData._value.Id, formData._value).subscribe(function (data) {
                    if (data === 1) {
                        _this.msg = "Data successfully updated.";
                        _this.LoadTags();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.LoadTags();
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                this._tagService.delete(global_1.Global.BASE_API_ENDPOINT + 'DeleteTag/', formData._value.Id).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadTags();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.LoadTags();
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    return TagComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], TagComponent.prototype, "modal", void 0);
TagComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/tag.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, tag_service_1.TagService])
], TagComponent);
exports.TagComponent = TagComponent;
//# sourceMappingURL=tag.component.js.map
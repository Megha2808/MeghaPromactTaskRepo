import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../../Service/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ICategory } from '../../Models/category';
import { DBOperation } from '../../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../Shared/global';

@Component({

    templateUrl: 'app/components/category/category.component.html'

})

export class CategoryComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    categories: ICategory[];
    category: ICategory;
    msg: string;
    indLoading: boolean = false;
    categoryFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _Service: Service) { }

    ngOnInit(): void {

        this.categoryFrm = this.fb.group({
            Id: [''],
            Name: ['', Validators.required]
        });

        this.LoadCategories();
    }
    LoadCategories(): void {
        this.indLoading = true;
        this._Service.get(Global.BASE_API_ENDPOINT + 'Categories/')
            .subscribe(categories => { this.categories = categories; this.indLoading = false; },
            error => this.msg = <any>error);
    }

    addCategory() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = 'Add New Category';
        this.modalBtnTitle = 'Add';
        this.categoryFrm.reset();
        this.modal.open();
    }

    editCategory(id: number) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = 'Edit Category';
        this.modalBtnTitle = 'Update';
        this.category = this.categories.filter(x => x.Id === id)[0];
        this.categoryFrm.setValue(this.category);
        this.modal.open();
    }

    deleteCategory(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = 'Confirm to Delete?';
        this.modalBtnTitle = 'Delete';
        this.category = this.categories.filter(x => x.Id === id)[0];
        this.categoryFrm.setValue(this.category);
        this.modal.open();
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.categoryFrm.enable() : this.categoryFrm.disable();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._Service.post(Global.BASE_API_ENDPOINT + 'addCategories/', formData._value).subscribe(
                    data => {
                        if (data === 1) // Success
                        {
                            this.msg = "Data successfully added.";
                            this.LoadCategories();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.LoadCategories();
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._Service.put(Global.BASE_API_ENDPOINT + 'PutCategory/', formData._value.Id, formData._value).subscribe(
                    data => {
                        if (data === 1) // Success
                        {
                            this.msg = "Data successfully updated.";
                            this.LoadCategories();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.LoadCategories();
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this._Service.delete(Global.BASE_API_ENDPOINT + 'DeleteCategory/', formData._value.Id).subscribe(
                    data => {
                        if (data == 1) // Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.LoadCategories();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.LoadCategories();
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
        }
    }

}

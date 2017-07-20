import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../../Service/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ICategory } from '../../Models/category';
import { IPost } from '../../Models/post';
import { ITag } from '../../Models/tag';
import { DBOperation } from '../../Shared/enum';
import { Global } from '../../Shared/global';

@Component({
    templateUrl: 'app/components/post/post.component.html'
})

export class PostComponent implements OnInit {   
    @ViewChild('modal') modal: ModalComponent;
    categories: ICategory[];
    Category_Id: ICategory;
    posts: IPost[];
    post: IPost;
    public tags: ITag[];
    public Tags: any[];
    msg: string;
    indLoading: boolean = false;
    postFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
       
    constructor(private fb: FormBuilder, private _Service: Service) { }

    LoadPost() {

        this._Service.get(Global.BASE_API_ENDPOINT + 'Categories/')
            .subscribe(categories => { this.categories = categories; this.indLoading = false; },
            error => this.msg = <any>error);
        this.indLoading = true;
        this._Service.get(Global.BASE_API_ENDPOINT + 'Posts/')
            .subscribe(postes => { this.posts = postes; this.indLoading = false; },
            error => this.msg = <any>error);
        this._Service.get(Global.BASE_API_ENDPOINT + 'Tags/')
            .subscribe(tags => { this.tags = tags; this.indLoading = false; },
            error => this.msg = <any>error);
    }
    ngOnInit(): void {
        this.LoadPost();
        this.postFrm = this.fb.group({
            Id: [''],
            Title: ['', Validators.required],
            Content: ['', Validators.required],
            Category_Id: ['', Validators.required],
            Tags: ['',Validators.required],
            username: [''],
            Categoryname: [''],
            Tagname: [''],
            partialcontent: [''],
            createdOn:['']                
        });                                   
    }
    onChange() {
        console.log(this.Tags);
        alert("changes");
    }    

    addPost() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = 'Add New Post';
        this.modalBtnTitle = 'Add';                      
        this.postFrm.reset();
        this.modal.open();
    }

    editPost(id: number) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = 'Edit Post';
        this.modalBtnTitle = 'Update';
        this.post = this.posts.filter(x => x.Id === id)[0];
        this.postFrm.setValue(this.post);
        this.modal.open();
    }

    deletePost(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = 'Confirm to Delete?';
        this.modalBtnTitle = 'Delete';
        this.post = this.posts.filter(x => x.Id === id)[0];
        this.postFrm.setValue(this.post);
        this.modal.open();
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.postFrm.enable() : this.postFrm.disable();
    }

    onSubmit(formData: any) {
        this.msg = "";
        switch (this.dbops) {
            case DBOperation.create:
                
                this._Service.post(Global.BASE_API_ENDPOINT + 'AddPosts/', formData._value).subscribe(
                    data => {
                        if (data === 1) // Success
                        {
                            this.msg = "Data successfully added.";
                            this.LoadPost();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.LoadPost();
                        }
                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._Service.put(Global.BASE_API_ENDPOINT + 'editpost/', formData._value.Id, formData._value).subscribe(
                    data => {
                        if (data === 1)
                        {
                            this.msg = "Data successfully updated.";
                            this.LoadPost();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.LoadPost();
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this._Service.delete(Global.BASE_API_ENDPOINT + 'Deletepost/', formData._value.Id).subscribe(
                    data => {
                        if (data === 1) // Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.LoadPost();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.LoadPost();
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

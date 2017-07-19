import { Component } from '@angular/core';
@Component({
    selector: "user-app",
    template: `
                <div>
                        <div id="navbar" class="col-sm-3" style="margin-top:20px; float:left;height:700px;">
                            <ul class="nav nav-pills nav-stacked">
                                <li><a [routerLink]="['Home/Admin/home']">Home</a></li>
                                <li><a [routerLink]="['Home/Admin/category']">Manage category</a></li>                                
                                <li><a [routerLink]="['Home/Admin/tag']">Manage Tag</a></li>
                                <li><a [routerLink]="['Home/Admin/post']">Manage Post</a></li> 
                                           
                            </ul>
                        </div>       
                        <div id="Content" class="col-md-8" style="border-left:solid; text-align:justify; float:right;margin-top:20px">
                            <router-outlet></router-outlet>
                        </div>
                </div>
                 
            `
})

export class AppComponent {

}

//  <div>
             //     <nav class='navbar navbar-inverse'>
             //          <div class='container-fluid'>
             //            <ul class='nav navbar-nav'>
             //              <li><a [routerLink]="['Home/Admin/home']">Home</a></li>
             //               <li><a [routerLink]="['Home/Admin/tag']">Tags Management</a></li>                      
             //               </ul>
             //         </div>
             //    </nav>    
             // <div class='container'>
             //   <router-outlet></router-outlet>
             // </div>
             // </div>      

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "user-app",
        template: "\n                <div>\n                        <div id=\"navbar\" class=\"col-sm-3\" style=\"margin-top:20px; float:left;height:700px;\">\n                            <ul class=\"nav nav-pills nav-stacked\">\n                                <li><a [routerLink]=\"['Home/Admin/home']\">Home</a></li>\n                                <li><a [routerLink]=\"['Home/Admin/category']\">Manage category</a></li>                                \n                                <li><a [routerLink]=\"['Home/Admin/tag']\">Manage Tag</a></li>\n                                <li><a [routerLink]=\"['Home/Admin/post']\">Manage Post</a></li> \n                                           \n                            </ul>\n                        </div>       \n                        <div id=\"Content\" class=\"col-md-8\" style=\"border-left:solid; text-align:justify; float:right;margin-top:20px\">\n                            <router-outlet></router-outlet>\n                        </div>\n                </div>\n                 \n            "
    })
], AppComponent);
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map
"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var tag_component_1 = require("./components/tag/tag.component");
var category_component_1 = require("./components/category/category.component");
var post_component_1 = require("./components/post/post.component");
var appRoutes = [
    { path: 'Home/Admin', redirectTo: 'Home/Admin/category', pathMatch: 'full' },
    { path: 'Home/Admin/home', component: home_component_1.HomeComponent },
    { path: 'Home/Admin/tag', component: tag_component_1.TagComponent },
    { path: 'Home/Admin/category', component: category_component_1.CategoryComponent },
    { path: 'Home/Admin/post', component: post_component_1.PostComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
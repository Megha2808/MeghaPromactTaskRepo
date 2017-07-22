"use strict";
var router_1 = require("@angular/router");
var tag_component_1 = require("./components/tag/tag.component");
var category_component_1 = require("./components/category/category.component");
var post_component_1 = require("./components/post/post.component");
var Index_Component_1 = require("./components/Blogs/Index.Component");
var appRoutes = [
    { path: 'Home/Admin', redirectTo: 'Home/Admin/category', pathMatch: 'full' },
    { path: 'Home/Admin/tag', component: tag_component_1.TagComponent },
    { path: 'Home/Admin/category', component: category_component_1.CategoryComponent },
    { path: 'Home/Admin/post', component: post_component_1.PostComponent },
    { path: 'Home/Blog', component: Index_Component_1.IndexBlogComponent },
    { path: 'Home/Blog/Category/:categoryName/:id', component: Index_Component_1.IndexBlogComponent },
    { path: 'Home/Blog/Tag/:tagName/:id', component: Index_Component_1.IndexBlogComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
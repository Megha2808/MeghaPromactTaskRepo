"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var tag_component_1 = require("./components/tag.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'tag', component: tag_component_1.TagComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
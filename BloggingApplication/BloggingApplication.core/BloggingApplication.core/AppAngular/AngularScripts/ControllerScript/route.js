/// <reference path="D:\GITRepo\MeghaPromactTaskRepo\BloggingApplication\BloggingApplication.core\BloggingApplication.core\Scripts/angular.js" />

var MyApp = angular.module("MyApp", ['ngRoute', 'Service', 'angularUtils.directives.dirPagination', 'ui.bootstrap','ngResource','ngAnimate']);

MyApp.config(['$routeProvider',
    function ($routeProvider) {
        //$routeProvider.hashPrefix('');
        $routeProvider.when('/category', {
            templateUrl: '/AppAngular/Html/DisplayCategory.html',
            controller: 'DisplayCategoryController'
        }).
        when('/tag', {
            templateUrl: '/AppAngular/Html/DisplayTags.html',
            controller: 'DisplayTagController'
        }).
        when('/post', {
            templateUrl: '/AppAngular/Html/DisplayPost.html',
            controller: 'DisplayPostController'
        }).
         when('/AddTag', {
             templateUrl: '/AppAngular/Html/AddTag.html',
             controller: 'AddTagController'
         }).
         when('/AddCategory', {
             templateUrl: '/AppAngular/Html/AddCategory.html',
             controller: 'AddCategoryController'
         }).
         when('/AddPost', {
             templateUrl: '/AppAngular/Html/AddPost.html',
             controller: 'AddPostController'
         }).
        when('/Tag/:param1/:param2',
        {
            templateUrl: '/AppAngular/Html/DisplayBlogs.html',
            controller: 'GetPostByTagController'
        }).
            when('/Category/:param1/:param2',
        {
            templateUrl: '/AppAngular/Html/DisplayBlogs.html',
            controller: 'GetPostByCategoryController'
        }).
        when('/',
        {
            templateUrl: '/AppAngular/Html/DisplayBlogs.html',
            controller: 'IndexController'
        }).
         when('/Admin',
        {
            templateUrl: '/AppAngular/Html/DisplayCategory.html',
            controller: 'DisplayCategoryController'
        })
        
    }]);

MyApp.filter('startFrom', function () {
    return function (input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
});

/// <reference path="D:\GITRepo\MeghaPromactTaskRepo\BloggingApplication\BloggingApplication.core\BloggingApplication.core\Scripts/angular.js" />

var MyApp = angular.module("MyApp", ['ngRoute','Service']);

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
         });
    }]);

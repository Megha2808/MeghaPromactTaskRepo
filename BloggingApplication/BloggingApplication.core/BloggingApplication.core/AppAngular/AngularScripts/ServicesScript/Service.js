﻿
var Service = angular.module('Service', []);

Service.factory('Api', function ($http) {
    var Api = {};

    /**********************************************************************
    Tag Service
    ************************************************************************/
    //alert("In service");
    ////Get all the employeeeeee.........
    Api.GetTags = function ()
    {
        return $http.get('/api/Tags');
    };

    Api.AddTag = function (tag) {
       // alert("In api methos");
        return $http.post('/api/AddTags',tag);
    };

    ///Update Tags
    Api.UpdateTag = function (tag) {
        //alert("Update api");
        var request = $http({
            method: 'put',
            url: '/api/PutTag',
            data:tag
        });
        return request;
    };

    //Delete
    Api.DeleteTag = function (id) {
        var request = $http({
            method: 'Delete',
            url: '/api/DeleteTag/' + id,
            data: id
        });
        return request;
    };

    /*********************************************************************
    Category
    **********************************************************************/

    Api.GetCategories = function () {
       // alert("In get cat methos");
        return $http.get('/api/Categories');
    };

    Api.AddCategory = function (tag) {
       // alert("In api methos of add");
        return $http.post('/api/addCategories', tag);
    };

    ///Update Tags
    Api.UpdateCategory = function (category) {
        //alert("Update api");
        var request = $http({
            method: 'put',
            url: '/api/PutCategory',
            data: category
        });
        return request;
    };

    //Delete
    Api.DeleteCategory = function (id) {
        var request = $http({
            method: 'Delete',
            url: '/api/DeleteCategory/' + id,
            data: id
        });
        return request;
    };

   /***********************************************************************
    Post Services
    ************************************************************************/
    Api.AddPost =  function (post) {
       // alert("In api methos of add");
        return $http.post('/api/AddPosts', post);
    };
    
    Api.GetPosts = function () {
        //alert("In service method");
        return $http.get('/api/Posts');
    };
    return Api;

});
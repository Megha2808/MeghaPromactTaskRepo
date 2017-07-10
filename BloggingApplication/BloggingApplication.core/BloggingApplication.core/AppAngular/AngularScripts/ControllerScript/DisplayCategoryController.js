﻿MyApp.controller("DisplayCategoryController", function ($scope, Api) {

    //$scope.message = "In category";
    alert("In cat.....");

    /****************************************************
                         Get Tags
     ****************************************************/
    GetCategories();
    function GetCategories() {
        alert("Get cats.......");
        Api.GetCategories()
        .then(function (response) {
            $scope.category = response.data;
            alert($scope.category);
        },
        function () {
            alert("Fail..");
        });
    }

    /****************************************************
                     Edit  Tag...........
    ****************************************************/
    $scope.CategoryDetail = {
        Name: '',
        Id: ''
    };
    $scope.GetCategoryById = function (data) {
        $scope.CategoryDetail =
            {
                Name: data.Name,
                Id: data.Id
            };
    };

    /****************************************************
                         Update  Department...........
    ****************************************************/

    $scope.Update = function () {
        alert("In update");
        var categoryToUpdate =
            {
                'Name': $scope.CategoryDetail.Name,
                'Id': $scope.CategoryDetail.Id
            };
        //Call service.js method
        Api.UpdateCategory(categoryToUpdate)
            .then(function (response) {
                alert("Category Updated");
                window.location.href = '/AdminHome/Index#!/category';
                $scope.CategoryDetail.Id = '';
                GetCategories();
            }, function () {
                alert("Error in adding");
            }
            );
    };

/******************************************
        Tags
***********************************************/
    $scope.DeleteCategory = function (Id) {
        Api.DeleteCategory(Id).
            then(function () {
                window.location.href = '/AdminHome/Index#!/category';
                alert("Deleted Successfully.");
                GetCategories();               
            }, function () {
                alert("Error while delete");
                GetCategories();
            });
    };



});

MyApp.controller("AddCategoryController", function ($scope, Api) {
    $scope.AddCategory = function () {
        alert("in add cat con");
        if ($scope.Name !== '') {
            alert("in if condition");
            var tagToAdd =
                {
                    'Name': $scope.Name
                };
            alert($scope.Name);

            //Call service.js method
            Api.AddCategory(tagToAdd)
                .then(function (response) {
                    alert("Tag added");
                    window.location.href = '/AdminHome/Index#!/category';
                    $scope.Name = undefined;
                }, function () {
                    alert("Error in adding");
                }
                );
        }
        else {
            alert("Please enter all the fields");
        }
    };
});

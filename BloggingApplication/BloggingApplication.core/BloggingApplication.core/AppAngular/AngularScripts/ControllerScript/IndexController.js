
MyApp.controller("IndexController", function ($scope, Api) {
    //$scope.message = "In category";
   alert("In index");
   GetPosts();
   function GetPosts() {
       // alert("In get post...method.. ");
       Api.GetPosts()
       .then(function (response) {
           $scope.post = response.data;
       },
       function () {
           alert("Fail..");
       });
   }
    /****************************************************
                         Get Tags
     ****************************************************/
    GetTags();
    function GetTags() {
        //alert("Get tags.......");
        Api.GetTags()
        .then(function (response) {
            $scope.taglist = response.data;
            //alert($scope.tag);
        },
        function () {
            alert("Fail..to load taglist");
        });
    }
    GetCategories();
    function GetCategories() {
        //alert("Get tags.......");
        Api.GetCategories()
        .then(function (response) {
            $scope.categorylist = response.data;
            //alert($scope.tag);
        },
        function () {
            alert("Fail..to load Category list");
        });
    }

    $scope.GetPostByCategoryId = function (data) {
        GetPostsByCategory();
        function GetPostsByCategory() {
            //alert("In get post...method.. ");
            Api.GetPostsByCategoryId(data)
            .then(function (response) {
                $scope.post = response.data;
            },
            function () {
                alert("Fail..");
            });
        }
    };

    $scope.GetPostByTagId = function (data) {
        GetPostsByTag();
        function GetPostsByTag() {
            //alert("In get post...method.. ");
            Api.GetPostsByTagId(data)
            .then(function (response) {
                $scope.post = response.data;
            },
            function () {
                alert("Fail..");
            });
        };
    }
});
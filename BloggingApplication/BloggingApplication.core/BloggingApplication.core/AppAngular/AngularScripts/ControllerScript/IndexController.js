
MyApp.controller("IndexController", function ($scope ,$routeParams, Api) {

    $scope.PageSize = 5;
    $scope.currentPage = 1;
   
    GetPosts();
    function GetPosts() {
        // alert("In get post...method.. ");
        Api.GetPosts()
        .then(function (response) {
            $scope.post = response.data;            
        },
        function () {
            alert("Fail toload posts");
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
            alert("Fail to load taglist");
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
            alert("Fail to load Category list");
        });
    }

    //$scope.GetPostByCategoryId = function (data) {
    //    GetPostsByCategory();
    //    function GetPostsByCategory() {
    //        //alert("In get post...method.. ");
    //        Api.GetPostsByCategoryId(data)
    //        .then(function (response) {
    //            $scope.post = response.data;
    //        },
    //        function () {
    //            alert("Fail..");
    //        });
    //    }
    //};
   
    $scope.PostDetail = {
        Id: '',
        Title: '',
        Categoryname: '',
        username: '',
        createdOn: '',
        Content: '',
        partialcontent: ''
    };
    $scope.GetPostContentById = function (data) {
        //alert("in post by id");
        //alert(data.Id);
        $scope.PostDetail =
            {
                Id: data.Id,
                Title: data.Title,
                Categoryname: data.Categoryname,
                username: data.username,
                createdOn: data.createdOn,
                Content: data.Content,
                partialcontent: data.partialcontent
            };
    };
    $scope.BackToIndex = function () {
        window.location.href = '/Home/Index';
        $scope.PostDetail.Id = '';
    }
});

MyApp.controller("GetPostByTagController", function ($scope, $routeParams, Api) {
  
    $scope.PageSize = 5;
    $scope.currentPage = 1;
       
        GetPostsByTag();
        function GetPostsByTag() {
            //alert("In get post...method.. ");
            Api.GetPostsByTagId($routeParams.param2)
            .then(function (response) {
                $scope.post = response.data;
               // alert(response.data);
            },
            function () {
                alert("Fail..");
            });
        };
        $scope.PostDetail = {
            Id: '',
            Title: '',
            Categoryname: '',
            username: '',
            createdOn: '',
            Content: '',
            partialcontent: ''
        };
        $scope.GetPostContentById = function (data) {
            //alert("in post by id");
            //alert(data.Id);
            $scope.PostDetail =
                {
                    Id: data.Id,
                    Title: data.Title,
                    Categoryname: data.Categoryname,
                    username: data.username,
                    createdOn: data.createdOn,
                    Content: data.Content,
                    partialcontent: data.partialcontent
                };
        };
        $scope.BackToIndex = function () {
            window.location.href = '/Home/Index';
            $scope.PostDetail.Id = '';
        }

});

MyApp.controller("GetPostByCategoryController", function ($scope, $routeParams, Api) {
   
    $scope.PageSize = 5;
    $scope.currentPage = 1;

    GetPostsByCategory();
    function GetPostsByCategory() {
        //alert("In get post...method.. ");
        Api.GetPostsByCategoryId($routeParams.param2)
        .then(function (response) {
            $scope.post = response.data;
        },
        function () {
            alert("Fail..");
        });
    };

    $scope.PostDetail = {
        Id: '',
        Title: '',
        Categoryname: '',
        username: '',
        createdOn: '',
        Content: '',
        partialcontent: ''
    };
    $scope.GetPostContentById = function (data) {
        
        $scope.PostDetail =
            {
                Id: data.Id,
                Title: data.Title,
                Categoryname: data.Categoryname,
                username: data.username,
                createdOn: data.createdOn,
                Content: data.Content,
                partialcontent: data.partialcontent
            };
    };
    $scope.BackToIndex = function () {
        window.location.href = '/Home/Index';
        $scope.PostDetail.Id = '';
    }

});
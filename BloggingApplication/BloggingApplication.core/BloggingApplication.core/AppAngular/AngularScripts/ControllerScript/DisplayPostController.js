MyApp.controller("DisplayPostController", function ($scope, Api) {
    GetPosts();
    function GetPosts() {
        //alert("In get post...method.. ");
        Api.GetPosts()
        .then(function (response) {
            $scope.post = response.data;
        },
        function () {
            alert("Fail..");
        });
    }

    /****************************************************
                     Edit  Post
    ****************************************************/

    GetCategories();
    function GetCategories() {
        //alert("In get cat ");
        Api.GetCategories()
        .then(function (response) {
            $scope.CategoryList = response.data;
        },
        function () {
            alert("Fail to load category list");
        });
    }

    GetTags();
    function GetTags() {
        Api.GetTags()
       .then(function (response) {
           $scope.TagList = response.data;
           $scope.SelectedTag = [];
       },
       function () {
           alert("Fail to load tag list");
       });
    }

    $scope.PostDetail = {
        Id: '',
        Title: '',
        Content: '',
        Category_Id: '',
        Tags: ''
    };

    $scope.GetPostById = function (data) {

        $scope.PostDetail =
            {
                Id: data.Id,
                Title: data.Title,
                Content: data.Content,
                Category_Id: data.Category_Id,
                Tags: data.Tagname.Name
            };
    };

    /****************************************************
                         Update Post
    ****************************************************/

    $scope.UpdatePost = function () {
        //alert("In update");
        var postToUpdate =
            {
                'Id': $scope.PostDetail.Id,
                'Title': $scope.PostDetail.Title,
                'Content': $scope.PostDetail.Content,
                'Category_Id': $scope.PostDetail.Category_Id,
                'Tags': $scope.PostDetail.Tags
            };
        //Call service.js method
        Api.UpdatePost(postToUpdate)
            .then(function (response) {
                alert("post Updated");
                window.location.href = '/AdminHome/Index#!/post';
                $scope.PostDetail.Id = '';
                GetPosts();
            }, function () {
                alert("Error in adding");
            }
            );
    };

    /******************************************
           Post to delete
    ***********************************************/
    $scope.DeletePost = function (Id) {
        Api.DeletePost(Id).
            then(function () {
                window.location.href = '/AdminHome/Index#!/post';
                alert("Deleted Successfully.");
                GetPosts();
            }, function () {
                alert("Not Deleted Successfully");
                GetPosts();
            });
    };

    $scope.cancel = function () {
        window.location.href = '/AdminHome/Index#!/post';
        $scope.PostDetail.Id = '';
    };

});

MyApp.controller("AddPostController", function ($scope, Api) {
    GetCategories();
    function GetCategories() {
        //alert("In get cat ");
        Api.GetCategories()
        .then(function (response) {
            $scope.CategoryList = response.data;
        },
        function () {
            alert("Fail to load categories");
        });
    }
    GetTags();
    function GetTags() {
        Api.GetTags()
       .then(function (response) {
           $scope.TagList = response.data;
           $scope.SelectedTag = [];
       },
       function () {
           alert("Fail to get tags");
       });
    }

    $scope.cancel = function () {
        window.location.href = '/Home/Index';
    };

    // alert("in add post con");
    $scope.AddNewPost = function () {

        if ($scope.Title !== null) {
            // alert("in if condition");
            var postToAdd =
                {
                    'Title': $scope.Title,
                    'Content': $scope.Content,
                    'Category_Id': $scope.Category,
                    'Tags': $scope.SelectedTag
                };

            //Call service.js method
            Api.AddPost(postToAdd)
                .then(function (response) {
                    alert("Post added");
                    window.location.href = '/Home/Index';
                    $scope.Name = undefined;
                }, function () {
                    alert("Error in adding");
                });
        }
        else {
            alert("Please enter all the fields");
        }
    };
});

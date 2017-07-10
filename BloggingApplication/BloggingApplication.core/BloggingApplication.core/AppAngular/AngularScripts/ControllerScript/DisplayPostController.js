MyApp.controller("DisplayPostController", function ($scope,Api) {   
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
            alert("Fail..");
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
           alert("Fail..");
       });
    }

    //angular.forEach(Taglist, function (categoryvalue, categorykey) {

    //    $scope.Taglist.push({
    //        label: categoryvalue.Name,
    //        value: categoryvalue.Id,
    //    });
    //})
    //var currentDetailIndex = $scope.Taglist.map(function (e) { return e.value; }).indexOf(currentCatValue);
    //$scope.selectedCategory = $scope.Taglist[currentDetailIndex];

    $scope.PostDetail = {       
        Id: '',
        Title: '',
        Content: '',
        Category_Id: '',
        Tags:''
    };

    $scope.GetPostById = function (data) {

        $scope.TagDetail =
            {               
                Id: data.Id,
                Title: data.Title,
                Content: data.Content,
                Category_Id: data.Category_Id,
                Tags: data.Tagname.Name
            };
    };

    /****************************************************
                         Update  Tag...........
    ****************************************************/

    $scope.Update = function () {
        alert("In update");
        var tagToUpdate =
            {
                'Name': $scope.TagDetail.Name,
                'Id': $scope.TagDetail.Id
            };
        //Call service.js method
        Api.UpdateTag(tagToUpdate)
            .then(function (response) {
                alert("Tag Updated");
                window.location.href = '/AdminHome/Index#!/tag';
                $scope.TagDetail.Id = '';
                GetTags();
            }, function () {
                alert("Error in adding");
            }
            );
    };

/******************************************
       Tags to delete
***********************************************/
    $scope.DeleteTag = function (Id) {
        Api.DeleteTag(Id).
            then(function () {
                window.location.href = '/AdminHome/Index#!/tag';
                alert("Deleted Successfully.");
                GetTags();
            }, function () {
                alert("This department has not employee assigned");
                GetTags();
            });
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
            alert("Fail..");
        });
    }
    GetTags();
    function GetTags()
    {
        Api.GetTags()
       .then(function (response) {
           $scope.TagList = response.data;
           $scope.SelectedTag = [];
       },
       function () {
           alert("Fail..");
       });
    }
    alert("in add post con");
    $scope.AddNewPost = function () {
               
        if ($scope.Title !== null) {
            alert("in if condition");
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
                    window.location.href = '/AdminHome/Index#!/post';
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

MyApp.controller("DisplayTagController", function ($scope, Api) {
    //$scope.message = "In category";
    //("In Tag.....");

    /****************************************************
                         Get Tags
     ****************************************************/
    GetTags();
    function GetTags() {
        //alert("Get tags.......");
        Api.GetTags()
        .then(function (response) {
            $scope.tag = response.data;
            //alert($scope.tag);
        },
        function () {
            alert("Fail..");
        });
    }

    /****************************************************
                     Edit  Tag...........
    ****************************************************/
    $scope.TagDetail = {
        Name: '',
        Id: ''
    };
    $scope.GetTagById = function (data) {
        $scope.TagDetail =
            {
                Name: data.Name,
                Id: data.Id
            };
    };

    /****************************************************
                         Update  Tag...........
    ****************************************************/

    $scope.Update = function () {
       // alert("In update");
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
*********************************************/
    $scope.DeleteTag = function (Id) {
        Api.DeleteTag(Id).
            then(function () {
                window.location.href = '/AdminHome/Index#!/tag';
                alert("Deleted Successfully.");
                GetTags();
            }, function () {
                alert("Not deleted successfully");
                GetTags();
            });
    };

});

MyApp.controller("AddTagController", function ($scope, Api) {
    $scope.AddNewTag = function () {
       // alert("in add tag con");
        if ($scope.Name !== '') {
           // alert("in if condition");
            var tagToAdd =
                {
                    'Name': $scope.Name
                };
            alert($scope.Name);

            //Call service.js method
            Api.AddTag(tagToAdd)
                .then(function (response) {
                    alert("Tag added");
                    window.location.href = '/AdminHome/Index#!/tag';
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
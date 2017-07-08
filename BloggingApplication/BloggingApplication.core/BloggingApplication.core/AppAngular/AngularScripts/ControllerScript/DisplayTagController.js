MyApp.controller("DisplayTagController", function ($scope, TagApi) {
    //$scope.message = "In category";
    //alert("In Tag.....");

   /****************************************************
                        Get Tags
    ****************************************************/   
    GetTags();
    function GetTags() {
        alert("Get tags.......");
        TagApi.GetTags()
        .then(function (response) {
            $scope.tag = response.data;
            alert($scope.tag);
        },
        function ()
        {
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
                         Update  Department...........
    ****************************************************/

    $scope.Update = function () {
        alert("In update");
        var tagToUpdate =
            {
                'Name': $scope.TagDetail.Name,
                'Id': $scope.TagDetail.Id
            };
        //Call service.js method
        TagApi.UpdateTag(tagToUpdate)
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
                  @  Delete TAgs
***********************************************/
    $scope.DeleteTag = function (Id) {
        TagApi.DeleteTag(Id).
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

MyApp.controller("AddTagController", function ($scope, TagApi) {
    $scope.AddNewTag = function () {
        alert("in add tag con");
        if ($scope.Name !== '') {
            alert("in if condition");
            var tagToAdd =
                {
                    'Name': $scope.Name
                };
            alert($scope.Name);

            //Call service.js method
            TagApi.AddTag(tagToAdd)
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
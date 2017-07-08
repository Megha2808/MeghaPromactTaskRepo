

var TagService = angular.module('TagService', []);

TagService.factory('TagApi', function ($http) {
    var TagApi = {};
    //alert("In service");
    ////Get all the employeeeeee.........
    TagApi.GetTags = function ()
    {
        return $http.get('/api/Tags');
    };

    TagApi.AddTag = function (tag) {
        alert("In api methos");
        return $http.post('/api/AddTags',tag);
    };

    ///Update Tags
    TagApi.UpdateTag = function (tag) {
        alert("Update api");
        var request = $http({
            method: 'put',
            url: '/api/PutTag',
            data:tag
        });
        return request;
    };

    //Delete
    TagApi.DeleteTag = function(id)
    {
        var request = $http({
            method: 'Delete',
            url: '/api/DeleteTag/' + id,
            data: id
        });
        return request;
    }

    return TagApi;

});
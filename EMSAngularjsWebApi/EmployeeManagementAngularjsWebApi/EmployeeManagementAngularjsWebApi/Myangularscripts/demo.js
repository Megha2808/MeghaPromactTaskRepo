/// <reference path="c:\users\megha\documents\visual studio 2015\Projects\angularLearn\angularLearn\Scripts/angular.js" />
/// <reference path="c:\users\megha\documents\visual studio 2015\Projects\angularLearn\angularLearn\Scripts/angular-route.js" />

var MyApp = angular.module("MyApp", ['ngRoute', 'EmployeeService']);

MyApp.config(['$routeProvider',
    function ($routeProvider) {
        //$routeProvider.hashPrefix('');
        $routeProvider.when('/Add', {
            templateUrl: 'HTML/addEmployee.html',
            controller: 'AddController'
        }).
        when('/AddDepartment', {
            templateUrl: 'HTML/DepartmentAdd.html',
            controller: 'AddDepartmentController'
        }).
        when('/Department', {
            templateUrl: 'HTML/DepartmentHome.html',
            controller: 'DepartmentHomeController'
        }).
        when('/Employee', {
            templateUrl: 'HTML/home.html',
            controller: 'HomeController'
            // });
        }).
        otherwise({
            redirectTo: 'HTML/Employee'
        });
    }]);


/*************************************************************
   START   Employeee ADD UPDATE DELETE CONTROLLERS
**************************************************************/

//Add Controller
MyApp.controller("AddController", function ($scope, EmpApi) {

    //Get department
    GetDepartmentss();
    function GetDepartmentss() {
        EmpApi.getDepartment()
        .then(function (response) {
            $scope.DepartmentList = response.data;
        },
        function () {
            alert("Fail..");
        });
    }

    //Add employee

    $scope.addEmp = function () {
        //alert("in addemp");
        if ($scope.name !== null && $scope.sal !== null && $scope.Department !== null) {
            var empToAdd =
                {
                    'name': $scope.name,
                    'salary': $scope.sal,
                    'DepartmentId': $scope.Department
                };

            //Call service.js method
            EmpApi.AddEmployee(empToAdd)
                .then(function (response) {
                    alert("user added");
                    window.location.href = '/Index.html#!/Employee';
                    $scope.name = undefined;
                    $scope.sal = undefined;
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


////Home Controller
MyApp.controller("HomeController", function ($scope, EmpApi) {

    /****************************************************
                        Get employees
    ****************************************************/
    GetEmployees();
    function GetEmployees() {

        // $scope.emmm = "hello..";

        EmpApi.getEmployees()
            .then(function (response) {
                $scope.emps = response.data;
            }, function () { alert("Fail.."); }
            );

    }


/*
 @    Delete  employees
*/
    $scope.DeleteUser = function (Id) {
        EmpApi.DeleteEmployee(Id).
            then(function () {
                window.location.href = '/Index.html#!/Employee';
                alert("Deleted Successfully.");
                GetEmployees();
            }, function () {
                alert("Failed");
            });
    };

    /****************************************************
                     Edit  employees...........
    ****************************************************/
    $scope.EmployeeDetail = {
        EmployeeId: '',
        Name: '',
        salary: '',
        DepartmentId: ''
    };
    $scope.GetEmployeeById = function (data) {
        $scope.EmployeeDetail =
            {
                EmployeeId: data.Id,
                Name: data.Name,
                salary: data.Salary,
                DepartmentId: data.DepartmentId
            };
        GetDepartmentss();
        function GetDepartmentss() {

            EmpApi.getDepartment()
            .then(
            function (response) {
                $scope.DepartmentList = response.data;
            },
            function () { alert("Fail.."); }
                );
        }
    };

    /****************************************************
                         Update  employees...........
    ****************************************************/
    if ($scope.EmployeeDetail.Name !== null && $scope.EmployeeDetail.salary !== null && $scope.EmployeeDetail.DepartmentId !== null) {
        $scope.Update = function () {
            // alert("In update");
            var empToUpdate =
                {
                    'name': $scope.EmployeeDetail.Name,
                    'salary': $scope.EmployeeDetail.salary,
                    'DepartmentId': $scope.EmployeeDetail.DepartmentId,
                    'EmployeeId': $scope.EmployeeDetail.EmployeeId
                };

            //Call service.js method
            EmpApi.UpdateEmployee(empToUpdate)
                .then(function (response) {
                    alert("user Updated");
                    window.location.href = '/Index.html#!/Employee';
                    $scope.EmployeeDetail.EmployeeId = '';
                    GetEmployees();
                }, function () {
                    alert("Error in adding");
                }
                );
        };
    }
    else {
        alert("Please enter all the fields");
    }

});
/*************************************************************
   END OF Employeee ADD UPDATE DELETE CONTROLLERS
**************************************************************/





/*************************************************************
   START DEPARTMENT ADD UPDATE CONTROLLERS
**************************************************************/

//Add Controller
MyApp.controller("AddDepartmentController", function ($scope, EmpApi) {
    // alert("in add dep controller");

    $scope.addDep = function () {
        //alert("in addemp");

        var depToAdd =
            {
                'DepartmentName': $scope.DepartmentDetail.Name
            };

        //Call service.js method
        EmpApi.AddDepartment(depToAdd)
            .then(function (response) {
                alert("Department added");
                window.location.href = '/Index.html#!/Department';
                $scope.DepartmentDetail.Name = undefined;
                $scope.DepartmentDetail.Id = undefined;
            }, function () {
                alert("Error in adding");
            }
            );
    };

});


////Home Controller
MyApp.controller("DepartmentHomeController", function ($scope, EmpApi) {

    /****************************************************
                        Get Department
    ****************************************************/
    //alert("Get dep");
    GetDepartmentss();
    function GetDepartmentss() {
        EmpApi.getDepartment()
        .then(function (response) {
            $scope.dep = response.data;
            // alert($scope.dep);
        },
        function () {
            alert("Fail..");
        });
    }


    /*
                    @  Delete  Department...........
 **/
    $scope.DeleteDepartment = function (Id) {
        EmpApi.DeleteDepartment(Id).
            then(function () {
                window.location.href = '/Index.html#!/Department';
                alert("Deleted Successfully.");
                GetDepartmentss();
            }, function () {
                alert("This department has not employee assigned");
                GetDepartmentss();
            });
    };

    /****************************************************
                     Edit  Department...........
    ****************************************************/
    $scope.DepartmentDetail = {
        Name: '',
        Id: ''
    };
    $scope.GetDepartmentById = function (data) {
        $scope.DepartmentDetail =
            {
                Name: data.Name,
                Id: data.Id
            };
    };

    /****************************************************
                         Update  Department...........
    ****************************************************/

    $scope.Update = function () {
        //alert("In update");
        var depToUpdate =
            {
                'DepartmentName': $scope.DepartmentDetail.Name,
                'DepartmentId': $scope.DepartmentDetail.Id
            };
        //Call service.js method
        EmpApi.UpdateDepartment(depToUpdate)
            .then(function (response) {
                alert("Department Updated");
                window.location.href = '/Index.html#!/Department';
                $scope.DepartmentDetail.Id = '';
                GetDepartmentss();
            }, function () {
                alert("Error in adding");
            }
            );
    };

});
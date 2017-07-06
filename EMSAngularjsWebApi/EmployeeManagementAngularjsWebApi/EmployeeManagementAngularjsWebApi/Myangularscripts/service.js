/// <reference path="C:\Users\megha\documents\visual studio 2015\Projects\angularLearn\angularLearn\Scripts/angular.js" />

var EmployeeService = angular.module('EmployeeService', []);

EmployeeService.factory('EmpApi', function ($http) {
    var EmpApi = {};

    ////Get all the employeeeeee.........
    EmpApi.getEmployees = function () {
        return $http.get('/api/Employees');
    };

    ////Add Employeeeeeee.......
    EmpApi.AddEmployee = function (emp) {
        //alert("Inreturnfun");
        return $http.post('/api/Employees', emp);
    };
    ///Update Employeeeee.........
    EmpApi.UpdateEmployee = function (empToUpdate) {
        var request = $http({
            method: 'put',
            url: '/api/Employees/' + empToUpdate.EmployeeId,
            data: empToUpdate
        });
        return request;
    };
    //Delete Employeeeeee.........
    EmpApi.DeleteEmployee = function (id) {
        //alert("in delete");
        var request = $http({
            method: 'Delete',
            url: '/api/Employees/' + id,
            data: id
        });
        return request;
    };
    ///Get emploee by id.........
    EmpApi.GetEmployeeById = function (id) {
        alert("in getemp");
        var request = $http({
            method: 'get',
            url: '/api/Employees/' + id,
            data: id
        });
        return request;
    };

    /******************************************************************
    Department Methods.......................
    ********************************************************************/
    ///Deartment  Department.................
    EmpApi.getDepartment = function () {
        //alert("Inreturnfun");
        return $http.get('/api/Departments');
    };

    ///Add Department..............
    EmpApi.AddDepartment = function (dep) {
        //alert("Inreturnfun");
        return $http.post('/api/Departments', dep);
    };

    ///Update Employeeeee.........
    EmpApi.UpdateDepartment = function (depToUpdate) {
        //alert("aaa");
        var request = $http({
            method: 'put',
            url: '/api/Departments/' + depToUpdate.DepartmentId,
            data: depToUpdate
        });
        return request;
    };

    //Delete Department.........
    EmpApi.DeleteDepartment = function (id) {
        //alert("in delete");
        var request = $http({
            method: 'Delete',
            url: '/api/Departments/' + id,
            data: id
        });
        return request;
    };
    return EmpApi;

});
using IdentityManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace IdentityManagement.Controllers
{
    public class EmployeeController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();

        //GET: Employee
        #region Index
        [Authorize(Roles = "Admin,Employee")]
        public ActionResult Index()
        {
            List<Department> departmentlist = db.Departments.Where(x => x.IsDeleted == false).ToList();
            ViewBag.DepartmentList = new SelectList(departmentlist, "DepartmentId", "DepartmentName");

            List<EmployeeVM> listEmp = new List<EmployeeVM>();
            IEnumerable<string> roles = TempData["Message"] as IEnumerable<string>;
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            var department = TempData["DepartmentId"];
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");
            bool isAdmin = false;
            bool isEmploee = false;
            if (roles != null)
            {
                foreach (var role in roles)
                {
                    if (role == "Admin")
                    {
                        isAdmin = true;
                    }
                    else if (role == "Employee")
                    {
                        isEmploee = true;
                    }
                }

                //Get all employeelist for admin
                if (isAdmin == true)
                {
                    listEmp = db.Users
                        .Where(x => x.IsDeleted == false)
                        .Select
                        (x => new EmployeeVM
                        {
                            RegisterUsername = x.UserName,
                            RegisterEmail = x.Email,
                            BirthDate = x.BirthDate,
                            DepartmentName = x.Department.DepartmentName,
                            Id = x.Id,
                        }).ToList();
                }
                //get department wise employeelist for Employee
                else if (isEmploee == true & isAdmin == false)
                {
                    var departmentid = TempData["DepartmentId"];
                    listEmp = db.Users
                    .Where(x =>
                    x.DepartmentId.ToString() == departmentid.ToString()
                    && x.IsDeleted == false)
                    .Select
                    (x => new EmployeeVM
                    {
                        RegisterUsername = x.UserName,
                        RegisterEmail = x.Email,
                        BirthDate = x.BirthDate,
                        DepartmentName = x.Department.DepartmentName,
                        Id = x.Id,
                    }).ToList();
                }
            }
            ViewBag.EmployeeList = listEmp;
            return View();
        }
        #endregion


        #region Edit Employee
        public ActionResult EditEmployee(string EmployeeId)
        {
            var rolename = TempData["Message"];
            var id = TempData["DepartmentId"];
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");

            List<Department> departmentlist = db.Departments.Where(x => x.IsDeleted == false).ToList();
            ViewBag.DepartmentList = new SelectList(departmentlist, "DepartmentId", "DepartmentName");
            RegisterViewModel model = new RegisterViewModel();

            if (EmployeeId != null)
            {
                ApplicationUser emp = db.Users.SingleOrDefault(x => x.Id == EmployeeId && x.IsDeleted == false);
                model.BirthDate = emp.BirthDate;
                model.ConfirmPassword = emp.PasswordSimple;
                model.Country = emp.Country;
                model.DepartmentId = emp.DepartmentId;
                model.FirstName = emp.FirstName;
                model.IsDeleted = false;
                model.LastName = emp.LastName;
                model.RegisterEmail = emp.Email;
                model.RegisterUsername = emp.UserName;
                model.Id = emp.Id;
            }
            return View(model);
        }

        [HttpPost]
        public ActionResult EditEmployee(RegisterViewModel model)
        {
            var rolename = TempData["Message"];
            var id = TempData["DepartmentId"];
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");

            List<Department> departmentlist = db.Departments.Where(x => x.IsDeleted == false).ToList();
            ViewBag.DepartmentList = new SelectList(departmentlist, "DepartmentId", "DepartmentName");
            if (model.Id != null)
            {

                ApplicationUser emp = db.Users.SingleOrDefault(x => x.Id == model.Id && x.IsDeleted == false);
                emp.BirthDate = model.BirthDate;
                emp.PasswordSimple = model.ConfirmPassword;
                emp.Country = model.Country;
                emp.DepartmentId = model.DepartmentId;
                emp.FirstName = model.FirstName;
                model.IsDeleted = false;
                emp.LastName = model.LastName;
                emp.Email = model.RegisterEmail;
                emp.UserName = model.RegisterUsername;
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(model);
        }

        #endregion

        #region Delete Employee
        public ActionResult DeleteEmployee(string EmployeeId)
        {

            EmployeeVM model = new EmployeeVM();
            if (EmployeeId != null)
            {
                ApplicationUser emp = db.Users.SingleOrDefault(x => x.Id == EmployeeId && x.IsDeleted == false);
                if (emp != null)
                {
                    emp.IsDeleted = true;
                    db.SaveChanges();
                    ViewBag.message = "Record deleted";
                }
                else
                {
                    ViewBag.message = "Something went wrong";
                }
            }
            return View();
        }
        #endregion


        [Authorize(Roles = "Admin,Employee")]

        public ActionResult UserDashBoard()
        {
            var rolename = TempData["Message"];
            var id = TempData["DepartmentId"];
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");
            return View();
        }

    }
}
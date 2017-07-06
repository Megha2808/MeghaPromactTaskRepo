using IdentityManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IdentityManagement.Controllers
{
    public class DepartmentController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        // GET: Department
        #region Index Department
        [Authorize(Roles = "Admin,Employee")]
        public ActionResult Index()
        {
            var rolename = TempData["Message"];
            var id = TempData["DepartmentId"];
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");
            //EmployeeDepartmentEntities db = new EmployeeDepartmentEntities();
            List<DepartmentVM> listDep = db.Departments
                .Where(x => x.IsDeleted == false)
                .Select
                (x => new DepartmentVM
                {
                    DepartmentId = x.DepartmentId,
                    DepartmentName = x.DepartmentName
                }).ToList();
            ViewBag.DepartmentList = listDep;
            return View();
        }
        #endregion

        #region Insert Department
        public ActionResult Insert(DepartmentVM model)
        {
            var rolename = TempData["Message"];
            var id = TempData["DepartmentId"];
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");

            if (ModelState.IsValid)
            {
                try
                {
                    if (model.DepartmentId > 0)
                    {
                        //update
                        Department dep = db.Departments.SingleOrDefault(x => x.DepartmentId == model.DepartmentId && x.IsDeleted == false);
                        dep.DepartmentName = model.DepartmentName;
                        db.SaveChanges();
                    }
                    else
                    {
                        //Insert
                        Department dep = new Department();
                        dep.DepartmentName = model.DepartmentName;
                        dep.IsDeleted = false;
                        db.Departments.Add(dep);
                        db.SaveChanges();
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return View(model);
        }
        #endregion

        #region Edit Department
        public ActionResult EditDepartment(int DepartmentId)
        {
            var rolename = TempData["Message"];
            var id = TempData["DepartmentId"];
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");
            DepartmentVM model = new DepartmentVM();
            if (DepartmentId > 0)
            {
                //update
                Department dep = db.Departments.SingleOrDefault(x => x.DepartmentId == DepartmentId && x.IsDeleted == false);
                model.DepartmentId = dep.DepartmentId;
                model.DepartmentName = dep.DepartmentName;
            }
            return View(model);
        }

        [HttpPost]
        public ActionResult EditDepartment(DepartmentVM model)
        {
            var rolename = TempData["Message"];
            var id = TempData["DepartmentId"];
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");
            if (ModelState.IsValid)
            {
                try
                {
                    if (model.DepartmentId > 0)
                    {
                        //update
                        Department dep = db.Departments.SingleOrDefault(x => x.DepartmentId == model.DepartmentId && x.IsDeleted == false);
                        dep.DepartmentName = model.DepartmentName;
                        db.SaveChanges();
                        return RedirectToAction("Index");
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return View(model);
        }
        #endregion

        #region Delete Department
        public ActionResult DeleteDepartment(int DepartmentId)
        {
            var rolename = TempData["Message"];
            var id = TempData["DepartmentId"];
            var empid = TempData["EmployeeId"];
            TempData.Keep("Message");
            TempData.Keep("DepartmentId");
            TempData.Keep("EmployeeId");
            //EmployeeDepartmentEntities db = new EmployeeDepartmentEntities();
            DepartmentVM model = new DepartmentVM();
            if (DepartmentId > 0)
            {
                Department dep = db.Departments.SingleOrDefault(x => x.DepartmentId == DepartmentId && x.IsDeleted == false);

                List<ApplicationUser> listEmp = db.Users
                .Where(x => x.DepartmentId == DepartmentId).ToList();

                if (dep != null && listEmp != null && listEmp.Any())
                {
                    dep.IsDeleted = true;
                    db.SaveChanges();
                    ViewBag.Employeelist = listEmp;
                    ViewBag.message = "Record deleted";
                }
                else
                {
                    ViewBag.message = "This Department has no employees Assign so you cant delete it";
                }
            }
            return View();
        }
        #endregion
    }
}


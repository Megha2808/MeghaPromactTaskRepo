using EmployeeManagementAngularjsWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace EmployeeManagementAngularjsWebApi.Controllers
{
    public class DepartmentsController : ApiController
    {
        private EmployeeEntities db = new EmployeeEntities();

        // GET: api/Departments
        public IHttpActionResult GetDepartments()
        {
            var data = db.Departments.Where(x => x.IsDeleted == false).Select(x => new { Id = x.DepartmentId, Name = x.DepartmentName });
            return Ok(data);
        }

        // GET: api/Departments/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult GetDepartment(int id)
        {
            Department department = db.Departments.Find(id);
            if (department == null)
            {
                return NotFound();
            }
            return Ok(department);
        }

        // PUT: api/Departments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDepartment(int id, Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != department.DepartmentId)
            {
                return BadRequest();
            }
            department.IsDeleted = false;
            db.Entry(department).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Departments
        [ResponseType(typeof(Department))]
        public IHttpActionResult PostDepartment(Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            department.IsDeleted = false;
            db.Departments.Add(department);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = department.DepartmentId }, department);
        }

        // DELETE: api/Departments/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult DeleteDepartment(int id)
        {
            var emp = db.Employees.Where(x => x.DepartmentId == id).Select(x => x.name).FirstOrDefault();


            if (emp == null)
            {
                return NotFound();
            }
            else
            {
                //var dep = db.Departments.Where(x => x.DepartmentId == id);
                Department department = db.Departments.Find(id);
                if (department == null)
                {
                    return NotFound();
                }
                department.IsDeleted = true;
                db.SaveChanges();
                return Ok();
            }



        }

        [Route("api/Departments/GetEmployeeByDepartmentId")]
        public string GetEmployeeByDepartmentId(int id)
        {
            var emp = db.Employees.Where(x => x.DepartmentId == id).Select(x => x.name).FirstOrDefault();
            //Department department = db.Departments.Find(id);
            string data = "";
            if (emp == null)
            {

                return data;
            }

            data = "Employeehas";
            return data;
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DepartmentExists(int id)
        {
            return db.Departments.Count(e => e.DepartmentId == id) > 0;
        }
    }
}

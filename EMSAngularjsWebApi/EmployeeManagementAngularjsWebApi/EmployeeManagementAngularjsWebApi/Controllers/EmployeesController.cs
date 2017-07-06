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
    public class EmployeesController : ApiController
    {
        private EmployeeEntities db = new EmployeeEntities();

        // GET: api/Employees
        public IHttpActionResult GetEmployees()
        {
            var data = db.Employees.Select(x => new { Id = x.EmployeeId, Name = x.name, Salary = x.salary, Departmentname = x.Department.DepartmentName, DepartmentId = x.Department.DepartmentId });
            return Ok(data);
        }

        // GET: api/Employees/5
        [ResponseType(typeof(Employee))]
        public Employee GetEmployee(int id)
        {
            var data = db.Employees.Where(x => x.EmployeeId == id).FirstOrDefault();
            Employee employee1 = db.Employees.Find(id);
            if (data != null)
            {
                Employee employee = new Employee();
                employee.EmployeeId = data.EmployeeId;
                employee.DepartmentId = data.DepartmentId;
                employee.name = data.name;
                employee.salary = data.salary;
                return employee;
            }
            else
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }
        }

        // PUT: api/Employees/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployee(int id, Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee.EmployeeId)
            {
                return BadRequest();
            }

            db.Entry(employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
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

        // POST: api/Employees
        [ResponseType(typeof(Employee))]
        public IHttpActionResult PostEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Employees.Add(employee);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employee.EmployeeId }, employee);
        }

        // DELETE: api/Employees/5
        [ResponseType(typeof(Employee))]

        public IHttpActionResult DeleteEmployee(int id)
        {
            Employee employee = db.Employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            db.Employees.Remove(employee);
            db.SaveChanges();

            return Ok(employee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeExists(int id)
        {
            return db.Employees.Count(e => e.EmployeeId == id) > 0;
        }
    }
}

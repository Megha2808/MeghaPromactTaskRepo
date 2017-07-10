using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BloggingApplication.DomainModel.Models;
using BloggingApplication.Repository.CategoryRepository;

namespace BloggingApplication.core.WebApiControllers
{
    public class CategoriesController : ApiController
    {
        private ICategoryRepository _categoryRepository = new CategoryRepository();

        // GET: api/Categories
        [Route("api/Categories")]
        public IHttpActionResult GetCategories()
        {
            var data = _categoryRepository.GetAllCategory();
            return Ok(data);
            //return db.Categories;
        }

        // GET: api/Categories/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult GetCategory(int id)
        {

            Category category = _categoryRepository.FindById(id);
            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // PUT: api/Categories/5
        [ResponseType(typeof(void))]
        [Route("api/PutCategory")]
        public IHttpActionResult PutCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //  db.Entry(category).State = EntityState.Modified;

            try
            {
                _categoryRepository.EditCategory(category);
                // db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Categories
        [ResponseType(typeof(Category))]
        [Route("api/addCategories")]
        public IHttpActionResult PostCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                _categoryRepository.AddCategory(category);
                return Ok();
            }
           
            // db.Categories.Add(category);
            // db.SaveChanges();
            //return CreatedAtRoute("DefaultApi", new { id = category.Id }, category);
        }

        // DELETE: api/Categories/5
        [ResponseType(typeof(Category))]
        [Route("api/DeleteCategory/{id}")]
        public IHttpActionResult DeleteCategory(int id)
        {
            Category category = _categoryRepository.FindById(id);
            if (category == null)
            {
                return NotFound();
            }

            _categoryRepository.DeleteCategory(id);
            //  db.Categories.Remove(category);
            // db.SaveChanges();

            return Ok(category);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                //   db.Dispose();
            }
            base.Dispose(disposing);
        }        
    }
}
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
    public class CategoriesController : BaseAPIController
    {
        private ICategoryRepository _categoryRepository = new CategoryRepository();

        // GET: api/Categories
        [Route("api/Categories")]
        public HttpResponseMessage GetCategories()
        {
            var data = _categoryRepository.GetAllCategory();
            return ToJson(data);
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
        [Route("api/PutCategory/{id}")]
        public HttpResponseMessage PutCategory(int id, [FromBody]Category category)
        {
            _categoryRepository.EditCategory(category);
            return ToJson(category);
        }

        // POST: api/Categories
        [ResponseType(typeof(Category))]
        [Route("api/addCategories")]
        public HttpResponseMessage Post([FromBody]Category category)
        {            
                _categoryRepository.AddCategory(category);
            return ToJson(category);
        }           
        
        // DELETE: api/Categories/5
        [ResponseType(typeof(Category))]
        [Route("api/DeleteCategory/{id}")]
        public HttpResponseMessage DeleteCategory(int id)
        {
            Category category = _categoryRepository.FindById(id);
            if (category == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound); ;
            }

            _categoryRepository.DeleteCategory(id);
            //  db.Categories.Remove(category);
            // db.SaveChanges();
            return ToJson(id);
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
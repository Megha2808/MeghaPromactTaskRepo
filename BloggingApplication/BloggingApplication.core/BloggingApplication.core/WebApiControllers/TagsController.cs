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
using BloggingApplication.Repository.TagRepository;

namespace BloggingApplication.core.WebApiControllers
{
    public class TagsController : ApiController
    {
        //private ApplicationDbContext db = new ApplicationDbContext();
         ITagRepository _tagRepository = new TagRepository();

        //public TagsController(TagRepository repository)
        //{
        //    _tagRepository = repository;
        //}

        // GET: api/Tags
        [Route("api/Tags")]
        public IHttpActionResult GetTags()
        {           
            var data= _tagRepository.GetAllTags();
            return Ok(data);          
        }

        // GET: api/Tags/5
        [ResponseType(typeof(Tag))]
        public IHttpActionResult GetTag(int id)
        {

            Tag tag = _tagRepository.FindById(id);
            if (tag == null)
            {
                return NotFound();
            }
            return Ok(tag);
        }

        // PUT: api/Tags/5
        [ResponseType(typeof(void))]
        [Route("api/PutTag")]
        public IHttpActionResult PutTag( Tag tag)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

           


           // db.Entry(tag).State = EntityState.Modified;

            try
            {
                _tagRepository.EditTag(tag);               
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Tags
        [ResponseType(typeof(Tag))]
        [Route("api/AddTags")]
        public IHttpActionResult PostTag(Tag tag)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                _tagRepository.AddTag(tag);
                return Ok();
            }
            //db.Tags.Add(tag);
            //db.SaveChanges();

            //return CreatedAtRoute("DefaultApi", new { id = tag.Id }, tag);
        }

        // DELETE: api/Tags/5
        [ResponseType(typeof(Tag))]
        [Route("api/DeleteTag/{id}")]
        public IHttpActionResult DeleteTag(int id)
        {
            Tag tag = _tagRepository.FindById(id);
            if (tag == null)
            {
                return NotFound();
            }

            _tagRepository.DeleteTag(id);
            //db.Tags.Remove(tag);
            //db.SaveChanges();

            return Ok(tag);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
               // db.Dispose();
            }
            base.Dispose(disposing);
        }

        
    }
}
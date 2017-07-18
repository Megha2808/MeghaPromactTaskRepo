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
    public class TagsController : BaseAPIController
    {

         ITagRepository _tagRepository =new TagRepository();

        //public TagsController(ITagRepository repository)
        //{
        //    _tagRepository = repository;
        //}

        //// GET: api/Tags
        //[Route("api/Tags")]
        //public IHttpActionResult GetTags()
        //{
        //    var data = _tagRepository.GetAllTags();
        //    return Ok(data);
        //}

        // GET: api/Tags
        [Route("api/Tags")]
        public HttpResponseMessage GetTags()
        {
            var data = _tagRepository.GetAllTags();
            return ToJson(data);
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

        //// PUT: api/Tags/5
        //[ResponseType(typeof(void))]
        //[Route("api/PutTag")]
        //public IHttpActionResult PutTag( Tag tag)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //   // db.Entry(tag).State = EntityState.Modified;

        //    try
        //    {
        //        _tagRepository.EditTag(tag);               
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        throw;
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        [Route("api/PutTag/{id}")]
        public HttpResponseMessage Put(int id, [FromBody]Tag tag)
        {
            _tagRepository.EditTag(tag);
            return ToJson(tag);
        }

        //// POST: api/Tags
        //[ResponseType(typeof(Tag))]
        //[Route("api/AddTags")]
        //public IHttpActionResult PostTag(Tag tag)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    else
        //    {
        //        _tagRepository.AddTag(tag);
        //        return Ok();
        //    }
        //    //db.Tags.Add(tag);
        //    //db.SaveChanges();

        //    //return CreatedAtRoute("DefaultApi", new { id = tag.Id }, tag);
        //}

        //[ResponseType(typeof(Tag))]
        [Route("api/AddTags")]
        public HttpResponseMessage Post([FromBody]Tag tag)
        {
            _tagRepository.AddTag(tag);
            return ToJson(tag);
        }

        // DELETE: api/Tags/5
        [ResponseType(typeof(Tag))]
        [Route("api/DeleteTag/{id}")]
        public HttpResponseMessage DeleteTag(int id)
        {
            Tag tag = _tagRepository.FindById(id);
            if (tag == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound); ;
            }

            _tagRepository.DeleteTag(id);
            //db.Tags.Remove(tag);
            //db.SaveChanges();
            return ToJson(id);
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
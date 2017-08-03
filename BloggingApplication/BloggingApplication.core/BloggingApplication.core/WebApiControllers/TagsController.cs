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

         ITagRepository _tagRepository = new TagRepository();
       
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
       
        [Route("api/PutTag/{id}")]
        public HttpResponseMessage Put(int id, [FromBody]Tag tag)
        {
            _tagRepository.EditTag(tag);
            return ToJson(tag);
        }
        
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
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            _tagRepository.DeleteTag(id);
            
            return ToJson(id);
        }        
        
    }
}
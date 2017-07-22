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
using Microsoft.AspNet.Identity;
using BloggingApplication.Repository.PostRepository;

namespace BloggingApplication.core.WebApiControllers
{
    public class PostsController : BaseAPIController
    {
        IPostRepository _postRepository = new PostRepository();

        // GET: api/Posts
        [Route("api/Posts")]
        public HttpResponseMessage GetPosts()
        {
            var data = _postRepository.GetAllPost();
            return ToJson(data);
            // return db.Posts;
        }

        // GET: api/Posts/5
        [ResponseType(typeof(Post))]
        [Route("api/Posts/categoryId/{id}")]
        public IHttpActionResult GetPostByCategoryId(int id)
        {
            var data = _postRepository.GetPostByCategoryId(id);
            return Ok(data);
        }

        [ResponseType(typeof(Post))]
        [Route("api/Posts/tagId/{id}")]
        public IHttpActionResult GetPostByTagId(int id)
        {
            var data = _postRepository.GetPostByTagId(id);
            return Ok(data);
        }

        // PUT: api/Posts/5
        [ResponseType(typeof(void))]
        [Route("api/editpost/{id}")]
        public HttpResponseMessage PutPost(int id, [FromBody]Post post)
        {
            var userId = User.Identity.GetUserId();           
            _postRepository.EditPost(post, userId);           
            
            try
            {

            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return ToJson(id);
        }

        // POST: api/Posts
        [ResponseType(typeof(Post))]
        [Route("api/AddPosts")]
        public HttpResponseMessage PostPost(Post post)
        {
            var userId = User.Identity.GetUserId();
            
                _postRepository.AddPost(post, userId);
            return ToJson(userId);

            //db.Posts.Add(post);
            //db.SaveChanges();

            // return CreatedAtRoute("DefaultApi", new { id = post.Id }, post);
        }

        // DELETE: api/Posts/5
        [ResponseType(typeof(Post))]
        [Route("api/Deletepost/{id}")]
        public HttpResponseMessage DeletePost(int id)
        {
            Post post = _postRepository.GetById(id);

            if (post == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound); ;
            }
            _postRepository.DeletePost(id);
            //db.Posts.Remove(post);
            //db.SaveChanges();

            return ToJson(id);
        }


    }
}
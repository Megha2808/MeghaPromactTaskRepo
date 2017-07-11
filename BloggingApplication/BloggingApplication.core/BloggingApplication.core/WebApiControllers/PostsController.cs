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
    public class PostsController : ApiController
    {
        IPostRepository _postRepository = new PostRepository();
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Posts
        [Route("api/Posts")]
        public IHttpActionResult GetPosts()
        {
            var data = _postRepository.GetAllPost();
            return Ok(data);
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
        public IHttpActionResult PutPost(int id, Post post)
        {
            var userId = User.Identity.GetUserId();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != post.Id)
            {
                return BadRequest();
            }


            _postRepository.EditPost(post,userId);
            try
            {
                
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
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

        // POST: api/Posts
        [ResponseType(typeof(Post))]
        [Route("api/AddPosts")]
        public IHttpActionResult PostPost(Post post)
        {
            var userId = User.Identity.GetUserId();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                _postRepository.AddPost(post, userId);
                return Ok();
            }
           

            //db.Posts.Add(post);
            //db.SaveChanges();

           // return CreatedAtRoute("DefaultApi", new { id = post.Id }, post);
        }

        // DELETE: api/Posts/5
        [ResponseType(typeof(Post))]
        [Route("api/Deletepost/{id}")]
        public IHttpActionResult DeletePost(int id)
        {
            Post post = _postRepository.GetById(id);

            if (post == null)
            {
                return NotFound();
            }
            _postRepository.DeletePost(id);
            //db.Posts.Remove(post);
            //db.SaveChanges();

            return Ok(post);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PostExists(int id)
        {
            return db.Posts.Count(e => e.Id == id) > 0;
        }
    }
}
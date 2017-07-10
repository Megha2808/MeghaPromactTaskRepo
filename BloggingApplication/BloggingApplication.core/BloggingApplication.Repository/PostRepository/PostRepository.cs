using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BloggingApplication.DomainModel.Models;
using Microsoft.AspNet.Identity;
using System.Data.Entity;

namespace BloggingApplication.Repository.PostRepository
{
    public class PostRepository : IPostRepository
    {
        ApplicationDbContext db = new ApplicationDbContext();

        #region Get Posts
        public IQueryable GetAllPost()
        {
            var data = db.Posts.Select(x => new
            {
                Id = x.Id,
                Title = x.Title,
                Category_Id = x.Category_Id,
                username = (from u in db.Users
                            where u.Id == x.Users_Id
                            select u.UserName).FirstOrDefault(),
                Categoryname = (from c in db.Categories
                                where c.Id == x.Category_Id
                                select c.Name).FirstOrDefault(),
                Tagname = x.Tags.Select(m => new { Id = m.Id, Name = m.Name }).ToList(),
                createdOn = x.PostedOn,
                Content = x.Content,
            }).OrderBy(x => x.createdOn);
            return data;
        }
        #endregion Get Post


        #region Add Post
        public void AddPost(Post p, string userId)
        {
            Post post = new Post();
            post.Title = p.Title;
            post.Content = p.Content;
            post.Category_Id = p.Category_Id;
            post.Modified = DateTime.Now;
            post.PostedOn = DateTime.Now;
            post.Users_Id = userId;

            //To avoid adding New tags in database...
            foreach (var assignedtag in p.Tags)
            {
                db.Entry(assignedtag).State = EntityState.Unchanged;
            }

            post.Tags = p.Tags;
            db.Posts.Add(post);
            db.SaveChanges();

        }
        #endregion Add Post

        #region update Post



        #endregion

    }
}

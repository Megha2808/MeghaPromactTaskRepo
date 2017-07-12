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
            //var date = db.Posts.Select(x => x.PostedOn.ToShortDateString());
            //string content = db.Posts.Select(x => x.Content).ToString();
            //var contentlength = content.Length;
            //var partialcontent = "";
            //if(contentlength>=140)
            //{
            //    partialcontent = content.Substring(0, 140);
            //}
            var data = db.Posts.Where(x=>x.Isdelete==false).Select(x => new
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
                //createdOn = x.PostedOn.ToShortDateString(),
                partialcontent = x.Content.Length >= 240? x.Content.Substring(0,240):x.Content,
                createdOn = x.PostedOn,
                //postedOn = x.PostedOn.Date.ToShortDateString(),
                Content = x.Content,
            }).OrderByDescending(x => x.createdOn);
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
            post.Isdelete = false;

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
        public void EditPost(Post model, string userid)
        {
            Post p = db.Posts.Include(x=>x.Tags).SingleOrDefault(x => x.Id == model.Id);
            p.Isdelete = false;
            p.Category_Id = model.Category_Id;
            p.Modified= DateTime.Now.Date;

            //p.Tags.Where(m=> ! model.Tags.Contains(p.Tags.Id))
            //// Remove deselected skills
            //teacher.skills.Where(m => !model.skillIds.Contains(m.Id))
            //    .ToList().ForEach(skill => teacher.skills.Remove(skill));

            //// Add new skills
            //var existingSkillIds = teacher.skills.Select(m => m.Id);
            //db.Skills.Where(m => model.skillIds.Exclude(existingSkillIds).Contains(m.Id))
            //    .ToList().ForEach(skill => teacher.skills.Add(skill));

            //var earliertags = p.Tags;
            ////To avoid adding New tags in database...
            //p.Tags = model.Tags;

            
            //    foreach (var assignedtag in p.Tags)
            //    {
            //    foreach(var i in earliertags)
            //    {
            //        if(i.Id==assignedtag.Id)
            //        {

            //        }
            //        else
            //        {
            //            db.Entry(assignedtag).State = EntityState.Unchanged;
            //        }
            //    }
                   
                                         
                       
            //    }                              
            
                     
           
            db.Entry(p).State = System.Data.Entity.EntityState.Modified;
           db.SaveChanges();
        }
        #endregion

        #region DeletePost
        public void DeletePost(int id)
        {
            Post p = GetById(id);
            p.Isdelete = true;
            db.SaveChanges();
        }
        #endregion DeletePost

        #region GetPostById
        public Post GetById(int id)
        {
            var result = db.Posts.Where(x => x.Id == id).FirstOrDefault();
            return result;
        }
        #endregion Get PostById

        #region GetPostByCategoryId
        public IQueryable GetPostByCategoryId(int categoryid)
        {
            var data = db.Posts.Where(x => x.Category_Id == categoryid && x.Isdelete==false)
                .Select(x=> new
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
                    partialcontent = x.Content.Length >= 240 ? x.Content.Substring(0, 240) : x.Content,
                    createdOn = x.PostedOn,
                    Content = x.Content,
                }).OrderByDescending(x => x.createdOn);
            return data;
        }
        #endregion

        #region GetPostByTagId
        public IQueryable GetPostByTagId(int tagid)
        {
            var data = db.Posts.Where(x => x.Tags.Select(m=>m.Id).Contains(tagid) && x.Isdelete==false)
                            .Select(x => new
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
                                partialcontent = x.Content.Length >= 240 ? x.Content.Substring(0, 240) : x.Content,
                            }).OrderByDescending(x => x.createdOn);
            return data;

        }
        #endregion
    }
}

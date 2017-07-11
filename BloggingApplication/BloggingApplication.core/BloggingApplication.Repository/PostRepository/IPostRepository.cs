using BloggingApplication.DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BloggingApplication.Repository.PostRepository
{
   public interface IPostRepository
    {
        void AddPost(Post p , string userId);
        IQueryable GetAllPost();
        void EditPost(Post model,string userid);
        Post GetById(int id);
        void DeletePost(int id);
        IQueryable GetPostByCategoryId(int categoryid);
        IQueryable GetPostByTagId(int tagid);
    }
}

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
    }
}

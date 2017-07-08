using BloggingApplication.DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BloggingApplication.Repository.CategoryRepository
{
    public interface ICategoryRepository
    {
        //Addtags
        void AddCategory(Category C);

        //Edit Tag
        void EditCategory(Category C);

        //delete tag
        void DeleteCategory(int Id);

        //Get all tags
        IQueryable GetAllCategory();

        //find by id
        Category FindById(int Id);
    }
}

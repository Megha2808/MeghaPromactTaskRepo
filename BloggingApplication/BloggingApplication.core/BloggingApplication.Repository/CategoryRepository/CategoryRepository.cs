using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BloggingApplication.DomainModel.Models;

namespace BloggingApplication.Repository.CategoryRepository
{
    public class CategoryRepository : ICategoryRepository
    {
        ApplicationDbContext db = new ApplicationDbContext();

        public void AddCategory(Category C)
        {
            db.Categories.Add(C);
            db.SaveChanges();
        }

        public void DeleteCategory(int Id)
        {
            Category C = db.Categories.Find(Id);
            db.Categories.Remove(C);
            db.SaveChanges();
        }

        public void EditCategory(Category C)
        {
            db.Entry(C).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
        }

        public Category FindById(int Id)
        {
            var result = db.Categories.Where(m => m.Id == Id).FirstOrDefault();
            return result;
        }

        public IQueryable GetAllCategory()
        {
            return db.Categories.Select(x => new { Id = x.Id, Name = x.Name });
        }
    }
}

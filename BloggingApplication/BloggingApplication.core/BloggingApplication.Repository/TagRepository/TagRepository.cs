using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BloggingApplication.DomainModel.Models;

namespace BloggingApplication.Repository.TagRepository
{
    public class TagRepository : ITagRepository
    {
        //database context
        ApplicationDbContext db = new ApplicationDbContext();

        #region AddTag
        public void AddTag(Tag T)
        {
           db.Tags.Add(T);
           db.SaveChanges();
        }
        #endregion

        #region Delete Tag
        public void DeleteTag(int Id)
        {
            Tag t = db.Tags.Find(Id);
            db.Tags.Remove(t);
            db.SaveChanges();
        }
        #endregion

        #region Edit Tag
        public void EditTag(Tag T)
        {
            db.Entry(T).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
        }
        #endregion Edit tag

        #region Find By Id
        public Tag FindById(int Id)
        {
            var result = db.Tags.Where(m => m.Id == Id).FirstOrDefault();
            return result;
        }
        #endregion

        #region Get All tags
        public IQueryable GetAllTags()
        {
            return db.Tags.Select(x => new { Id = x.Id, Name = x.Name });
        }
        #endregion
    }
}

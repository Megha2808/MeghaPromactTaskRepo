using BloggingApplication.core.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BloggingApplication.DomainModel.Models
{
    public class Post
    {
        public virtual int Id
        { get; set; }

        public virtual string Title
        { get; set; }
       
        public virtual string Content
        { get; set; }       

        public virtual DateTime PostedOn
        { get; set; }

        public virtual DateTime? Modified
        { get; set; }

        public virtual string Users_Id { get; set; }

        public virtual int Category_Id { get; set; }

        [ForeignKey("Users_Id")]
        public virtual ApplicationUser Users { get; set; }

        [ForeignKey("Category_Id")]
        public virtual Category Category
        { get; set; }

        public virtual IList<Tag> Tags
        { get; set; }
    }
}

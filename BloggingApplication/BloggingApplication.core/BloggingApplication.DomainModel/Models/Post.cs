using System;
using System.Collections.Generic;
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

        public virtual Category Category
        { get; set; }

        public virtual IList<Tag> Tags
        { get; set; }
    }
}

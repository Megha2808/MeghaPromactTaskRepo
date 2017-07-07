using System.Collections.Generic;

namespace BloggingApplication.DomainModel.Models
{
    public class Tag
    {
        public virtual int Id
        { get; set; }

        public virtual string Name
        { get; set; }

        public virtual IList<Post> Posts { get; set; }
    }
}
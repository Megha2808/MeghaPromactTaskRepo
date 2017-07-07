using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BloggingApplication.DomainModel.ViewModels
{
    public class TagViewModel
    {
        public virtual int Id
        { get; set; }

        public virtual string Name
        { get; set; }
    }
}

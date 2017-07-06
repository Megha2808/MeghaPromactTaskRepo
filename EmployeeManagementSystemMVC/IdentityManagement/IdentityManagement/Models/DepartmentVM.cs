using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IdentityManagement.Models
{
    public class DepartmentVM
    {
        public int DepartmentId { get; set; }

        [Required(ErrorMessage = "Please Enter Department Name")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string DepartmentName { get; set; }

        public Nullable<bool> IsDeleted { get; set; }
    }
}
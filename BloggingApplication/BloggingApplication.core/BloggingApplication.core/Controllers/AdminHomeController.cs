using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BloggingApplication.core.Controllers
{
    public class AdminHomeController : Controller
    {
        // GET: AdminHome       
        [Authorize(Roles ="Admin")]
        [Route("AdminHome/Index")]
        public ActionResult Index()
        {
            var rolename = TempData["roleName"];
            var userid = TempData["UserId"];
            TempData.Keep("roleName");
            TempData.Keep("UserId");
            return View();
        }
    }
}
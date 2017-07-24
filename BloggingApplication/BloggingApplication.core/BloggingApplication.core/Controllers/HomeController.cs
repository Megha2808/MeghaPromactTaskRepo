using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BloggingApplication.core.Controllers
{
    public class HomeController : Controller
    { 
        [Route("Home/Index")]  
        public ActionResult Index()
        {
            var rolename = TempData["roleName"];
            var userid = TempData["UserId"];
            TempData.Keep("roleName");
            TempData.Keep("UserId");
            return View();
        }

        [Route("Home/Blog")]
        public ActionResult Blog()
        {
            var rolename = TempData["roleName"];
            var userid = TempData["UserId"];
            TempData.Keep("roleName");
            TempData.Keep("UserId");
            return View();
        }

        [Authorize(Roles ="Admin")]
        public ActionResult Admin()
        {
            var rolename = TempData["roleName"];
            var userid = TempData["UserId"];
            TempData.Keep("roleName");
            TempData.Keep("UserId");
            return View();
        }
    }
}
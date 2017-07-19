using Autofac;
using Autofac.Integration.Mvc;
using BloggingApplication.core.WebApiControllers;
using BloggingApplication.DomainModel.Models;
using BloggingApplication.Repository;
using BloggingApplication.Repository.TagRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BloggingApplication.core.App_Start
{
    public static class AutofacConfig
    {
        public static void RegisterComponents()
        {
            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterControllers(typeof(WebApiConfig).Assembly);
            builder.RegisterType<TagRepository>().As<ITagRepository>();
            builder.RegisterType<TagsController>();
            builder.RegisterType<ApplicationDbContext>().As<ApplicationDbContext>();
            var container = builder.Build();
            System.Web.Mvc.DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }

    }
}
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BloggingApplication.core.Startup))]
namespace BloggingApplication.core
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

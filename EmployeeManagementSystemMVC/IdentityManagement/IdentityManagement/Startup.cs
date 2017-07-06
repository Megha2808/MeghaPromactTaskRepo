using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IdentityManagement.Startup))]
namespace IdentityManagement
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

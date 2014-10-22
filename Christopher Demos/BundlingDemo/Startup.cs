using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BundlingDemo.Startup))]
namespace BundlingDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

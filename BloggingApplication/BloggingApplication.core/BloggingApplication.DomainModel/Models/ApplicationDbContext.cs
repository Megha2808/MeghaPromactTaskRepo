using BloggingApplication.core.Models;
using BloggingApplication.DomainModel.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BloggingApplication.DomainModel.Models
{
   
        public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
        {
            public ApplicationDbContext()
                : base("BloggingAppConnection", throwIfV1Schema: false)
            {
            }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();


        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>()
                        .HasMany(s => s.Tags)
                        .WithMany(c => c.Posts)
                        .Map(cs =>
                        {
                            cs.MapLeftKey("Post_Id");
                            cs.MapRightKey("Tag_Id");
                            cs.ToTable("TagPost");
                        });
            base.OnModelCreating(modelBuilder);
        }
        
        public DbSet<Post> Posts { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Category> Categories { get; set; }

    }
}

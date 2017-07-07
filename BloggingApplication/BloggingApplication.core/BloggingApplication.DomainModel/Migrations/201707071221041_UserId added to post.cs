namespace BloggingApplication.DomainModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserIdaddedtopost : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Posts", "Users_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Posts", "Users_Id");
            AddForeignKey("dbo.Posts", "Users_Id", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "Users_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Posts", new[] { "Users_Id" });
            DropColumn("dbo.Posts", "Users_Id");
        }
    }
}

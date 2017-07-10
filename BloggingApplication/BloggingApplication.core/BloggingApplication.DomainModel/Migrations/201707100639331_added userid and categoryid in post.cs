namespace BloggingApplication.DomainModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addeduseridandcategoryidinpost : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Posts", "Category_Id", "dbo.Categories");
            DropForeignKey("dbo.Posts", "Users_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Posts", new[] { "Category_Id" });
            DropIndex("dbo.Posts", new[] { "Users_Id" });
            AddColumn("dbo.Posts", "Category_Id1", c => c.Int());
            AddColumn("dbo.Posts", "Users_Id1", c => c.String(maxLength: 128));
            AlterColumn("dbo.Posts", "Category_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Posts", "Users_Id", c => c.String());
            CreateIndex("dbo.Posts", "Category_Id1");
            CreateIndex("dbo.Posts", "Users_Id1");
            AddForeignKey("dbo.Posts", "Category_Id1", "dbo.Categories", "Id");
            AddForeignKey("dbo.Posts", "Users_Id1", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "Users_Id1", "dbo.AspNetUsers");
            DropForeignKey("dbo.Posts", "Category_Id1", "dbo.Categories");
            DropIndex("dbo.Posts", new[] { "Users_Id1" });
            DropIndex("dbo.Posts", new[] { "Category_Id1" });
            AlterColumn("dbo.Posts", "Users_Id", c => c.String(maxLength: 128));
            AlterColumn("dbo.Posts", "Category_Id", c => c.Int());
            DropColumn("dbo.Posts", "Users_Id1");
            DropColumn("dbo.Posts", "Category_Id1");
            CreateIndex("dbo.Posts", "Users_Id");
            CreateIndex("dbo.Posts", "Category_Id");
            AddForeignKey("dbo.Posts", "Users_Id", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.Posts", "Category_Id", "dbo.Categories", "Id");
        }
    }
}

namespace BloggingApplication.DomainModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addeduseridcategoryidinpost : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Posts", "Category_Id1", "dbo.Categories");
            DropIndex("dbo.Posts", new[] { "Category_Id1" });
            DropIndex("dbo.Posts", new[] { "Users_Id1" });
            DropColumn("dbo.Posts", "Category_Id");
            DropColumn("dbo.Posts", "Users_Id");
            RenameColumn(table: "dbo.Posts", name: "Category_Id1", newName: "Category_Id");
            RenameColumn(table: "dbo.Posts", name: "Users_Id1", newName: "Users_Id");
            AlterColumn("dbo.Posts", "Users_Id", c => c.String(maxLength: 128));
            AlterColumn("dbo.Posts", "Category_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Posts", "Users_Id");
            CreateIndex("dbo.Posts", "Category_Id");
            AddForeignKey("dbo.Posts", "Category_Id", "dbo.Categories", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "Category_Id", "dbo.Categories");
            DropIndex("dbo.Posts", new[] { "Category_Id" });
            DropIndex("dbo.Posts", new[] { "Users_Id" });
            AlterColumn("dbo.Posts", "Category_Id", c => c.Int());
            AlterColumn("dbo.Posts", "Users_Id", c => c.String());
            RenameColumn(table: "dbo.Posts", name: "Users_Id", newName: "Users_Id1");
            RenameColumn(table: "dbo.Posts", name: "Category_Id", newName: "Category_Id1");
            AddColumn("dbo.Posts", "Users_Id", c => c.String());
            AddColumn("dbo.Posts", "Category_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Posts", "Users_Id1");
            CreateIndex("dbo.Posts", "Category_Id1");
            AddForeignKey("dbo.Posts", "Category_Id1", "dbo.Categories", "Id");
        }
    }
}

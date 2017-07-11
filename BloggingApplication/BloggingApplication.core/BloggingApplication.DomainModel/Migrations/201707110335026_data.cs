namespace BloggingApplication.DomainModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class data : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.TagPost", name: "Tag_Id", newName: "__mig_tmp__0");
            RenameColumn(table: "dbo.TagPost", name: "Post_Id", newName: "Tag_Id");
            RenameColumn(table: "dbo.TagPost", name: "__mig_tmp__0", newName: "Post_Id");
            RenameIndex(table: "dbo.TagPost", name: "IX_Tag_Id", newName: "__mig_tmp__0");
            RenameIndex(table: "dbo.TagPost", name: "IX_Post_Id", newName: "IX_Tag_Id");
            RenameIndex(table: "dbo.TagPost", name: "__mig_tmp__0", newName: "IX_Post_Id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.TagPost", name: "IX_Post_Id", newName: "__mig_tmp__0");
            RenameIndex(table: "dbo.TagPost", name: "IX_Tag_Id", newName: "IX_Post_Id");
            RenameIndex(table: "dbo.TagPost", name: "__mig_tmp__0", newName: "IX_Tag_Id");
            RenameColumn(table: "dbo.TagPost", name: "Post_Id", newName: "__mig_tmp__0");
            RenameColumn(table: "dbo.TagPost", name: "Tag_Id", newName: "Post_Id");
            RenameColumn(table: "dbo.TagPost", name: "__mig_tmp__0", newName: "Tag_Id");
        }
    }
}

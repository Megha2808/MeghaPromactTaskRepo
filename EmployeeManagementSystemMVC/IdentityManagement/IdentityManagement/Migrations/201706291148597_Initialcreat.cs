namespace IdentityManagement.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initialcreat : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.AspNetUsers", name: "DepartmentrefId", newName: "DepartmentId");
            RenameIndex(table: "dbo.AspNetUsers", name: "IX_DepartmentrefId", newName: "IX_DepartmentId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.AspNetUsers", name: "IX_DepartmentId", newName: "IX_DepartmentrefId");
            RenameColumn(table: "dbo.AspNetUsers", name: "DepartmentId", newName: "DepartmentrefId");
        }
    }
}

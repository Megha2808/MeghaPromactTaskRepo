namespace IdentityManagement.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class namm : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Departments", "IsDeleted", c => c.Boolean());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Departments", "IsDeleted");
        }
    }
}

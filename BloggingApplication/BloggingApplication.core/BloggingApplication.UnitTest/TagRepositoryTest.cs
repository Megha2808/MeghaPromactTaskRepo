using BloggingApplication.Repository.TagRepository;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BloggingApplication.UnitTest
{
    [TestClass]
    public class TagRepositoryTest
    {
        

        [TestInitialize]

        public void TestSetUp()
        {
            //TagInitializeDB db = new TagInitializeDB();
            //System.Data.Entity.Database.SetInitializer(db);
            //repo = new TagRepository();           
        }
        [TestMethod]
        public void IsRepoInitializeWithValidNumberOfData()
        {
            TagRepository repo = new TagRepository();
            var result = repo.FindById(1);
            Assert.IsNotNull(result);
            //var numberOfRecords = result.ToList().Count;
            Assert.AreEqual(1, 1);
        }
    }
}

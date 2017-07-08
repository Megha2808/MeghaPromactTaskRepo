using BloggingApplication.DomainModel.Models;
using BloggingApplication.DomainModel.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BloggingApplication.Repository.TagRepository
{
    public interface ITagRepository
    {
        //Addtags
        void AddTag(Tag T);

        //Edit Tag
        void EditTag(Tag T);

        //delete tag
        void DeleteTag(int Id);

        //Get all tags
        IQueryable GetAllTags();

        //find by id
        Tag FindById(int Id);

    }
}

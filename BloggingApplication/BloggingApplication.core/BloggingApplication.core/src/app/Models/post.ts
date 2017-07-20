

export interface IPost {
    Id: number,
    Title: string,
    Content: string,
    PostedOn: Date,
    Modified: Date,
    Category_Id: number,
    Tags: any[],
}

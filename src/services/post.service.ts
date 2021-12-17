import { PostModel } from "../models/post.model";

class PostService {
    async createPost(post){
        const createdPost = await PostModel.create(post)
        return createdPost;
    }

    async getAllPosts(){
        const posts = await PostModel.find()
        return posts;
    }

    async getOnePost(id:string){
        if (!id){
            throw new Error('PostService: getOnePost: No ID stated!')
        }
        const post = await PostModel.findById(id);
        return post;
    }

    async modifyPost(post){
        if(!post._id){
            throw new Error('Post Service: modifyPost: No ID stated!')
        }
        const updatedNewPost = await PostModel.findByIdAndUpdate(post._id, post, {new: true})
        return updatedNewPost;
    }

    async deletePost(id){
        if (!id){
            throw new Error('Post Service: deletePost: No ID stated!')
        }
        const post = await PostModel.findByIdAndDelete(id)
        return post;
    }
};

export default new PostService();
import { Request, Response } from 'express';
import PostService from '../services/post.service';

class PostController {
    async createPost(req:Request, res:Response){
        try{
            const post = await PostService.createPost(req.body);
            console.log(post)
            res.status(200).json(post)
        }
        catch(e){
            console.log(`Error: ` + e.errors.title.properties.message +'\n')
            res.status(500).json(e.errors.title.properties.message)
        }
    }

    async getAllPosts(req:Request, res:Response){
        try{
            const posts = await PostService.getAllPosts()
            res.json(posts)
        }
        catch(e){
            res.status(500).json(e)
        }
    }

    async getOnePost(req:Request, res:Response){
        try{
            const {id} = req.params
            const post = await PostService.getOnePost(id);
            return res.json(post)
        }
        catch(e){
            res.status(500).json(e)
        }
    }

    async modifyPost(req:Request, res:Response){
        try{
            const post = req.body;
            const updatedPost = await PostService.modifyPost(post)
            return res.status(500).json(updatedPost)
        }
        catch(e){
            res.status(500).json(e)
        }
    }

    async deletePost(req:Request, res:Response){
        try{
            const {id} = req.params
            const post = await PostService.deletePost(id)
            res.status(200).json(post)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
}

export default new PostController()
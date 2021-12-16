import express, {NextFunction, Response, Request} from 'express';
import { PostModel } from './models/post.model';

const router = express.Router();

router.post('/posts', async (req:Request, res:Response) => {
    try{
        const {author, title, content} = req.body
        const post = await PostModel.create({author, title, content});
        console.log(post)
        res.status(200).json(post)
    }
    catch(e){
        console.log(`Error: ` + e.errors.title.properties.message +'\n')
        res.status(500).json(e.errors.title.properties.message)
    }
});

router.get('/posts', async (req:Request, res:Response) => {
    try{

    }
    catch(e){

    }
});
router.get('/posts/:id', async (req:Request, res:Response) => {
    try{

    }
    catch(e){
        
    }
});
router.put('/posts', async (req:Request, res:Response) => {
    try{

    }
    catch(e){
        
    }
});
router.delete('/posts/:id', async (req:Request, res:Response) => {
    try{

    }
    catch(e){
        
    }
});

export default router;
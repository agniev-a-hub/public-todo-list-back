import express, {NextFunction, Response, Request} from 'express';
import PostController from './controllers/post.controller';

const router = express.Router();

router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getOnePost);
router.put('/posts', PostController.modifyPost);
router.delete('/posts/:id', PostController.deletePost);

export default router;
import express from 'express';
import PostController from './controllers/post.controller';
import AuthController from './controllers/auth.controller';
import { check } from 'express-validator';
// import authMiddleware from './middleware/authMiddleware';
import roleMiddleware from './middleware/roleMiddleware';

export const router = express.Router();
///api/...
router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getOnePost);
router.put('/posts', PostController.modifyPost);
router.delete('/posts/:id', PostController.deletePost);

export const routerAuth = express.Router();
///auth/...
routerAuth.post('/registration', [
    check('username', "Username cannot shorter than 4 and longer than 16 symbols!").isLength({min: 4, max:16}),
    check('password', "Username cannot shorter than 4 and longer than 12 symbols!").isLength({min: 4, max:12})
],AuthController.registration);
routerAuth.post('/login', AuthController.login);
routerAuth.get('/users', roleMiddleware(['ADMIN']), AuthController.users);


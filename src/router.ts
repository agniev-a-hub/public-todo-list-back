import express, {NextFunction, Response, Request} from 'express';
import PostController from './controllers/post.controller';
import AuthController from './controllers/auth.controller';
import { check } from 'express-validator';

export const router = express.Router();

router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getOnePost);
router.put('/posts', PostController.modifyPost);
router.delete('/posts/:id', PostController.deletePost);

export const routerAuth = express.Router();

routerAuth.post('/registration', [
    check('username', "Username cannot shorter than 4 and longer than 16 symbols!").isLength({min: 4, max:16}),
    check('password', "Username cannot shorter than 4 and longer than 12 symbols!").isLength({min: 4, max:12})
],AuthController.registration);
routerAuth.post('/login', AuthController.login);
routerAuth.get('/users', AuthController.users);


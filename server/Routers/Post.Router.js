import express,{Router} from 'express';
import PostController from '../Controllers/Post.Controller.js';
import { authoriseUser } from '../utils/jwt.js';

const router = express.Router();
const postController = new PostController();

router.post('/',authoriseUser,postController.addPost);

router.delete('/remove/:id', authoriseUser, postController.deletePost);

router.get('/getPost/:id', postController.getPost);
router.get('/getPost',postController.getAllPosts);

export const postRouter = router;
import express,{Router} from 'express';
import CommentController from '../Controllers/Comment.Controller.js';
import PostController from '../Controllers/Post.Controller.js';
import { authoriseUser } from '../utils/jwt.js';

const router = express.Router();
const postController = new PostController();
const commentController = new CommentController();

router.post('/',authoriseUser,postController.addPost);
router.post('/:id/comment',authoriseUser,commentController.addComment);

router.delete('/remove/:id', authoriseUser, postController.deletePost);

router.get('/getPost/:id', postController.getPost);
router.get('/getPost',postController.getAllPosts);

export const postRouter = router;
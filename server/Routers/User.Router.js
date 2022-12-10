import express from 'express';
import UserController from '../Controllers/User.Controller.js';

const router = express.Router();
const userController = new UserController();

router.post('/register',userController.addUser);
router.post('/login',userController.loginUser);
router.get('/logout',authoriseUser,userController.logoutUser);
router.get('/avatar/:id',userController.getAvatar);
router.get('myaccount/:id',authoriseUser,userController.getUserPosts);
router.delete('/:id',authoriseUser,userController.removeUser);
router.put('/:id',authoriseUser,userController.updateProfile);
import { Post } from "../Models/Post.Model.js"
import { User } from "../Models/User.Model.js";
import { decodeJWT } from "../utils/jwt.js";

export default class PostController{
    constructor(){}

    getAllPosts = async function (request, response) {
        const posts = await Post.find().populate('user','avatarUrl');
        
        return response.status(200).json(posts);
    }

    addPost = async function (request,response) {
        const {title, content, tags, allowsReplies, user} = request.body;

        const mongoUser = await User.findById(user.id);

        if(!mongoUser){
            return response.status(404).json({message: 'User not found'});
        }

        const post = await Post.create({
            title,
            content,
            createdAt: Date.now(),
            tags,
            allowsReplies,
            user: mongoUser
        });

        await mongoUser.posts.push(post);
        await mongoUser.save();

        response.status(200).json({message: 'Sucessfully added a post'});
    }

    deletePost = async function (request, response) {
        try{
            const {postId} = request.params;

            const uId = decodeJWT(request.cookies["token"]);


            const post = await Post.findById(postId).populate('user');

            if(!post){
                return response.status(404).json({message: 'Post not found'});
            }

            if(post.user.id !== uId){
                return response.status(403).json({message:'Cannot delete this post'});
            }

            await post.user.posts.remove(post.id);
            await post.user.save();
            await Post.deleteOne(post);

            return response.status(200).json({message: 'Sucessfully deleted post'});

        }
        catch(error){
            console.log(error);
            return response.status(500).json({message: 'An unexpexted error occured'});
        }
    }

    getPost = async function (request,response){
        try{
            const {id} = request.params;
            const post = await Post.findById(id).populate('user','avatarUrl').populate('comments');

            return response.status(200).json(post);
        }
        catch(error){
            console.log(error);
            return response.status(500).json({message: 'An unexpected error occured'});
        }
    }
}
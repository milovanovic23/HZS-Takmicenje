import { Comment } from "../Models/Comment.Model.js";
import { Post } from "../Models/Post.Model.js";
import { User } from "../Models/User.Model.js";

export default class CommentController{
    constructor(){}

    addComment = async function (request,response) {

        const { user, post, content, author } = request.body;
    
        const mongoUser = await User.findById(user.id);
        const mongoPost = await Post.findById(post.id);
    
        if(!mongoUser){
            return response.status(404).json({message: 'User not found'});
        }
    
        const comment = await Comment.create({
            content,
            createdAt: Date.now(),
            author,
            post
        });
    
        await mongoPost.comments.push(comment);
        await mongoPost.save();
    
        response.status(200).json({message: 'Sucessfully added a post'});
    }
}



import { Comment } from "../Models/Comment.Model.js";
import { Post } from "../Models/Post.Model.js";
import { User } from "../Models/User.Model.js";

addComment = async function (request,response) {
    const body = request.body;
    const user = request.locals.user;
    const post = request.locals.post;

    const mongoUser = await User.findById(user.id);
    const mongoPost = await Post.findById(post.id);

    if(!mongoUser){
        return response.status(404).json({message: 'User not found'});
    }

    const comment = await Comment.create({
        content: body.content,
        createdAt: body.createdAt,
        author: mongoUser,
        post: mongoPost
    });

    await mongoPost.comments.push(comment);
    await mongoPost.save();

    response.status(200).json({message: 'Sucessfully added a post'});
}

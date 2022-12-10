import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    createdAt: String,
    tags: [String],
    allowsReplies: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

export const Post = mongoose.model('Post',postSchema);
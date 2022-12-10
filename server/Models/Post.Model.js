import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    createdAt: String,
    tags: String,
    user: {
        type: mongoose.Schema.Types.ObjectId;
        ref: "User"
    }
});

export const Post = mongoose.model('Post',postSchema);
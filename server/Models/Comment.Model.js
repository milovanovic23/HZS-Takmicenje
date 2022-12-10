import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    content: String,
    createdAt: Number,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
});

export const Comment = mongoose.model('Comment',commentSchema);
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {type: String, unique:true},
    password: String,
    email: {type: String, unique:true},
    avatarUrl: String,
    salt: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId;
        ref: "Post"
    }]
});

export const User = mongoose.model('User',userSchema)
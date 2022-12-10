import * as dotenv from "dotenv";
dotenv.config();

import crypto from "crypto";
import { User } from "../Models/User.Model.js";

function generateRandom(length){
    let result             = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function Hash(data, salt){
    const pepper = process.env.PEPPER;
    let cypher = data + salt;

    for (let i = 0; i < 1000; i++) {
        cypher = crypto.createHash('sha512', pepper).update(cypher).digest('base64');
    }

    return cypher;
}

export default class UserController{
    constructor(){}

    addUser = async function (request, response) {
        try{
            const salt=generateRandom(32);

            const {username, password, email} = request.body;

            if(!username || !password || !email){
                return response.status(400).json({message: 'All fields must be provided'});
            }

            const existingUser = await User.findOne({username: username});

            if(existingUser){
                return response.status(409).json({message: 'This username is taken'});
            }

            const hashed = Hash(password,salt);

            const user = await User.create({
                username,
                password: hashed,
                email,
                avatarUrl: "default.jpg",
                salt
            });

            //TO DO: implementiraj ovo sta god vec
            /*response.cookie("logged_in", true);
            response.cookie("token", genJWT(user.id), {
                httpOnly: true,
                secure: true,
            });*/
        }
        catch(error){
            console.log(error);
            return response.status(500).json({message: 'An unexpected message occurred'});
        }
    }

    removeUser = async function (request, response) {
        try {
            const {id} = request.params;
            const user = await Project.findById(id);

            if(!user){
                return response.status(404).json({message: "Non existing user"});
            }

            await User.deleteOne(user);
            return response.status(200).json({message: "User deleted successfully"});
        } catch(error) {
            console.log(error);
            return response.status(500).json({message: "An unexpected error occurred"});
        }
    }

    loginUser = async function (request,response) {
        try {
            const { email, password } = request.body;

            if(!email || !password){
                return response.status(400).json({message:"Must enter both email and password"});
            }

            const user = await User.findOne({email:email});

            if(!user){
                return response.status(404).json({message:"Non existing user"});
            }

            const hashed = Hash(password, user.salt);

            if(hashed !== user.password){
                return response.status(400).json({message:"Wrong password"});
            }

            // TODO: implement JWT token generation function
            response.cookie("logged_in", true);
            response.cookie("token", genJWT(user.id), {
                httpOnly: true,
                secure: true,
            });
            return response.status(200).json({message:"User sucessfully logged in"});
        } catch(error) {
            console.error(error);
            return response.status(500).json({message: "An unexpected error occurred"});
        }
    }

    logoutUser = async function (request,response) {
        try {
            response.clearCookie("token");
            response.clearCookie("logged_in");
            return response.status(200).json({message:"User sucessfully logged out"});
        } catch (error) {
            console.error(error);
            return response.status(500).json({message: "An unexpected error occurred"});
        }
    }

    updateProfile = async function (request,response) {
        try {
            const {id} = request.params;

            if (!id) {
                return response.status(400).json({message: "Must provide user id"});
            }

            const { username, password, email} = request.body;

            const user = await User.findById(id);

            if (!user) {
                return response.status(404).json({message:"User not found"});
            }

            const newData = {};

            if (username) {
                newData.username = username;
            }

            if (password) {
                newData.password = Hash(password, user.salt);
            }

            if (email) {
                newData.email = email;
            }

            await User.findOneAndUpdate(user.id, newData);

            return response.status(200).json({message: "Sucessfully updated profile"});
        } catch(error) {
            console.error(error);
            return response.status(500).json({message: "An unexpected error occurred"});
        }
    }
}
// require("dotenv").config();
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');
import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { userRouter } from "./Routers/User.Router.js";
import { postRouter } from "./Routers/Post.Router.js";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use('/user', userRouter);
app.use('/post', postRouter);

mongoose.connect("mongodb+srv://dbUser:nasasifra123@hzsdb.n5aesxs.mongodb.net/ihearyou?retryWrites=true&w=majority", () => console.log("Connected to DB!"));

const PORT = process.env.PORT || 4000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, "..", "client", "build", 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});
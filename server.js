import express from "express";
import mongoose from "mongoose";
import videosModel from "./model/dbModel.js"

const connectionUrl = "mongodb+srv://code_sage:code_sage123@cluster0.1uwi4.mongodb.net/tiktok-db?retryWrites=true&w=majority";

// app config
const app = express();
const port = process.env.PORT || 7000;

// listeners
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})

// db config
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
})


// middlewares
// Used to parse json
app.use(express.json())
// CORS Headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next();
})


// api endpoints
app.get("/", (req, res) => {
    res.send("Hello world, im fine");
})

// POST Request
app.post("/tiktok/posts", (req, res) => {
    // Naming system
    const dbModelVideos = req.body;

    videosModel.create(dbModelVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get("/tiktok/posts", (req, res) => {
    // 2 parameters: filter object and callback fxn
    videosModel.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data)
        }
    })
})

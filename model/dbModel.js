import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    likes: String,
    shares: String,
    comments: String,
    description: String,
    song: String,
})

export default mongoose.model("tiktokVideos", tiktokSchema)
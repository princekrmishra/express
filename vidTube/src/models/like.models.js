import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema({
    comments: {
        type: Schema.Type.ObjectId,
        ref: "Comment",
    },
    video: {
        type: Schema.Type.ObjectId,
        ref: "Video"
    },
    comment: {
        type: Schema.Type.ObjectId,
        ref: "Comment"
    },
    tweet: {
        type: Schema.Type.ObjectId,
        ref: "Tweet"
    },
    LikedBy: {
        type: Schema.Type.ObjectId,
        ref: "User"
    }
},
{ timestamps: true}
)

export const Like = mongoose.model("Like", likeSchema)
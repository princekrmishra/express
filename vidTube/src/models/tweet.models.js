import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
    content: {
        type: string,
        required: true
    },
    Owner: {
        type: Schema.Type.ObjectId,
        ref: "User",
    }
},
{ timestamps: true}
)

export const Tweet = mongoose.model("Tweets", tweetSchema)
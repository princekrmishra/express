import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Type.ObjectId, //one who is SUBSCRIBING
        ref: "User",
    },
    channel: {
        type: Schema.Type.ObjectId, //ONE to WHOM "subsciber" is SUBSCRIBING
        ref: "User"
    }
},
{ timestamps: true}
)

export const Subscription = mongoose.model("Subscription", subscriptionSchema)
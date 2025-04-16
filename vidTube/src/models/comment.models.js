import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentsSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    video: {
        type: Schema.Type.ObjectId,
        ref: "Video"
    },
    Owner: {
        type: Schema.Type.ObjectId,
        ref: "User"
    }
},
{ timestamps: true}
)

commentsSchema.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment", commentsSchema)
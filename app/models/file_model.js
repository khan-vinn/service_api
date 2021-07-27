import mongoose from "mongoose";
import { nanoid } from "nanoid";
const { Schema } = mongoose

const FileVisitsHistorySchema = Schema({
    time: {
        type: Schema.Types.Number,
        required: true,
        default: () => +new Date()
    },
    ip_addres: {
        type: Schema.Types.String,
        required: true
    },
    os: {
        type: Schema.Types.String,
        required: true
    },
    gps_coordinate: {
        type: Schema.Types.String,
        required: true
    }
})

const FileSchema = Schema({
    _id: {
        type: Schema.Types.String,
        default: () => nanoid(10)
    },
    original_name: {
        type: Schema.Types.String,
        required: true,
    },
    shorted_name: {
        type: Schema.Types.String,
        required: true
    },
    created_at: {
        type: Schema.Types.Number,
        default: () => +new Date(),
        required: true
    },
    updated_at: {
        type: Schema.Types.Number
    },
    link_visit_story: {
        type: [FileVisitsHistorySchema]
    }

})

const FileModel = mongoose.model("File", FileSchema)

export default FileModel
import mongoose from "mongoose";
import { nanoid } from "nanoid";
const { Schema } = mongoose

const LinkVisitsHistorySchema = Schema({
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
    }
})

const LinkSchema = Schema({
    _id: {
        type: Schema.Types.String,
        default: () => nanoid(9)
    },
    original_link: {
        type: Schema.Types.String,
        required: true,
    },
    short_link: {
        type: Schema.Types.String,
        default: () => nanoid(5),
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
        type: [LinkVisitsHistorySchema]
    }
})

const LinkModel = mongoose.model("Link", LinkSchema)

export default LinkModel
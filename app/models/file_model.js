import mongoose, { Schema } from "mongoose";
import nanoId from "nanoid";

const LinkVisitHistoryChema = Schema({
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

const FileSchema = Schema({
    _id: {
        type: Schema.Types.String,
        default: () => nanoId(10)
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
        type: [LinkVisitHistoryChema]
    }

})

const FileModel = mongoose.model("File", FileSchema)

export default FileModel
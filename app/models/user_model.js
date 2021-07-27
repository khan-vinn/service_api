import mongoose from "mongoose";
import { nanoid } from "nanoid";
const { Schema } = mongoose

const NameSchema = Schema({
    first: {
        type: Schema.Types.String,
        required: true,
        minLength: 2,
        maxLength: 18
    },
    last: {
        type: Schema.Types.String,
        required: true,
        minLength: 2,
        maxLength: 18
    }
})

const UserSchema = Schema({
    _id: {
        type: Schema.Types.String,
        required: true,
        default: () => nanoid(10)
    },
    name: {
        type: NameSchema,
        validate: {
            validator: function (name) {
                return (/^[A-Za-z]+ [A-Za-z]+$/).test(name) && !(/[0-9]+/g.test(name))
            },
            message: invalidValue => `${invalidValue} is not valid Full Name`
        }
    },
    username: {
        type: Schema.Types.String,
        required: true,
        minLength: 4,
        maxLength: 15,
        unique: true
    },
    password: {
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
    }
})

const UserModel = mongoose.model("User", UserSchema)

export default UserModel
import passport from "passport"
import bcrypt from "bcrypt"
const ObjectID = require("mongodb").ObjectID;
const LocalStrategy = require("passport-local")

export default function (UserModel) {
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser((id, done) => {
        UserModel.findOne({ _id: new ObjectID(id) }, (err, doc) => {
            if (err) { return console.log(err) }
            done(null, doc)
        })
    })
    passport.use(new LocalStrategy(function (username, password, done) {
        UserModel.findOne({ username }, (err, user) => {
            if (err) { return done(err) }
            if (!user) { return done(null, false) }
            if (!bcrypt.compareSync(password, user.password)) { return done(null, false) }
            return done(null, user)
        })
    }))
}

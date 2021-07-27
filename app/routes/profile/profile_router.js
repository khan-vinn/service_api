import UserModel from '../../models/user_model.js'

export default function (app, myDataBase) {
    app.route("/profile")
        .get((req, res, next) => { })
    app.route("/profile/:id?")
        .get((req, res, next) => { })
}
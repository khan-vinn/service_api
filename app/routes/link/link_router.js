import LinkModel from '../../models/link_model.js'

export default function (app, myDataBase) {
    app.route("/l")
        .post((req, res, next) => { })
    app.route("/l/:id?")
        .get((req, res, next) => { })
    app.route("/l/:id/info")
        .get((req, res, next) => { })
}
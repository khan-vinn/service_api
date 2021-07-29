import LinkModel from '../../models/link_model.js'

export default function (app, myDataBase) {
    app.route("/l")
        .post((req, res, next) => { })

    app.route("/l/:id?")
        .get((req, res, next) => {
            if (!req.params.id) {
                res.status(200)
                return res.render("link", { showLinkForm: true })
            }
            res.render("link", { showLinkPage: true, link: req.params.id })
        })

    app.route("/l/:id/info")
        .get((req, res, next) => { })

}
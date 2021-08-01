import FileModel from '../models/file_model.js'
import multer from "multer";
const upload = multer({ dest: "uploads/" });


export default function (app, myDataBase) {
    app.route("/f")
        .post(upload.single("file"), (req, res, next) => { })

    app.route("/f/:id?")
        .get((req, res, next) => {
            if (!req.params.id) {
                res.status(200)
                return res.render("file", { showFileForm: true })
            }
            res.render("file", { showFilePage: true, fileLink: req.params.id })
        })

    app.route("/f/:id/info")
        .get((req, res, next) => { })

}
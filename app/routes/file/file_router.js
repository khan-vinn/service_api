import FileModel from '../../models/file_model.js'
import multer from "multer";
const upload = multer({ dest: "uploads/" });


export default function (app, myDataBase) {
    app.route("/f")
        .post(upload.single("file"), (req, res, next) => { })
    app.route("/f/:id/about")
        .get((req, res, next) => { })
    app.route("/f/:id?")
        .get((req, res, next) => { })
}
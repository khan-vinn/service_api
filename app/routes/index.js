import authRouter from "./auth/auth_router.js"
import fileRouter from './file/file_router.js'
import linkRouter from './link/link_router.js'
import profile from "./profile/profile_router.js"

function partialRoutes(app) {
    authRouter(app)
    fileRouter(app)
    linkRouter(app)
    profile(app)
}

export default function (app) {
    app.route("/").get((req, res, next) => {
        if (req.isAuthenticated()) {
            return res.render("index", { login: true })
        }
        res.render("index")
    })

    partialRoutes(app)

    app.use((req, res, next) => {
        res.status(401).type("txt").send("Not Found")
    })
}
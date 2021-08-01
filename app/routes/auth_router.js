import UserModel from "../models/user_model.js"
import PassportAuth, { ensureAuthenticated } from "../../utils/auth.js"
import passport from "passport"
import bcrypt from "bcrypt"

export default function (app) {
    PassportAuth(UserModel)

    app.route("/auth/login")
        .post((req, res) => {
            passport.authenticate("local", { failureRedirect: "/" }),
                (req, res, next) => {
                    res.redirect("/")
                }
        })
    app.route("/auth/logout")
        .get((req, res) => {
            res.logOut()
            res.redirect("/")
        })
    app.route("/auth/register")
        .post((req, res, next) => {
            const params = req.body
            UserModel.findOne({ username: params.username }, (err, user) => {
                if (err) {
                    return res.redirect("/")
                } else if (user) {
                    return res.status(403).send(params.username + " exists try another username")
                } else {
                    if ((params.username && params.username.length > 4 && params.username.length < 11)) {
                        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if ((params.email && params.email.length > 7 && re.test(email))) {
                            if (params.password && params.password.length > 5 && params.password === params.password_confirm) {
                                bcrypt.hash(params.password, 12)
                                    .then(hashedRes => {
                                        UserModel.createOne({
                                            username: params.username,
                                            password: hashedRes,
                                            email: params.email
                                        }, (err, data) => {
                                            if (err) {
                                                console.log(err, "\n 42")
                                                return res.status(500).send("error on save to Database 43")
                                            }
                                        })
                                    })
                                    .catch(err => {
                                        console.log(err)
                                        res.status(500).send("Error 49")
                                    })
                            }
                        }
                    }

                }
            })
        })
    app.route("/auth/verification/:token/:hash")
        .get((req, res) => { res.send(`verification/${req.params.token}/${req.params.hash}`) })
}
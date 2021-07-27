export default function (app) {
    app.route("/login")
    app.route("/logout")
    app.route("/regiseter")
    app.route("/verification/:token/:hash")
}
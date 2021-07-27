export default function (app) {
    app.route("/auth/login")
        .get((req, res) => { res.send("login") })
    app.route("/auth/logout")
        .get((req, res) => { res.send("logout") })
    app.route("/auth/register")
        .get((req, res) => { res.send("regiseter") })
    app.route("/auth/verification/:token/:hash")
        .get((req, res) => { res.send(`verification/${req.params.token}/${req.params.hash}`) })
}
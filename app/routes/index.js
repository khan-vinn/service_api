export default function (app) {
    app.route("/").get((req, res, next) => {
        res.render("index")
    })
    app.use((req, res, next) => {
        res.status(401).type("txt").send("Not Found")
    })
}
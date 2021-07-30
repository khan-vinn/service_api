import lessMiddleware from "less-middleware"
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import favicon from "serve-favicon";
import timeout from "connect-timeout";
import session from "express-session"
import passport from "passport";
import helmet from "helmet";

export default function (app) {
    app.set("view engine", "pug")
    app.set("views", "./app/views")
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(lessMiddleware("./app/stylesheets/", {
        dest: "./public/",
        debug: true,
        outputStyle: 'compressed',
        log: function (severity, key, value) { winston.log(severity, 'node-sass-middleware   %s : %s', key, value); },
        render: {
            paths: ["./app/stylesheets/module/"]
        }
    }))
    app.use(bodyParser.json())
    app.use(express.static("public"))
    app.use(favicon("./public/favicon.ico"))
    app.use(morgan("common"));
    // app.use(cors());
    // app.use(compression());
    // app.use(timeout("2s"));
    // app.use(helmet())
    app.use(session({
        secret: process.env.EXPRESS_SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false }
    }))
    app.use(passport.initialize());
    app.use(passport.session())
}
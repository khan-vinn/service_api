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
    app.use(express.static("public"))
    app.set("view engine", "pug")
    app.set("views", "./app/views")
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use("/public", express.static("public"));
    app.use(favicon("./public/favicon.ico"))
    app.use(morgan("common"));
    app.use(cors());
    app.use(compression());
    app.use(timeout("2s"));
    app.use(session({
        secret: process.env.EXPRESS_SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false }
    }))
    app.use(passport.initialize());
    app.use(passport.session())
    app.use(helmet())
}
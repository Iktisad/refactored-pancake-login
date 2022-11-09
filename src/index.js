import express from "express";
import passport from "passport";
import module from "./users/users.module.js";
import "./users/auth/passport/local-strategy.js";

const [PORT, APP_HOST_IP] = [3000, "http://localhost:3000"];

const app = express();

app.use(passport.initialize());

//bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// register routes
app.get("/", (req, res, next) => {
    res.send("<h1>Server is working</h1>");
});
app.use("/", module);
// configure the database

// start the express server

app.listen(PORT, () =>
    console.log(
        `${new Date().toISOString()} [info] Running On Port ${APP_HOST_IP}`
    )
);

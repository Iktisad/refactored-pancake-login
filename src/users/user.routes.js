import express from "express";
import passport from "passport";
// import usersController from "./users.controller.js";

const router = express.Router();
// const controller = usersController();
export default (module) => {
    router.route("/create-account").post(module.signup);
    // router.route("/create-account-with-google").post(module.signup);

    router.route("/login").post(passport.authenticate('local'), module.login);
    return router;
};
// router.post('/login',
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });
// export default router;

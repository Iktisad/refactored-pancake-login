import express from "express";
// import usersController from "./users.controller.js";

const router = express.Router();
// const controller = usersController();
export default (module) => {
    router.post("/create-account", module.signup);
    return router;
}
// router.post('/login',
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });
// export default router;

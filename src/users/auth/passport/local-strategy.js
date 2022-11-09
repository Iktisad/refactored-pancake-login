import passport from "passport";
import LocalStrategy from "passport-local";
import { UserRepository } from "../../user.repository.js";
// the first argument in Strategy is by default is set to look for username and password
// this value can be overriden via passing the following object as the first argument
/**
 * new LocalStrategy({
 *      usernameField: "email",
 *      passwordField: "pass"
 * }, callback function ....)
 */

// Let passport know which repository to use
passport.use(
    new LocalStrategy(async (username, password, done) => {
        const user = await UserRepository().findOne({ username });
        // const { username, password } = body;

        if (!username || !password) throw new Error("Invalid Credentials");

        if (!user) throw new Error("Invalid Username.");
        const passwordMatch = bcrypt.compareSync(password, user.password); // true

        if (!passwordMatch) throw new Error("Invalid Password.");

        // return issueJWT(user);
        return done(null, user);
    })
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

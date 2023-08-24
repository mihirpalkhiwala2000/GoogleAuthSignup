"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const passport_google_oauth2_1 = require("passport-google-oauth2");
const config_1 = require("./config");
const constant_1 = require("./constant");
passport.use(new passport_google_oauth2_1.Strategy({
    clientID: config_1.env.Google.clientID,
    clientSecret: config_1.env.Google.clientSecret,
    callbackURL: constant_1.url.callbackUrl,
    passReqToCallback: true,
}, (request, accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
//# sourceMappingURL=auth.js.map
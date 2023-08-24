import * as passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { env } from "./config";
import { url } from "./constant";

passport.use(
  new GoogleStrategy(
    {
      clientID: env.Google.clientID as string,
      clientSecret: env.Google.clientSecret as string,
      callbackURL: url.callbackUrl,
      passReqToCallback: true,
    },
    (
      request: Express.Request,
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user: any, done) => {
  done(null, user);
});

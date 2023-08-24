import * as express from "express";
import * as passport from "passport";
import * as session from "express-session";
import env from "./config";
import { messages } from "./constant";
import router from "./routes";
import("./auth");

const app = express();

app.use(
  session({
    secret: env.Session.secretCode as string,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("", router);

app.listen(env.Server.port, () => {
  console.log(messages.serverConnected);
});

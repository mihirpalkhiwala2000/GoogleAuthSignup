import * as express from "express";
import * as passport from "passport";
import { messages } from "./constant";
import { isLoggedIn } from "./middleware";
import * as cron from "node-cron";

const router = express.Router();

router.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>');
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

router.get("/auth/failure", (req, res) => {
  res.send(messages.failed);
});

router.get("/protected", isLoggedIn, (req, res) => {
  if (req.user) {
    const task = cron.schedule("*/15 * * * *", () => {
      req.session.destroy(() => {});
      task.stop();
      console.log(messages.autoLogout);
    });
    const name = req.user?.displayName;
    res.send(messages.hello + ` ${name}`);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {});
  res.send(messages.logout);
});

export default router;

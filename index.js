const express = require("express");
const passport = require("passport");
var session = require("express-session");
require("./auth");

const app = express();
app.use(
  session({ secret: "secretCode", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

app.get("/auth/failure", (req, res) => {
  res.send("Something went wrong");
});

app.get("/protected", isLoggedIn, (req, res) => {
  const name = req.user.displayName;
  res.send(`hello ${name}`);
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Goodbye!!");
});

app.listen(3000, () => {
  console.log("Connected");
});

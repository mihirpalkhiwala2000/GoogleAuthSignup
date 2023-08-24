"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const config_1 = require("./config");
const constant_1 = require("./constant");
const routes_1 = require("./routes");
Promise.resolve().then(() => require("./auth"));
const app = express();
app.use(session({
    secret: process.env.SECRET_CODE,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use("", routes_1.default);
app.listen(config_1.env.Server.port, () => {
    console.log(constant_1.messages.serverConnected);
});
//# sourceMappingURL=index.js.map
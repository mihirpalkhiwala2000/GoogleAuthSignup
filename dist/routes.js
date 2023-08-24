"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
const constant_1 = require("./constant");
const middleware_1 = require("./middleware");
const router = express.Router();
router.get("/", (req, res) => {
    res.send('<a href="/auth/google">Authenticate with google</a>');
});
router.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }));
router.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
}));
router.get("/auth/failure", (req, res) => {
    res.send(constant_1.messages.failed);
});
router.get("/protected", middleware_1.isLoggedIn, (req, res) => {
    var _a;
    if (req.user) {
        const name = (_a = req.user) === null || _a === void 0 ? void 0 : _a.displayName;
        res.send(constant_1.messages.hello + ` ${name}`);
    }
});
router.get("/logout", (req, res) => {
    req.session.destroy(() => { });
    res.send(constant_1.messages.logout);
});
exports.default = router;
//# sourceMappingURL=routes.js.map
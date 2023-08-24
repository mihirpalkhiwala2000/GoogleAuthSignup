"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.env = {
    Google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    Server: {
        port: process.env.PORT,
    },
};
//# sourceMappingURL=config.js.map
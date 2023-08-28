import * as dotenv from "dotenv";
dotenv.config();

export default {
  Google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  Server: {
    port: process.env.PORT,
  },
  Session: {
    secretCode: process.env.SECRET_CODE,
  },
};

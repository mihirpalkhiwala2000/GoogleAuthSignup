import * as dotenv from "dotenv";
dotenv.config();

const env = {
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
export default env;

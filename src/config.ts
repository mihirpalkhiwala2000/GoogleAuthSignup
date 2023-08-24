import * as dotenv from "dotenv";
dotenv.config();

export const env = {
  Google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  Server: {
    port: process.env.PORT,
  },
};

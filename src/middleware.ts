import * as express from "express";

export const isLoggedIn = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  req.user ? next() : res.sendStatus(401);
};

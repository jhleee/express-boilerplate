import { Request, Response, NextFunction } from "express";
import { verify } from "../libs/jwt";
import { Session } from "express-session";
import { User } from "../../@types";

export function authByRole(role?: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.session) {
      req.session = {} as Session;
    }
    const token = req.header("authorization");
    if (token) {
      try {
        req.session.user = verify(token) as User;
      } catch (error) {
        // skip
      }
    }

    if (role != undefined && role != req.session?.user?.role) {
      return res.status(403).json({
        error: "invalid authentication.",
      });
    }

    next();
  };
}

export const auth = authByRole;

import jwt from "jsonwebtoken";
import { logger } from "./logger";
import { randomUUID } from "crypto";

let defaultKey = randomUUID();

if (!process.env.JWT_SECRET_KEY) {
  logger.warn("JWT_SECRE_KEY is undefined. Using random key.");
}

export function verify(data: string) {
  return jwt.verify(data, process.env.JWT_SECRET_KEY || defaultKey);
}

export function decode(data: string) {
  return jwt.decode(data);
}

export function sign(data: string) {
  return jwt.sign(data, process.env.JWT_SECRET_KEY || defaultKey);
}

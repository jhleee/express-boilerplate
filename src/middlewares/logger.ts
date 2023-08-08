import { stream } from "../libs/logger";
import morgan from "morgan";

export const morganLogger = morgan(
  "HTTP/:http-version :method :remote-addr :url :remote-user :status :res[content-length] :referrer :response-time ms",
  { stream },
);

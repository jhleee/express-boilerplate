import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "express-async-errors";
import { morganLogger } from "./middlewares/logger";
import router from "./routes";

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganLogger);
app.use(router);

app.listen(PORT, () => {
  console.log(
    `✅ Server listening on port ${PORT}\n✅ http://localhost:${PORT}`,
  );
});

import express from "express";
import "express-session";
export const router = express.Router();

router.get("/", (req, res) => {
  const user = req.session?.user;
  res.json({
    message: `This is admin page.\nWelcome ${user?.name}`
  });
});

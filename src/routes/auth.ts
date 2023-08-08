import express from "express";
import { sign } from "../libs/jwt";
import { login } from "../controllers/auth";
export const router = express.Router();

router.post("/login", (req, res) => {
  let { id, pw } = req.body;
  if (!id || !pw) {
    return res.status(400).json({
      error: "invalid request",
    });
  }
  let user = login(id, pw);

  res.json({
    token: sign(JSON.stringify(user)),
  });
});

router.get("/whoami", (req, res) => {
  const user = req.session?.user;
  if(!user) {
    return res.json({
      "name": "annoymous",
      "role": "annoymous"
    })
  }
  res.json(user);
});

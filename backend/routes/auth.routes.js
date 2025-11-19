import express from "express";
import dummyUser from "../config/dummyUser.js";
const router = express.Router();

// Static login route (no DB, no password)
router.post("/login", (req, res) => {
  res.status(200).json({
    message: "Login successful (Static User)",
    user: dummyUser,
  });
});

export default router;

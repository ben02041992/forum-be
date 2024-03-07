import express from "express";

const router = express.Router();

router.post("/", createChat);
router.get("/:id", getChatById);

export default router;

import express from "express";
import reminderController from "../controllers/reminderController";

const router = express.Router();

router.post("/", reminderController.addReminder);
router.delete("/:id", reminderController.deleteSingleReminder);

export default router;

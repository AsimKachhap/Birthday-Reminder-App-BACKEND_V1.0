import ReminderCard from "../models/ReminderCard";
import { Request, Response } from "express";
import mongoose from "mongoose";

export default {
  addReminder: async (req: Request, res: Response) => {
    const { name, date, displayPicture, favourite, notification } = req.body;

    const reminder = new ReminderCard({
      name: name,
      date: date,
      displayPicture: displayPicture,
      favourite: favourite,
      notification: notification,
    });

    await reminder.save();

    res.status(200).json({
      status: "SUCCESS",
      data: reminder,
    });
  },

  getAllReminders: async (req: Request, res: Response) => {
    try {
      const allReminders = await ReminderCard.find();
      res.status(200).json({
        status: "SUCCESS",
        length: allReminders.length,
        data: allReminders,
      });
    } catch (error) {
      res.status(400).json({
        status: "FAILURE",
        error: error,
      });
    }
  },

  deleteSingleReminder: async (req: Request, res: Response) => {
    try {
      const deletedReminder = await ReminderCard.findById({
        _id: req.params.id,
      });

      console.log(deletedReminder);

      if (deletedReminder) {
        await ReminderCard.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({
          status: "SUCCESS",
          message: "Reminder succesfully deleted",
        });
      } else {
        res.status(404).json({
          status: "FAILURE",
          message: "Reminder not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "FAILURE",
        error: error,
      });
    }
  },
};

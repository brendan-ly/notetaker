import express from "express";
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from "../controllers/notesController.js";

const router = express.Router();

// app.get("/api/notes", (req, res) => {
//   res.send("you got 50 notes");
// });

// controllers 
router.get("/", getAllNotes); 
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
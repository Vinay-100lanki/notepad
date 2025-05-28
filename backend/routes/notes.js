const router = require("express").Router();
const fetchUser = require("../middleware/fetchUser");
const User = require("../models/User"); // Adjust the path as necessary
const { body, validationResult } = require("express-validator");
const Note = require("../models/Notes");

// get all the notes using GET request "/api/notes/fetchallnotes" - login required 
router.get("/fetchallnotes", fetchUser, async (req, res) => {
    try {
        // Fetch all notes for the authenticated user
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Add a notes using POST request "/api/notes/addnote" - login required 
// router.post(
//   "/addnote",
//   [
//     body("title", "Enter a valid title").isLength({ min: 3 }),
//     body("description", "Description must be at least 5 characters long").isLength({ min: 5 }),
//     body("tag", "Tag must be at least 3 characters long").isLength({ min: 3 }),
//     body("author", "Author must be at least 3 characters long").isLength({ min: 3 })
//   ],
//   fetchUser, // Add fetchUser middleware here if authentication is required
//   async (req, res) => {
//     try {
//       const { title, description, tag, author } = req.body;
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const note = new Note({
//         title,
//         description,
//         tag,
//         author,
//         user: req.user.id
//       });

//       const saveNote = await note.save();
//       res.json(saveNote);
//     } catch (error) {
//       console.error("Error adding note:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );


router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



// Update the existing note using GET request "/api/notes/updatenote" - login required 
router.put("/updatenote/:id",fetchUser , async (req, res) => {

    const { title, description, tag, author } = req.body;
    const newNote = {};
    if (title) {
        newNote.title = title;
    }
    if (description) {
        newNote.description = description;
    }
    if (tag) {
        newNote.tag = tag;
    }
    if (author) {
        newNote.author = author;
    }

    const note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Note not found");
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
    }
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { $set: newNote },
            { new: true }
        );
        res.json(updatedNote);
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).send("Internal Server Error");
    }
}  
);

// Update the existing note using DELETE request "/api/notes/deletenote" - login required 
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }
        await Note.findByIdAndDelete(req.params.id);
        res.json({ Success: "Successfully deleted the note", note: note });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
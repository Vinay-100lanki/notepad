const router = require("express").Router();
const User = require("../models/User"); // Adjust the path as necessary

// router.get("/", (req, res) => {
//     obj = {
//         a:"thios is a test",
//         number:356
//     }
//     res.json(obj);
// });

// Example in your route (e.g., routes/auth.js)
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send("User registered");
});

module.exports = router;
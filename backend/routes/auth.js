const router = require("express").Router();
const User = require('../models/User');

router.get("/", (req, res) => {
    // obj = {
    //     a:"thios is a test",
    //     number:356
    // }
    // res.json(obj);

    console.log("Login route accessed");
    console.log(req.body); 
    const user = User(req.body);
    user.save()
    res.send(req.body); // Echo back the request body for testing
}
);

module.exports = router;
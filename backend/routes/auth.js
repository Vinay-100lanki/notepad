const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// JWT secret key for signing tokens`
const JWT_SECRET = 'harry@is@bd@boy'
const fetchUser = require("../middleware/fetchUser");

router.get("/", (req, res) => {
  res.send("Auth route is working!");
});

// create a user using POST request "/api/auth/createuser" - no login required
router.post(
  "/createuser",
  [
    body("username")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long"),
    body("email")
      .isEmail()
      .isLength({ min: 5 })
      .withMessage("Email must be at least 5 characters long and valid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("name", "enter a valid name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    let success = false;
    // Validate the request body
    // If there are validation errors, return a 400 response with the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if a user with the same email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secPass,
        name: req.body.name,
      });
    // Create a JWT token for the user
    const data = {
      user: {
        id: user.id, // Use user._id if you want to include the MongoDB ObjectId
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    console.log("JWT Data:", authToken);

    //   res.json(user);
      res.json({ success: true , authToken});
    } catch (error) {
        res.status(500).json({ error: error.message });
      console.error("Error creating user:", error);
    //   res.json({ error: "enter unique details" });
    }
  }
);

// create a user using POST request "/api/auth/login" - no login required
router.post('/login', [
    body('email',"Enter a valid Email").isEmail(),
    body('password', "Password cannot be blank").exists()
],
async (req,res)=>{
  let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
          success = false;
            return res.status(400).json({success , error:"Please try to login with correct credentials"});
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({ success , error:"Please try to login with correct credentials"});
        }
        
        const data = {
            user: {
                id: user.id, // Use user._id if you want to include the MongoDB ObjectId
            },
        };

        const authToken = jwt.sign(data, JWT_SECRET);
        console.log("JWT Data:", authToken);
        success = true;
        res.json({success , authToken});

    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
);

// create a user using POST request "/api/auth/getuser" - no login required
router.get('/getuser', fetchUser,
    async (req, res) => {
  // Get the user from the JWT token
//   const userId = req.user.id; // Assuming req.user is set by a middleware that verifies the token
  try {
    userId = req.user.id; // Extract user ID from the request object
    
    const user = await User.findById(userId).select("-password"); // Exclude password from the response
    res.send(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

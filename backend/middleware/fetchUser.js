const JWT = require('jsonwebtoken');
const JWT_SECRET = 'harry@is@bd@boy'

const fetchUser = (req, res, next) => {
    // Get the token from the jwt token and add id to req object
    const token = req.header('auth-token');
    
    // If no token is provided, return a 401 Unauthorized response
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        // Verify the token and extract user information
        const data = JWT.verify(token, JWT_SECRET);
        req.user = data.user; // Attach user data to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        // If token verification fails, return a 401 Unauthorized response
        return res.status(401).send({ error: "Invalid token" });
    }
}

module.exports = fetchUser;
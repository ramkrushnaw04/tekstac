require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET;

const movies = [
  { id: 1, title: "Interstellar" },
  { id: 2, title: "The Dark Knight" },
  { id: 3, title: "Inception" }
];

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "admin" || password !== "password123") {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const token = jwt.sign(
    { username },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Login successful",
    token
  });
});

// JWT authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({
      message: "Invalid token"
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid token"
      });
    }

    req.user = user;
    next();
  });
}

// Protected movies API
app.get("/movies", authenticateToken, (req, res) => {
  res.status(200).json(movies);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

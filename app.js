const express = require("express");

const app = express();

// Configurable port
const PORT = process.env.PORT || 3000;

// Middleware for request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  next();
});

// Users data
const users = [
  {
    username: "Alwin",
    role: "Admin",
    lastAccess: "2026-10-05",
  },
  {
    username: "Veena",
    role: "User",
    lastAccess: "2026-10-02",
  },
  {
    username: "Geetha",
    role: "Manager",
    lastAccess: "2026-09-20",
  },
  {
    username: "Rahul",
    role: "User",
    lastAccess: "2026-10-01",
  },
  {
    username: "Sneha",
    role: "Admin",
    lastAccess: "2026-09-15",
  },
];

// Get all users
app.get("/", (req, res) => {
  res.json(users);
});

// Get users who accessed within last 10 days
app.get("/users/recent", (req, res) => {
  const today = new Date();

  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(today.getDate() - 10);

  const recentUsers = users.filter((user) => {
    const lastAccessDate = new Date(user.lastAccess);

    return lastAccessDate >= tenDaysAgo;
  });

  res.json(recentUsers);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

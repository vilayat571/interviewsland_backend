const db = require("./config/db.js");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const Question = require("./routes/question.js");
const Category = require("./routes/categories.js");
const Shares = require("./routes/share.js");
const Suggest = require("./routes/suggest.js");

// Initialize database connection
db();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Include your API routes
app.use("/", Question);
app.use("/", Category);
app.use("/", Shares);
app.use("/", Suggest);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend started to listen on port ${PORT}`);
});

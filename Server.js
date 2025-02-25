require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const chatbotRoutes = require("./routes/chatbotRoutes");
const contactRoutes = require("./routes/contactRoutes");
// const serviceRoutes = require("./routes/serviceRoutes");

// Use Routes
app.use("/api", chatbotRoutes);
app.use("/api", contactRoutes);
// app.use("/api", serviceRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Failed:", err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

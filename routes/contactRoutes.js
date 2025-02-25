const express = require("express");
const router = express.Router();
const Contact = require("../models/User"); // MongoDB Model
const axios = require("axios");

const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx6NIXSqbqhq5RQbFOVxmGv1_QwdEfKlL_4Hs4IcycLI3nqikZ2-90zB4CRIXlB8-uj_w/exec";

router.post("/contact", async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;


  const newContact = new Contact({
    name,
    email,
    phoneNumber,
    message,
  });

  try {
    // Save data to MongoDB first (fast operation)
    await newContact.save();

    // Respond to client immediately (don't wait for Google Sheets)
    res.json({ success: true, message: "Submitted!" });

    // Send data to Google Sheets in the background
    axios.post(GOOGLE_SHEET_WEBHOOK_URL, { name, email, phoneNumber, message })
      .then(() => console.log("Data sent to Google Sheets"))
      .catch((err) => console.error("Error sending to Google Sheets:", err));

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Error", error: error.message });
  }
});

module.exports = router;


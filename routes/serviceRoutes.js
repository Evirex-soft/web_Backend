const express = require("express");
const router = express.Router();

const services = [
  { id: 1, name: "Web Development", description: "Build responsive websites" },
  { id: 2, name: "Mobile App Development", description: "Develop mobile apps for Android & iOS" }
];

router.get("/services", (req, res) => {
  res.json(services);
});

module.exports = router;

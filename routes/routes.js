const express = require("express");
const wellController = require("../controllers/wellController");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello World");
});

// /api/template/:chipname/:dye
router.get("/template/:chipname/:dye", wellController.getTemplate);

module.exports = router;

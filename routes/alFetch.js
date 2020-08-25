const { Router } = require("express");
const router = Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

// MODELS
const Planet = require("../models/Planet");

// GET ALL PLANETS
router.get("/planets", async (req, res) => {
  const planets = await Planet.find({});

  return res.json(planets);
});

// CREATE A NEW PLANET
router.post("/planets", upload.single("planetImage"), async (req, res) => {
  // IF ALREADY EXIST RETURN ERROR
  const response = await Planet.find({ planetImage: req.file.originalname });
  if (response.length > 0) return res.json({ error: "Planet already exist" });

  const planet = new Planet({
    name: req.body.name,
    description: req.body.description,
    phys: req.body.phys,
    geo: req.body.geo,
    planetImage: req.file.originalname,
  });

  try {
    await planet.save();
    return res.json({ message: `Planet ${req.body.name} successfully added` });
  } catch (error) {
    return res.json({ error });
  }
});

module.exports = router;

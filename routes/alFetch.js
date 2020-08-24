const { Router } = require("express");
const router = Router();

// MODELS
const Planet = require("../models/Planet");

router.get("/planets", async (req, res) => {
  const planets = await Planet.find({});

  return res.json(planets);
});

router.post("/planets", async (req, res) => {
  const planet = new Planet({
    name: req.body.name,
    description: req.body.description,
    phys: req.body.phys,
    geo: req.body.geo,
  });

  try {
    await planet.save();
    return res.json({ message: `Planet ${req.body.name} successfully added` });
  } catch (error) {
    return res.json({ error });
  }
});

router.post("/test", (req, res) => {
  return res.json(req.name);
});
module.exports = router;

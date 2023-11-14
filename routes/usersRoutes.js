const router = require("express").Router();
let User = require("../model/Users");

router.post("/", async function (req, res) {
  try {
    if (!req.body.status || !req.body.name) {
      res.sendStatus(400);
      return;
    }
    const user = await User.create({
      name: req.body.name,
      status: req.body.status,
    });
    res.sendStatus(200);
    console.log(req.body);
  } catch (err) {
    console.error("Not Inserted", err);
  }
});

router.get("/", async function (req, res) {
  try {
    const users = await User.find({}).limit(10);
    res.json(users).sendStatus(200);
  } catch (err) {
    console.error("Cant read", err);
  }
});

module.exports = router;

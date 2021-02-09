const router = require("express").Router();

const { createOne, getAll } = require("../controllers/currencyControllers");

router
  .route("/")
  .post((req, res) => {
    const { description, symbol } = req.body;
    createOne(description, symbol)
      .then((currency) => res.json(currency).status(201))
      .catch((err) => res.status(400).json(err));
  })
  .get((req, res) => {
    getAll()
      .then((currencies) => res.json(currencies).status(200))
      .catch((err) => res.status(404).json(err));
  });

module.exports = router;

const router = require("express").Router();

const {
  createOne,
  getAll,
  getAllRates,
} = require("../controllers/ratesControllers");

router
  .route("/")
  .post((req, res) => {
    const { id_currency, value } = req.body;
    createOne(id_currency, value)
      .then((valor) => res.json(valor).status(201))
      .catch((err) => res.status(400).json(err));
  })
  .get((req, res) => {
    getAllRates()
      .then((rates) => res.json(rates).status(200))
      .catch((err) => res.status(404).json(err));
  });

router.route("/:symbol").get((req, res) => {
  const { symbol } = req.params;
  getAll(symbol)
    .then((rate) => res.json(rate).status(200))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;

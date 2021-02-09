const router = require("express").Router();
const CurrencyRoutes = require("./currencyRoutes");
const RatesRoutes = require("./ratesRoutes");

router.use("/currencies", CurrencyRoutes);
router.use("/rates", RatesRoutes);

module.exports = router;

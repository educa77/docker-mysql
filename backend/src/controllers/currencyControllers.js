const { db } = require("../../models/index");
const Moneda = db.currency;

const getAll = () => {
  return new Promise((resolve, reject) => {
    Moneda.findAll()
      .then((currencies) => {
        resolve(currencies);
      })
      .catch((err) => reject(err));
  });
};

const createOne = (description, symbol) => {
  return new Promise((resolve, reject) => {
    Moneda.create({ description, symbol })
      .then((currency) => {
        resolve(currency);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  createOne,
  getAll,
};

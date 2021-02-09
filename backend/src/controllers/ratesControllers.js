const { db } = require("../../models/index");
const Valor = db.rate;
const Moneda = db.currency;

const createOne = (id_currency, value) => {
  return new Promise((resolve, reject) => {
    Valor.create({ id_currency, value })
      .then((valor) => {
        resolve(valor);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getAll = (entrada) => {
  const eNtrada = entrada.toUpperCase();
  return new Promise((resolve, reject) => {
    Valor.findAll({
      include: [Moneda],
    })
      .then((rates) => {
        const ratesfilter = rates.filter(
          (element) => element.currency.symbol === eNtrada
        );
        const lastratefilter = ratesfilter[ratesfilter.length - 1];
        resolve(lastratefilter);
      })
      .catch((err) => reject(err));
  });
};

const getAllRates = () => {
  return new Promise((resolve, reject) => {
    Valor.findAll({ include: [Moneda] })
      .then((rate) => {
        let currencyIds = {};
        for (let object of rate) {
          let currencyId = object.currency.id;
          if (!currencyIds.hasOwnProperty(currencyId))
            currencyIds[currencyId] = object.id;
          else {
            if (object.id > currencyIds[currencyId])
              currencyIds[currencyId] = object.id;
          }
        }
        let data = rate.filter((el) => {
          return Object.values(currencyIds).includes(el.id);
        });
        resolve(data.sort((a, b) => (a.id_currency < b.id_currency ? -1 : 1)));
      })
      .catch((err) => reject(err));
  });
};

module.exports = {
  createOne,
  getAll,
  getAllRates,
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currencies = require("../src/data/seeds.json").currencies;
    let currenciesArray = [];
    currencies.forEach((currency) => {
      currenciesArray.push({
        description: currency["description"],
        symbol: currency["symbol"],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
    return queryInterface.bulkInsert("currencies", currenciesArray);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("currencies", null);
  },
};

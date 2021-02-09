"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const rates = require("../src/data/seeds.json").rates;
    let ratesArray = [];
    rates.forEach((card) => {
      ratesArray.push({
        id_currency: card["id_currency"],
        value: card["value"],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
    return queryInterface.bulkInsert("rates", ratesArray);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("rates", null);
  },
};

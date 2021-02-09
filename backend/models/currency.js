"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class currency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      currency.hasMany(models.rate, {
        foreignKey: "id_currency",
        sourceKey: "id",
      });
    }
  }
  currency.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      symbol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "currency",
    }
  );
  return currency;
};

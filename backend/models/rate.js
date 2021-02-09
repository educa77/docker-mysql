"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rate.belongsTo(models.currency, {
        foreignKey: "id_currency",
        targetKey: "id",
      });
    }
  }
  rate.init(
    {
      id_currency: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      value: {
        type: DataTypes.REAL,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "rate",
    }
  );
  return rate;
};

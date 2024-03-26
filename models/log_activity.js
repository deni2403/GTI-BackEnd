'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  log_activity.init({
    user_id: DataTypes.INTEGER,
    shipment_id: DataTypes.INTEGER,
    repair_id: DataTypes.INTEGER,
    activity_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'log_activity',
  });
  return log_activity;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class containers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      containers.belongsTo(models.users,{foreignkey:"users_id"}),
      containers.hasOne(models.repairs,{foreignKey:"container_id"}),
      containers.hasOne(models.shipments,{foreignkey:"shipments_id"})
    }
  }
  containers.init({
    container_uuid: DataTypes.UUIDV4,
    container_number: DataTypes.STRING(100),
    user_id: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    location: DataTypes.ENUM("Jakarta","Makassar","Medan","Surabaya"),
    iddle_days: DataTypes.INTEGER,
    type: DataTypes.ENUM("20 feet","40 feet"),
    status: DataTypes.ENUM("Ready","In Use","Repair"),
    remark: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'containers',
  });
  return containers;
};
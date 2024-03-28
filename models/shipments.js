'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shipments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shipments.init({
    shipment_uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4
    },
    shipment_number: DataTypes.STRING(100),
    user_id: DataTypes.INTEGER,
    container_id: DataTypes.INTEGER,
    return_empty: DataTypes.DATE,
    status: DataTypes.ENUM("Arrive","Departure","Pickup","Return","Gate in","Accident"),
    shipment_detail_id: DataTypes.INTEGER,
    remark_description: DataTypes.TEXT,
    image: DataTypes.STRING,
    active_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'shipments',
  });
  return shipments;
};
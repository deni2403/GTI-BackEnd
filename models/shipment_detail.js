import { sequelize, DataTypes } from '../config/database.js';

const Shipment_Detail = sequelize.define(
  'shipment_detail',
  {
    POL: {
      type: DataTypes.STRING(100),
    },
    POD: {
      type: DataTypes.STRING(100),
    },
    ETD: {
      type: DataTypes.DATE,
    },
    ETA: {
      type: DataTypes.DATE,
    },
    stuffing_date: {
      type: DataTypes.DATE,
    },
    shipper: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

await Shipment_Detail.sync();

export default Shipment_Detail;
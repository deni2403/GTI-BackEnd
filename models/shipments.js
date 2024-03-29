import { sequelize, DataTypes } from '../config/database.js';
import User from './Users.js';
import Shipment_Detail from './Shipment_detail.js';
import Container from './Containers.js';

const Shipment = sequelize.define(
  'shipments',
  {
    shipment_uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    shipment_number: {
      type: DataTypes.STRING(100),
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    container_id: {
      type: DataTypes.INTEGER,
    },
    return_empty: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM(
        'Arrive',
        'Departure',
        'Pickup',
        'Return',
        'Gate in',
        'Accident',
      ),
    },
    shipment_detail_id: {
      type: DataTypes.INTEGER,
    },
    remark_description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    active_status: {
      type: DataTypes.BOOLEAN,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    deletedBy: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  },
);

//User and Shipment relation
User.hasMany(Shipment);
Shipment.belongsTo(User, { foreignKey: 'user_id' });


//Shipment_Detail and Shipment relation
Shipment.hasOne(Shipment_Detail, { foreignKey: 'shipment_detail_id' });
Shipment_Detail.belongsTo(Shipment, { foreignKey: 'shipment_detail_id' });

//Container and Shipment relation
Shipment.hasMany(Container, { foreignKey: 'container_id' });
Container.belongsTo(Shipment, { foreignKey: 'container_id' });

await Shipment.sync();

export default Shipment;

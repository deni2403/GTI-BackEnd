import { sequelize, DataTypes } from '../config/database.js';
import User from './Users.js';
import Container from './Containers.js';
import Shipment from './Shipments.js';
import Repairment from './Repairment.js';

const log_activity = sequelize.define(
  'log_activity',
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    container_id: {
      type: DataTypes.INTEGER,
    },
    shipment_id: {
      type: DataTypes.INTEGER,
    },
    repairment_id: {
      type: DataTypes.INTEGER,
    },
    activity_info: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

//User and Log_activity relation
User.hasMany(log_activity);
log_activity.belongsTo(User, { foreignKey: 'user_id' });

//Container and Log_activity relation
log_activity.hasOne(Container, { foreignKey: 'container_id' });
Container.belongsTo(log_activity, { foreignKey: 'container_id' });

//Shipment and Log_activity relation
log_activity.hasOne(Shipment, { foreignKey: 'shipment_id' });
Shipment.belongsTo(log_activity, { foreignKey: 'shipment_id' });

//Repairment and Log_activity relation
log_activity.hasOne(Repairment, { foreignKey: 'repairment_id' });
Repairment.belongsTo(log_activity, { foreignKey: 'repairment_id' });

await log_activity.sync();

export default log_activity;

import { sequelize, DataTypes } from '../config/database.js';
import User from './Users.js';
import Container from './Containers.js';

const Repairment = sequelize.define(
  'repairments',
  {
    repair_uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    container_id: {
      type: DataTypes.INTEGER,
    },
    remark: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

//User and Repairment relation
User.hasMany(Repairment);
Repairment.belongsTo(User, { foreignKey: 'user_id' });

//Container and Repairment relation
Repairment.hasOne(Container, { foreignKey: 'container_id' });
Container.belongsTo(Repairment, { foreignKey: 'container_id' });


await Repairment.sync();

export default Repairment;
import { sequelize, DataTypes } from '../config/database.js';
import User from './Users.js';

const Container = sequelize.define(
  'containers',
  {
    container_uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    container_number: {
      type: DataTypes.STRING(100),
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.ENUM('Jakarta', 'Makassar', 'Medan', 'Surabaya'),
    },
    iddle_days: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.ENUM('20 feet', '40 feet'),
    },
    status: {
      type: DataTypes.ENUM('Ready', 'In Use', 'Repair'),
    },
    remark: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  },
);

//User and Container relation
User.hasMany(Container, { foreignKey: 'user_id' });
Container.belongsTo(User, { foreignKey: 'user_id' });

await Container.sync();

export default Container;

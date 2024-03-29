import { sequelize, DataTypes } from '../config/database.js';

const User = sequelize.define(
  'users',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING(100),
    },
    role: {
      type: DataTypes.ENUM('Super Admin', 'Customer Service', 'Operasional'),
    },
    location: {
      type: DataTypes.ENUM('Jakarta', 'Makassar', 'Medan', 'Surabaya'),
    },
    user_image: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

await User.sync();

export default User;

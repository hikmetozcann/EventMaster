// models/user.js

import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database.js';

export class Users extends Model {}

Users.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Users'
});

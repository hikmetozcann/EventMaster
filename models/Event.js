import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database.js'; 

class Event extends Model {}

Event.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  participantLimit: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Event',
});

export default Event;


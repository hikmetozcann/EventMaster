import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database.js'; 

class Ticket extends Model {}

Ticket.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  eventId: {
    type: DataTypes.UUID,
    references: {
      model: 'Event',
      key: 'id',
    },
  },
  participantId: {
    type: DataTypes.UUID,
    references: {
      model: 'Participant',
      key: 'id',
    },
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  purchaseTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Ticket',
});



export default Ticket;

import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database.js'; 

class Participant extends Model {}

Participant.init({
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    // Benzersizlik kısıtlamasını kaldırıyoruz çünkü aşağıda bileşik kısıtlama oluşturacağız.
  },
  eventId: {
    type: DataTypes.UUID,
    references: {
      model: 'Event',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Participant',
  indexes: [{
    unique: true,
    fields: ['email', 'eventId'], // email ve eventId üzerinde bileşik benzersiz kısıtlama
    name: 'unique_participant_per_event', // Opsiyonel: Kısıtlama için bir isim
  }],
});


export default Participant;


// eslint-disable-next-line no-unused-vars
import sequelize from '../utils/database.js'; 
import Users from './Users.js';
import Event from './Event.js';
import Participant from './Participant.js';
import Ticket from './Ticket.js';

// İlişkileri tanımlayın
Users.hasMany(Event, { foreignKey: 'userId' });
Event.belongsTo(Users, { foreignKey: 'userId' });

Event.hasMany(Participant, { foreignKey: 'eventId' });
Participant.belongsTo(Event, { foreignKey: 'eventId' });

Event.hasMany(Ticket, { foreignKey: 'eventId' });
Ticket.belongsTo(Event, { foreignKey: 'eventId' });

Participant.hasMany(Ticket, { foreignKey: 'participantId' });
Ticket.belongsTo(Participant, { foreignKey: 'participantId' });

export { Users, Event, Participant, Ticket };

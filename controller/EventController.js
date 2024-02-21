import Event from '../models/Event.js'; // Sequelize modelinizi import edin

const EventsController = {
  // Etkinlik Ekleme
  async createEvent(req, res) {
    try {
      const { name, description, time, location, participantLimit, category } = req.body;
      const newEvent = await Event.create({
        name,
        description,
        time,
        location,
        participantLimit,
        category,
        userId:req.user.userId 
      });
      return res.status(201).json(newEvent);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Tüm Etkinlikleri Getirme
  async getAllEvents(req, res) {
    try {
      const events = await Event.findAll();
      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Belirli Bir Etkinliği Getirme
  async getEventById(req, res) {
    try {
      const { id } = req.params;
      const event = await Event.findByPk(id);
      if (event) {
        return res.status(200).json(event);
      } else {
        return res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Etkinlik Güncelleme
  async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Event.update(req.body, {
        where: { id }
      });
      if (updated) {
        const updatedEvent = await Event.findByPk(id);
        return res.status(200).json(updatedEvent);
      }
      throw new Error('Event not found');
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Etkinlik Silme
  async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Event.destroy({
        where: { id }
      });
      if (deleted) {
        return res.status(200).json({ message: 'Event deleted successfully' });
      }
      throw new Error('Event not found');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};


export default EventsController;
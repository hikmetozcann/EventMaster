import express from 'express';
import EventController from '../controller/EventController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();

router.post('/events', authenticateToken, EventController.createEvent);
router.get('/events', EventController.getAllEvents);
router.get('/events/:id', EventController.getEventById);
router.put('/events/:id', authenticateToken, EventController.updateEvent);
router.delete('/events/:id', authenticateToken, EventController.deleteEvent);

export default router;
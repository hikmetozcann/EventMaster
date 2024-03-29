import express from 'express';
import AuthController from '../controller/AuthController.js';
import EventController from '../controller/EventController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();


// ? Auth routes
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);


// ? Events routes
router.post('/events', authenticateToken, EventController.createEvent);
router.get('/events', EventController.getAllEvents);
router.get('/events/:id', EventController.getEventById);
router.put('/events/:id', authenticateToken, EventController.updateEvent);
router.delete('/events/:id', authenticateToken, EventController.deleteEvent);

export default router;
import { Router } from 'express';
var router = Router();

router.get('/', async function(req, res) {

  return res.status(200).json({ message: 'Welcome to the API' });
});


export default router;

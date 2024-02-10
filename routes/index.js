import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res) {

  return res.status(200).json({ message: 'Welcome to the API' });
});

export default router;

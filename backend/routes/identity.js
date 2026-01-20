// backend/routes/identity.js
import express from 'express';
import { getIdentity } from '../controllers/identityController.js';
import { downloadResume } from '../controllers/identityController.js';

const router = express.Router();

router.get('/', getIdentity);
router.get('/resume', downloadResume); 

export default router;
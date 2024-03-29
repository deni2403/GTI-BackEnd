import express from 'express';
import { getContainers } from '../controllers/containerController.js';

const router = express.Router();

router.get('/containers', getContainers);

export default router;
import express from 'express';
import { getRepairments } from '../controllers/repairmentController.js';

const router = express.Router();

router.get('/repairments', getRepairments);

export default router;
import express from 'express';
import { getLogActivities } from '../controllers/log_activityController.js';

const router = express.Router();

router.get('/log_activities', getLogActivities);

export default router;
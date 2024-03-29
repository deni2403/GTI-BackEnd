import express from 'express';
import { getShipment_Details } from '../controllers/shipment_detailController.js';

const router = express.Router();

router.get('/shipment_details', getShipment_Details);

export default router;
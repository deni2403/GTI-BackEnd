import Shipment_Detail from '../models/Shipment_detail.js';

const getShipment_Details = async (req, res) => {
  try {
    const response = await Shipment_Detail.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getShipment_Details };

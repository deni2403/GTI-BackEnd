import Shipment from "../models/Shipments.js";

const getShipments = async (req, res) => {
    try {
        const response = await Shipment.findAll();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getShipments };
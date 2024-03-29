import Repairment from '../models/Repairment.js';

const getRepairments = async (req, res) => {
  try {
    const response = await Repairment.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getRepairments };

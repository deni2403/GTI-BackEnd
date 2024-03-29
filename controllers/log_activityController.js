import log_activity from "../models/Log_Activity.js";

const getLogActivities = async (req, res) => {
    try {
        const response = await log_activity.findAll();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getLogActivities };
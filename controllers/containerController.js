import Container from '../models/Containers.js';

const getContainers = async (req, res) => {
    try {
        const response = await Container.findAll();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getContainers };
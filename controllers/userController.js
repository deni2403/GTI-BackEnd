import User from '../models/Users.js';

const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ['uuid', 'name', 'email', 'role', 'location', 'user_image'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, password, role, location, user_image } = req.body;

  try {
    await User.create({
      name,
      email,
      password,
      role,
      location,
      user_image,
    });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUsers, createUser };

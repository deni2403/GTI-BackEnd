import dotenv from 'dotenv';
dotenv.config();

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

export { generateToken, verifyToken };

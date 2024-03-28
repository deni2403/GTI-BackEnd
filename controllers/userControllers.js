const { v4: uuidv4 } = require('uuid');
// const {comparePassword, hashPassword}= require('../helpers/bcrypt')
const {users}= require('../models')

class userController{
    static async addUser(req,res){
        try{
            const {name, role,email, password, location,user_image} = req.body
            const create = await users.create({
                user_uuid: uuidv4(),
                name: name,
                email: email,
                password: password,
                role:role,
                location: location,
                user_image: user_image,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            res.status(200).json({
                user: create
            })
        }catch(err){
            res.status(500).json({
                message: err
            })
        }
    }
}

module.exports = userController
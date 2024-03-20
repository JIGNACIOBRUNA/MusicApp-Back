const bcrypt = require("bcrypt");
const { User } = require("../db");

const createUser = async(req, res) =>{
    const {userName, password, mail} = req.body;

    try{
        const existingUser = await User.findOne({ where: { Name: userName } });
        if(existingUser){
            return res.status(400).json({ error: "El nombre de usuario ya esta en uso"});
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({ Name: userName, Password: hashedPassword, Mail: mail});

        return res.status(201).json(newUser);
    }catch (error){
        console.log("Error al crear usuario:", error);
        return res.status(500).json({error: error.message});
    }
}

module.exports = { createUser };
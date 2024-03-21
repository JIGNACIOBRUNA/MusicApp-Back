const bcrypt = require("bcrypt");
const { User } = require("../db");
const _ = require("lodash");

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
    };
};

const updateUser = async(req, res) =>{
    const id = req.params.id;
    const {Name, Password, Mail} = req.body;
    try {
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({error: "Usuario no encontrado"});
        }
        if (Name) user.Name = Name;
        const hashedPassword = bcrypt.hashSync(Password, 10);
        if (Password) user.Password = hashedPassword; 
        if (Mail) user.Mail = Mail;
        await user.save();
        // console.log(user);

        return res.status(200).json(user);
    } catch (error) {
        console.log("Error al modificar el usuario", error);
        return res.status(500).json({ error: error.message})
    };
};

const deleteUser = async(req, res) =>{
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({error: "Usuario no encontrado"});
        }
        await user.destroy();
        return res.status(200).json({message: "Usuario eliminado correctamente"});
    } catch (error) {
        console.log("Error al eliminar el usuario", error);
        return res.status(500).json({error: error.message})
    }
}

module.exports = { 
    createUser,
    updateUser,
    deleteUser
 };
const bcrypt = require("bcrypt");
const { User } = require("../db");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { Mail, Password } = req.body;
    try {
       const user = await User.findOne({ where: { Mail } });
       if(!user){
        return res.status(404).json({ message: "Usuario no encontrado" });
       }
       const passwordMatch = await bcrypt.compare(Password, user.Password);

       if(!passwordMatch){
        return res.status(401).json({ error: "Contraseña incorrecta "});
       }

       const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    //    console.log('Token JWT generado:', token);
       res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });

       return res.status(200).json({ message: "Inicio de sesion exitoso", token });
    } catch (error) {
        console.log("Error al iniciar sesion", error);
        return res.status(500).json({ error: message.error });
    };
};

const logout = async(req, res) =>{
    try {
        res.clearCookie("token").status(200).json({ message: "Sesion cerrada con exito"});
    } catch (error) {
        console.log("Error al cerrar sesion:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = {
    login,
    logout
};
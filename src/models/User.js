const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("User", {
        Name:{
            type: DataTypes.STRING,
            allownull: false,
        },
        Mail:{
            type: DataTypes.STRING,
            allownull: true,
            isEmail: true
        },
        Password:{
            type: DataTypes.STRING,
            allownull: false
        },
        
    }, { timestamps: false });
};
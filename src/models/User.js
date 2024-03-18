const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("User", {
        Id:{
            type: DataTypes.INTEGER,
            allownull: false,
            primarykey: true
        },
        Name:{
            type: DataTypes.STRING,
            allownull: false,
        },
        Mail:{
            type: DataTypes.STRING,
            allownull: false,
            isEmail: true
        },
        Password:{
            type: DataTypes.STRING,
            allownull: false
        },
        
    }, { timestamps: false });
};
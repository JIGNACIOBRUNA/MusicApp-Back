const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Artist", {
        Id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SongId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps: false});
};
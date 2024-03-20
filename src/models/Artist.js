const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Artist", {
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
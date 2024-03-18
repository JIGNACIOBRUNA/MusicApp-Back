const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Playlist", {
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
        },
        ArtistId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps: false});
};
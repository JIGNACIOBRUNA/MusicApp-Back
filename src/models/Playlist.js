const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Playlist", {
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
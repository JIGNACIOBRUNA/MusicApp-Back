const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Song", {
        Name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        Duration:{
            type:DataTypes.TIME,
            allowNull: false
        },
        Album:{
            type:DataTypes.STRING
        },
        ArtistId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, { timestamps: false });
};
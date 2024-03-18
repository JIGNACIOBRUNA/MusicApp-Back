const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Song", {
        Id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
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
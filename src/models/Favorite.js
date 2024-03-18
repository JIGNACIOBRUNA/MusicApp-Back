const { DataTypes } = require ("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Favorite", {
        Id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        UserId:{
            type: DataTypes.INTEGER,
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
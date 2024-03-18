const { DataTypes } = require ("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("History", {
        Id:{
            type: DataTypes.INTEGER,
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
        PlayBackDate:{
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {timestamp: false});
};
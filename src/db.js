require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, 
} = process.env;
//recuerda modificar aca 
const modelUser = require("./models/User");
const modelSong = require("./models/Song");
const modelPlaylist = require("./models/Playlist");
const modelHistory = require("./models/History");
const modelFavorite = require("./models/Favorite");
const modelArtist = require("./models/Artist");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/MusicApp`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//invoco las funciones con sequelize para conf y def los modelos
modelUser(sequelize);
modelSong(sequelize);
modelPlaylist(sequelize);
modelHistory(sequelize);
modelFavorite(sequelize);
modelArtist(sequelize);
// Saco las propiedades dog y temperament de sequlize.models ya que ahi estan representados los modelos 
const { User, Song, Playlist, History, Favorite, Artist  } = sequelize.models;

// RECUERDA MODIFCAR Aca vendrian las relaciones
User.belongsToMany(Song, { through: "User_Song", foreignKey: "UserId" });
Song.belongsToMany(User, { through: "User_Song", foreignKey: "SongId"});
User.hasMany(Favorite);
User.hasMany(Playlist);
User.belongsTo(History);
Artist.hasMany(Song);
Song.belongsToMany(Playlist, { through: "Song_Playlist", foreignKey: "SongId"});
Playlist.belongsToMany(Song, { through: "Song_Playlist", foreignKey: "PlalistId"});


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
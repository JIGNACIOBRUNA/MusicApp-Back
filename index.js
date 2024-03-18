const server  = require("./src/app.js")
const port = process.env.PORT || 3001; 
const { conn } = require('./src/db.js');

conn.sync({force: false}).then(() => {// en esta linea estamos haciendo la sincronizacion de sequelize 
    server.listen(port, () =>{// el listen debe quedar en el index porque 
        console.log(`Server raised in port: ${port}` );
    }) // con esto ya generamos nuestro servidor con Express
})
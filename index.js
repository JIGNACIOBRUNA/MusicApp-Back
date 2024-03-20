const server  = require("./src/app.js")
const port = process.env.PORT || 3001; 
const { conn } = require('./src/db.js');

conn.sync({force: false}).then(() => {
    server.listen(port, () =>{// 
        console.log(`Server raised in port: ${port}` );
    })
})
require('dotenv').config();
const express = require('express');
const app = express();
const mongoDB = require("./db/connect");
const PORT = process.env.PORT || 3000;
const pagehandle = require('./routes/pages-routes');
const crudHandle = require('./routes/db-crud');
const notFound = require("./middlewares/not-found")
const handleError = require("./middlewares/handle-err")

app.use([express.json(),express.static("views")]); //middlewares

//placement of middlewares ,in code , are important 
app.use('/',pagehandle);
app.use('/api/v1/db', crudHandle);
app.use(handleError); //will handle error passed by above routes
app.use(notFound);

const start = async () => {
    try {
        await mongoDB(process.env.MONGO_URI)
        app.listen(PORT);
    } catch (error) {
        console.log(error);
    }
}
start()


const express = require("express");
const cors = require("cors");
const pelRoute = require ("./routes/pelatihanRoutes.js")

const app = express();

app.use(cors())
app.use(express.json())

const db = require ("./models")
db.schema.sync();

app.use(pelRoute)

app.listen(5000,()=>{
    console.log(`server berjalan....5000`);
})
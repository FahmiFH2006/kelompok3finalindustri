const express = require ("express");
const cors = require("cors");
const cookieParser = require ("cookie-parser")
const dotenv = require ("dotenv")
const pelRoute = require ("./routes/pelatihanRoutes.js")
const UserRoute = require ("./routes/userRoute.js")
const {verifyToken} = require("./middleWare/VerifyToken.js")
dotenv.config();
const app = express();

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json())

const db = require ("./models")
db.schema.sync();

app.use(cookieParser())
app.use(pelRoute)
app.use(UserRoute)
app.use(verifyToken)

app.listen(5000,()=>{
    console.log(`server berjalan....5000`);
})
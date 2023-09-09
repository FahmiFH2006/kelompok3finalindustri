const express = require ("express")
const router = express.Router();
const {getUser,Register,Login,Logout} = require("../controllers/users.js")
const{verifyToken} = require ("../middleWare/VerifyToken.js")
const {refreshToken} = require ("../controllers/refreshToken.js")

router.get('/Users',verifyToken,getUser)
router.post('/regist',Register)
router.post('/login',Login)
router.get('/token',refreshToken)
router.delete('/logout',Logout)

module.exports = router;

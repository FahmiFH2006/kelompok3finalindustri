const express = require ("express");
const router = express.Router();
const {getPel,createPel,updatePel,delPel} = require("../controllers/pelatihanController.js")

router.get('/getPel', getPel)
router.post('/pelatihan', createPel)
router.patch('/pelatihan/:id', updatePel)
router.delete('/pelatihan/:id', delPel)

module.exports = router;
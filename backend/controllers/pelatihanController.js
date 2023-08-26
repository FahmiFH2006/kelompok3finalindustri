const db = require ("../models/index.js")
const pelatihan = db.pelatihan;

const getPel = async (req,res) =>{
    try {
        const response = await pelatihan.findAll();
        res.status(200).json({msg:"success get data", response})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const createPel = async (req,res) => {
    try {
        const{image,url,judul,harga,deskripsi,watching,dibuat_oleh,untuk} = req.body
        await pelatihan.create({
            image,
            url,
            judul,
            harga,
            deskripsi,
            watching,
            dibuat_oleh,
            untuk,
        })
        res.status(200).json({msg:"data tercipta"});
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const updatePel = async (req,res) => {
    try {
        const idPel = req.params.id;
        const{image,url,judul,harga,deskripsi,watching,dibuat_oleh,untuk} = req.body
        const updateId = await pelatihan.findOne({where:{id:idPel}});
        if (!updateId) {
            res.status(404).json({msg:"tidak ditemukan"});

        }
        await pelatihan.update({
            image: image,
            url: url,
            judul: judul,
            harga: harga,
            deskripsi: deskripsi,
            watching: watching,
            dibuat_oleh: dibuat_oleh,
            untuk: untuk,
        },{where:{id:idPel}})
        res.status(200).json({msg:"data terupdate cuy"})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const delPel = async (req,res) => {
    try {
        const idPel = req.params.id;
        const{image,url,judul,harga,deskripsi,watching,dibuat_oleh,untuk} = req.body
        const updateId = await pelatihan.findOne({where:{id:idPel}});
        if (!updateId) {
            res.status(404).json({msg:"tidak ditemukan"});

        }
        await pelatihan.destroy({
            where :{id:idPel}
        });
        res.status(200).json({msg:"data terhapus cuy"})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports = {getPel,createPel,updatePel,delPel};
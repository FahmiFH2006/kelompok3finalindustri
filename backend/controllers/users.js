const db = require ("../models/index.js")
const users = db.users;
const bcrypt = require ("bcrypt")
const jwt = require ("jsonwebtoken")

const getUser = async (req,res) => {
    try {
        const response = await users.findAll({
            attributes:['id','name','email']
        });
        res.status(200).json({msg:"success get data", response})

    } catch (error) {
        console.log(error);
    }
};

const Register = async (req,res) => {
    const {name,email,no_telp,ttl,negara,domisili,password,confPassword} = req.body;
    if (password !== confPassword) {
        res.status(400).json({msg:"password tidak sama"}); 
    };
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await users.create({
            name : name,
            email : email,
            no_telp : no_telp,
            ttl : ttl,
            negara : negara,
            domisili : domisili,
            password : hashPassword
        });
        res.status(200).json({msg:"register berhasil"})
    } catch (error) {
        console.log(error);
    }
}

const Login = async (req,res) => {
    try {
        const user = await users.findAll({
            where : {
                email : req.body.email
            }
        });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) {
        res.status(400).json({msg:"password salah"});
    }
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId,name,email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:'20s'
        });
        const refreshToken = jwt.sign({userId,name,email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:'1d'
        });
        await users.update({refresh_token:refreshToken},{
            where:{
                id: userId
            }
        });
    res.cookie('refreshToken', refreshToken,{
        httpOnly : true,
        maxAge: 24 * 60 * 60 * 1000
    });
    res.json({accessToken})
    } catch (error) {
        res.status(404).json({msg:"user tidak ditemukan"})
    }
}

const Logout = async (req,res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await users.findAll({
        where:{
            refresh_token: refreshToken
        }
    })
    if(!user[0])return res.sendStatus(204);
    const userId = user[0].id;
    await users.update({refresh_token: null},{
        where :{
            id: userId
        }
    });
    res.clearCookie('refreshToken')
    return res.sendStatus(200)
}

module.exports = {getUser,Register,Login,Logout}
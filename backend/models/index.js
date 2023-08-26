const dbConfig = require("../config/database.js")
const Sequelize = require("sequelize")

const schema = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect
    }
)

const db = {};
db.Sequelize = Sequelize;
db.schema = schema;

db.pelatihan = require("./pelatihanModel.js") (schema,Sequelize)

module.exports = db;
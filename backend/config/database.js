module.exports={
    HOST : process.env.DB_HOST || "127.0.0.1",
    USER : process.env.DB_USER || "root",
    PASSWORD : process.env.DB_PASS ||"",
    DB : process.env.DB_DATABASE || "kelompok3",
    dialect : process.env.DB_USER || "mysql"
};

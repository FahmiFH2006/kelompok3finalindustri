module.exports = (sequalize, DataTypes) => {
    const Users = sequalize.define(
      "users",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,

        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        no_telp: {
          type: DataTypes.STRING,
        },
        ttl: {
          type: DataTypes.STRING,
        },
        negara: {
          type: DataTypes.STRING,
        },
        domisili: {
          type: DataTypes.STRING,
        },
        refresh_token: {
          type: DataTypes.TEXT,
        },
        
      },
      {
        freezeTableName : true
        // sequalize,
        // tableName: "pelatihan",
        // timestamps: true,
        // indexes: [
        //   {
        //     pel: "PRIMARY",
        //     unique: true,
        //     using: "BTREE",
        //     fields: [{ name: "id" }],
        //   },
        // ],
      }
    );
    return Users;
  };
module.exports = (sequalize, DataTypes) => {
    const Pelatihan = sequalize.define(
      "pelatihan",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,

        },
        url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        judul: {
          autoIncrement: false,
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: false,
        },
        harga: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        deskripsi: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        watching: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        dibuat_oleh: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        untuk: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequalize,
        tableName: "pelatihan",
        timestamps: true,
        indexes: [
          {
            pel: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
    return Pelatihan;
  };
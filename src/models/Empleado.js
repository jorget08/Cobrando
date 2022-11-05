const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('empleado', {
    codigo:{
      type: DataTypes.BIGINT,
      require: true,
      primaryKey: true,
      allowNull: false
    },
    nit: {
      type:DataTypes.STRING,
      require: true
    },
    nombre:{
      type:DataTypes.STRING,
      require: true
    },
    apellido:{
      type:DataTypes.STRING,
      require: true
    },
    apellido2:{
      type:DataTypes.STRING
    }
    
  });
};

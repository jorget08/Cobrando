const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('departamento', {
    codigo:{
      type: DataTypes.BIGINT,
      require: true,
      primaryKey: true,
      allowNull: false
    },
    nombre:{
      type:DataTypes.STRING,
      require: true
    },
    presupuesto:{
      type:DataTypes.FLOAT,
      require: true
    },
    
  });
};

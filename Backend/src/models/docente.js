/*
{
    id: 1,
    nombreCompleto: "Juan Lopez",
    profesion: "Mg. Ingeniería de Sistemas",
    imagen: "../../../../../public/images/image1.png",
    dia: "01/24/2023",
    horarioInicio: "08:00 am",
    curso: "Programación Web",
    score: 0
  }
*/
import { DATE, DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Docente = sequelize.define('docentes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreCompleto: {
        type: DataTypes.STRING
    },
    profesion: {
        type: DataTypes.STRING
    },
    imagen:{
        type: DataTypes.STRING
    },
    dia:{
        type: DataTypes.DATE
    },
    horarioInicio:{
        type: DataTypes.STRING
    },
    curso:{
        type: DataTypes.STRING
    },
    score:{
        type: DataTypes.INTEGER
    }

})

export default Docente
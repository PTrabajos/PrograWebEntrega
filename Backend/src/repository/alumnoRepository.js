import Alumno from '../models/alumno.js'

const findAll = async () => {
    try {
        const result = await Curso.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (alumno) => {
    try {

        const newAlumno = await Alumno.create(alumno);

        return newAlumno;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Alumno.findOne({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (alumno) => {
    try {
        const foundAlumno =  await Alumno.findOne({
            where: {
                id: alumno.id
            }
        })

        foundAlumno.set(alumno)

        foundAlumno.save()

        return foundAlumno;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Alumno.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const AlumnoRepository = { findAll, create, findOne,update, remove };

export default AlumnoRepository; 

import AlumnoRepository from "../repository/alumnoRepository.js";

const findAll = async (req, res) => {
    const result = await AlumnoRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await AlumnoRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await AlumnoRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await AlumnoRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await AlumnoRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const AlumnoController = { findAll, create, findOne, update, remove }

export default AlumnoController;
import NotesModel from '../model/notesModel.js';

export const getAll = async (req, res) => {
    try {
        const data = await NotesModel.find()
    
        if(!data){
            return res.status(404).json({msg: 'no encontrado'});
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

export const getId = async (req, res) => {
    try {
        const data = await NotesModel.findById(req.params.id)
    
        if(!data){
            return res.status(404).json({msg: 'no encontrado'});
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({error: error, msg: 'raroooo'})
    }
}


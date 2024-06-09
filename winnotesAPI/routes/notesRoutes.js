import { Router } from "express";
import { getAll, getId } from "../controllers/notesController.js";

const notesRouter = Router();


notesRouter.get('/', getAll);
notesRouter.get('/:id', getId);

export default notesRouter;
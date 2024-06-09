import express, { json } from 'express';
import notesRouter from './routes/notesRoutes.js';
import db from './db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();


const app = express();

db.then(() => {
    console.log('base de datos conectada');
    app.listen(process.env.port, () => {
        console.log(`conectado al puerto: ${process.env.port}`);
    })
})
app.get('/', (req, res) => {
    res.send('Esto es el inicio')
})
app.use(cors());
app.use(json());
app.use('/notes', notesRouter);




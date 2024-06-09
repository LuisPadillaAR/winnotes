import { Schema, model } from 'mongoose';

const notesSchema = new Schema(
    {
        title: {type: String, require: true },
        description: {type: String},
        date: {type: Date}
    });

    export default model('notes', notesSchema);
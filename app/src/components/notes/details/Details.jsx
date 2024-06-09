
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import NavBar from "../../navBar/NavBar";
import axios from 'axios';

export default function Details() {

    const btnAction = [
        {
            link: '/notes',
            name: 'Back'
        }
    ]

    const { id } = useParams();
    const [note, setNote] = useState([]);

    useEffect(() => {
        (
            async () => {
                await axios.get(`http://192.168.0.2:8080/notes/${id}`)
                    .then((noteData) => {
                        setNote(noteData.data)
                    }).catch((e) => console.log(e))
            }
        )()
    }, [id])

    console.log(note)

    return (
        <Container maxWidth={'md'}>
            <Grid container flexDirection={'column'} gap={1}>
                <Grid item>
                    <NavBar url={btnAction} />
                </Grid>
                <Grid item>
                    <p>{note._id}</p>
                    <p>{note.title}</p>
                    <p>{note.description}</p>
                    <p>{note.date}</p>
                </Grid>
            </Grid>
        </Container >

    );
}
import { Container, Grid, Table, TableBody, TableCell, TableHead, TableRow, Link } from '@mui/material';
import NavBar from '../navBar/NavBar';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Notes() {

    const btnAction = [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: '/create',
            name: 'Create'
        }
    ]

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.get('http://192.168.0.2:8080/notes').then((dat) => {
                setNotes(dat.data);
            }).catch(() => console.log('error de datos'))
        })()
    }, []);


    const DataTable = () => {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1em' }}>Title</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1em' }}>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        notes.map((e) => {
                            return (
                                <TableRow key={e._id}>
                                    <TableCell>
                                        <Link variant='body2' component={RouterLink} to={`/notes/${e._id}`}>{e.title}</Link>
                                    </TableCell>
                                    <TableCell>{e.date}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        );
    }

    return (
        <Container maxWidth={'md'}>
            <Grid container flexDirection={'column'} gap={1}>
                <Grid item>
                    <NavBar url={btnAction} />
                </Grid>
                <Grid item>
                    <DataTable />
                </Grid>
            </Grid>
        </Container>
    );
}
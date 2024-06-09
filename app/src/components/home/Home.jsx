import { Container, Grid, Table, TableBody, TableCell, TableHead, TableRow, Link } from '@mui/material';
import NavBar from '../navBar/NavBar';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {

    const btnAction = {
        link: '/create',
        name: 'Create'
    }

    const DataTable = () => {
        return (
            <Table>
                <TableHead>
                    <TableRow sx={{backgroundColor: 'tomato'}}>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Link variant='body2' component={RouterLink} to={`/${'Windows'}`}>Windows</Link>
                        </TableCell>
                        <TableCell>08/06/2024</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

    return (
        <Container maxWidth={'md'}>
            <Grid container flexDirection={'column'} gap={1}>
                <Grid item>
                    <NavBar url={btnAction}/>
                </Grid>
                <Grid item>
                    <DataTable />
                </Grid>
            </Grid>
        </Container>
    );
}
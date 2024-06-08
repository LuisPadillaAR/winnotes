import { Grid, Link, Typography} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar() {
    return ( 
        <Grid container columns={2} sx={{ backgroundColor: '#fff', padding: 1, boxShadow: 1 }}>
                <Grid item xs={6} md={2}>
                    <Typography variant='h3' component={'h1'}>WinNotes</Typography>
                </Grid>
                <Grid item md={2} padding={1}>
                    <Link variant='body1' component={RouterLink} to={'/create'}>Create</Link>
                </Grid>
            </Grid>
    );
}
import { Grid, Link, Typography} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar({ url }) {
    return ( 
        <Grid container columns={2} sx={{ backgroundColor: '#fff', padding: 1}}>
                <Grid item xs={6} md={2}>
                    <Typography variant='h3' component={'h1'}>Win
                        <Typography variant='h3' component={'span'} color={'orangered'}>Notes</Typography>
                    </Typography>
                </Grid>
                <Grid item md={2} padding={1}>
                    <Grid container flexDirection={'row'} gap={1}>
                        {
                        url.map((btn) => {
                            return (
                            <Link key={btn.name} variant='body1' component={RouterLink} to={btn.link}>{btn.name}</Link>
                        );
                    })
                    } 
                    </Grid>
                    
                </Grid>
            </Grid>
    );
}
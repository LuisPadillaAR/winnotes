import { Container, Grid, TextField, Typography, Link } from "@mui/material";
import NavBar from "../navBar/NavBar";
import { Link as RouterLink } from 'react-router-dom';

export default function Create() {

    const btnAction = [{
        link: '/notes',
        name: 'Back'
    }];

    const dateToday = new Date();
    const date = `${dateToday.getDate()}/${dateToday.getMonth()+1}/${dateToday.getFullYear()}`
    const NewForm = () => {
        return (
            <Container maxWidth='xs' sx={{p: 2, borderRadius: 2}}>
                <Grid container flexDirection={'column'} gap={1} alignContent={'center'}>
                    <Grid item mt={1} maxWidth={'none'} width={'inherit'}>
                        <Typography variant="h4" color={'GrayText'} fontWeight={'bold'}>New Note</Typography>
                    </Grid>
                    <Grid item mt={2} maxWidth={'none'} width={'inherit'}>
                        <TextField variant='outlined' label='Title' sx={{width: 'inherit'}}/>
                    </Grid>
                    <Grid item mt={2} maxWidth={'none'} width={'inherit'}>
                        <TextField variant='outlined' label='Description' sx={{width: 'inherit'}} multiline rows={5}/>
                    </Grid>
                    <Grid item>
                        <Grid container flexDirection={'row'} justifyContent={'space-between'}>
                            <Grid item>
                                <Typography color={'GrayText'}>Date: {date}</Typography>
                            </Grid>
                            <Grid item>
                                <Link variant='button' component={RouterLink} to={'/notes'}>Save</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }

    return (
        <Container maxWidth='md'>
            <Grid container flexDirection={'column'} gap={1}>
                <Grid item>
                    <NavBar url={btnAction}/>
                </Grid>
                <Grid item>
                    <NewForm />
                </Grid>
            </Grid>
        </Container>
        
    );
}
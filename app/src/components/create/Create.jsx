import { Container, Grid } from "@mui/material";
import NavBar from "../navBar/NavBar";

export default function Create() {

    const btnAction = {
        link: '/',
        name: 'Back'
    }

    return (
        <Container maxWidth='md'>
            <Grid columns={2} flexDirection={'column'}>
                <Grid item md={2}>
                    <NavBar url={btnAction}/>
                </Grid>
            </Grid>
        </Container>
        
    );
}
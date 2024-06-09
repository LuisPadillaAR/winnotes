import { Container, Grid, Typography, Link } from "@mui/material";
import NavBar from "../navBar/NavBar";



export default function Home() {

    const btnAction = [{
        link: '/notes',
        name: 'Notes'
    }]

    return (
        <Container maxWidth={'md'}>
            <Grid container flexDirection={'column'} gap={1}>
                <Grid item>
                    <NavBar url={btnAction} />
                </Grid>
                <Grid item>
                    <Grid container flexDirection={'column'} gap={2}>
                        <Grid item>
                            <Container sx={{boxShadow: 4, padding: 2, borderRadius: 2}}>
                                <Typography variant="h5" component={'p'}>Esto es una aplicación para crear notas. Hecha con javascript, utilizando la biblioteca de React. Está conectada a una base de datos en la nube, por tanto hago uso de API REST para enviar y recibir datos. La base de datos que uso es MongoDB porque usa json y se adapta a este mini proyecto. :D</Typography>
                            </Container>
                        </Grid>
                        <Grid item>
                            <Container sx={{boxShadow: 4, padding: 2, borderRadius: 2}}>
                                <Typography variant="h5" component={'p'}>El repositorio de este proyecto se encuentra aquí: <Link variant="h5" href="https://github.com/LuisPadillaAR/winnotes.git">https://github.com/LuisPadillaAR/winnotes.git</Link>
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
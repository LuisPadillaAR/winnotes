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
                            <Container sx={{boxShadow: 4, padding: 2, borderRadius: 2, color: '#464646'}}>
                                <Typography variant="h5" component={'p'}>Esto es una aplicación para crear notas. Hecha con javascript, utilizando la biblioteca de React. Está conectada a una base de datos en la nube, por tanto hago uso de API REST para enviar y recibir datos. La base de datos que uso es MongoDB porque usa json y se adapta a este mini proyecto. :D</Typography>
                            </Container>
                        </Grid>
                        <Grid item>
                            <Container sx={{boxShadow: 4, padding: 2, borderRadius: 2, color: '#464646'}}>
                                <Typography variant="h5" component={'p'}>El repositorio de este proyecto se encuentra aquí: <Link variant="h5" href="https://github.com/LuisPadillaAR/winnotes.git">https://github.com/LuisPadillaAR/winnotes.git</Link>
                                </Typography>
                            </Container>
                        </Grid>
                        <Grid item>
                            <Container sx={{boxShadow: 4, padding: 2, borderRadius: 2, color: '#464646', mb: 2}}>
                                <Typography variant="h5" component={'p'}>Para el que desea probar este mini proyecto debe tomar en cuenta estos pasos:
                                <br/>
                                - debes clonar primero el repositorio.
                                <br />
                                - debes instalar las dependencias con | npm install |.
                                <br />
                                - tomar en cuenta que las ip cambian por lo tanto debes cambiar la url del local host y los puertos (de la app y la API). Es así porque se trabaja en local.
                                <br />
                                - Todo este texto es para relleno  
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
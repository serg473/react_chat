import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

const Login = () => {
    return (
        <Container>
            <Grid sx={{justifyContent: 'center', alignItems: 'center'}} container
                  style={{height: window.innerHeight - 50}}>
                <Grid style={{width: 400, background: 'lightgray'}} container
                      sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Box p={5}>
                        <Button variant={'outlined'}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
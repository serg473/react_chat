import React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const Navbar = () => {
    const user = false
    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant={"dense"} sx={{justifyContent: 'flex-end'}}>
                <Grid>
                    {user ?
                        <Button variant={'outlined','gray'}>Выйти</Button>
                        :
                        <NavLink  to={LOGIN_ROUTE}>
                            <Button variant={'outlined','gray'}>Логин</Button>
                        </NavLink>
                    }

                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
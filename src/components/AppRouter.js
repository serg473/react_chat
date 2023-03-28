import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {privateRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const user = false
    return user ?
        (
            <div>
                <Routes>
                    {privateRoutes.map(({path, Component}) =>
                        <Route path={path} element={Component}/>
                    )}

                </Routes>
                <Navigate to={CHAT_ROUTE}/>
            </div>
        )
        :
        (
            <div>
                <Routes>
                    {publicRoutes.map(({path, Component}) =>
                        <Route path={path} element={Component}/>
                    )}
                </Routes>
                <Navigate to={LOGIN_ROUTE}/>
            </div>

        )
};

export default AppRouter;
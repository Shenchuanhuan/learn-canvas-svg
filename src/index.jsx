import React from 'react';
import {
    RouterProvider,
    createBrowserRouter,
    Outlet,
    NavLink,
} from 'react-router-dom';

import CanvasLayer from './canvas';

const Main = () => (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/canvas" className="nav-link">Canvas</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: 'canvas',
                element: <CanvasLayer />,
            }
        ]
    },
]);



const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
};

export default App;

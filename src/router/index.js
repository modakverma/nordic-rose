import React from 'react';
import Home from "../pages/Home.page";
import About from '../pages/About.page';
import Links from '../pages/Links.page';
import Projects from '../pages/Projects.page';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import DashboardLayout from '../Layouts/DashboardLayout';
import Article from '../pages/Article.page';

const PagesRouter = () => {
    const routes = [
        {
            path: "/",
            component: <Home />,
        },
        {
            path: "/about",
            component: <About />,
        },
        {
            path: "/links",
            component: <Links />,
        },
        {
            path: "/projects",
            component: <Projects />,
        },
        {
            path: "/blog/:blogId",
            component: <Article />,
        },
    ]
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={<DashboardLayout>{route.component}</DashboardLayout>} />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default PagesRouter;

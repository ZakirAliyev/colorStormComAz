import MainPage from "../pages/MainPage.jsx";
import Home from "../pages/Home/index.jsx";
import Details from "../pages/Details/index.jsx";
import PortfolioPage from "../pages/PortfolioPage/index.jsx";
import Products from "../pages/Products/index.jsx";
import About from "../pages/About/index.jsx";
import Contact from "../pages/Contact/index.jsx";
import AdminPanel from "../pages/AdminPanel/index.jsx";
import AdminLogin from "../pages/AdminLogin/index.jsx";
import Zakir from "../pages/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/events/:id',
                element: <Details/>
            },
            {
                path: '/portfolio',
                element: <PortfolioPage/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/cp',
                element: <AdminLogin/>
            },
            {
                path: '/cp/dashboard/products',
                element: <AdminPanel/>
            },
            {
                path: '/cp/dashboard/services',
                element: <AdminPanel/>
            },
            {
                path: '/cp/dashboard/brands',
                element: <AdminPanel/>
            },
            {
                path: '/cp/dashboard/categories',
                element: <AdminPanel/>
            },
            {
                path: '/cp/dashboard/banners',
                element: <AdminPanel/>
            },
            {
                path: '/cp/dashboard/orders',
                element: <AdminPanel/>
            },
        ]
    }
]
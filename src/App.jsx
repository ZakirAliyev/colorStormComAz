import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ROUTES} from "./routes/ROUTES.jsx"
import {HelmetProvider} from "react-helmet-async";
import Cookies from "js-cookie";

const routes = createBrowserRouter(ROUTES);

function App() {

    const token = Cookies.get("colorStormToken");

    if (!token) {
        Cookies.set("colorStormToken", "null");
    }

    const role = Cookies.get("colorStormRole");

    if (!role) {
        Cookies.set("colorStormRole", "null");
    }

    return (
        <HelmetProvider>
            <RouterProvider router={routes}/>
        </HelmetProvider>
    )
}

export default App

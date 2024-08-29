import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { lazy, Suspense } from 'react';

// Lazy load your Countries component (assuming this is the component you want to load lazily)
const Countries = lazy(() => import("./Countries.jsx"));

export default function Layout() {
    return(
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
            
    );
}
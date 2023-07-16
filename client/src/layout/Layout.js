import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Suspense } from "react";
import Loader from "../components/Loader";
import "./Layout.scss"
import Breadscrumbs from "../components/Breadscrumbs";

export default function Layout() {

    return (
        <>
            <ScrollRestoration />
            <Header />
            <main className="layout" >
                <Suspense fallback={<Loader />}>
                    <Breadscrumbs />
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}
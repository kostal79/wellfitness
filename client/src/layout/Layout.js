import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Suspense } from "react";
import Loader from "../components/Loader";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="layout">
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}
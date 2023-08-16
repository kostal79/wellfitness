import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Suspense, useCallback } from "react";
import Loader from "../components/Loader";
import "./Layout.scss"
import Breadscrumbs from "../components/Breadscrumbs";

export default function Layout() {

    let getKey = useCallback(
        (location, matches) => {
            let match = matches.find((m) => m.handle?.scrollMode);
            if (match?.handle?.scrollMode === 'pathname') {
                return location.pathname;
            }
            return location.key;
        }, []);

    return (
        <>
            <ScrollRestoration getKey={getKey} />
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
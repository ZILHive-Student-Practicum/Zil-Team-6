import { Outlet, Link } from "react-router-dom";
import AppBar from "../components/AppBar.js";

export default function Layout() {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    )
};
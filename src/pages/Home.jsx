import React from "react";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar";
import MainPage from "../components/MainPage";

export default function Home() {
    return (
        <div>
            {/* <Form registered={userIsRegistered} /> */}
            <Navbar />
            <Sidebar />
            <MainPage />
        </div>
    );
}

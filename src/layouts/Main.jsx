import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>           
            <Outlet></Outlet>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Main;
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Header/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {

    const {user, logoutUser} = useContext(AuthContext)

    const handleSignOut = () =>{
        logoutUser()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/service'>Services</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {
        
        user?.email ? <>
        <li><NavLink to='/my'>My Booking</NavLink></li>
        <li><button onClick={handleSignOut}>Log out</button></li>
        </> :
        <li><NavLink to='/login'>Login</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg lg:px-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline text-[#FF3811]">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;
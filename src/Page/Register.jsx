import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 border p-2 bg-base-100 w-1/2">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-lg text-center sm:px-6 mb-5 dark:text-gray-600">Already have an account ? <Link to='/login'><span className="text-purple-800">Login</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
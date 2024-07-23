import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
                <h1 className="text-3xl font-semibold text-center text-slate-700">
                    Login to
                    <span className="text-blue-700 "> Chat Application</span>
                </h1>

                <form action="">
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">E-mail</span>
                        </label>
                        <input type="email" 
                            placeholder="Enter your e-mail" 
                            className="w-full input input-bordered h-12"/>
                    </div>

                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" 
                            placeholder="Enter password" 
                            className="w-full input input-bordered h-12"/>
                    </div>

                    <Link 
                        to={"/signup"}
                        className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className="btn btn-block btn-sm bg-blue-700 text-white font-bold border-0 h-10">
                         Login
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
     );
}
 
export default Login;
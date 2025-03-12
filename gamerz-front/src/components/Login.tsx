import { Link } from "react-router-dom"

function Login() {

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <fieldset className="fieldset w-md bg-base-200 border border-base-300 p-4 rounded-box">
                    <legend className="fieldset-legend text-2xl">Login</legend>

                    <label className="fieldset-label text-base">Email</label>
                    <input type="email" className="input w-md" placeholder="Email" />

                    <label className="fieldset-label text-base">Password</label>
                    <input type="password" className="input w-md" placeholder="Password" />

                    <button className="btn btn-soft btn-primary text-base mt-4">Login</button>
                </fieldset>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member? 
                    <Link to="/register" className="font-semibold text-primary hover:text-indigo-300 hover:transition"> Register here! </Link>
                </p>
            </div>

        </>
    )
}

export default Login
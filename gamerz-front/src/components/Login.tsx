import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import register from "./Register.tsx";

function Login() {

    const { handleSubmit, formState: { errors }} = useForm()

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <form className="fieldset w-md bg-base-200 border border-base-300 p-4 rounded-box" onSubmit={handleSubmit()}>
                    <legend className="fieldset-legend text-2xl">Login</legend>

                    <label className="fieldset-label text-base">Email</label>
                    <input  {...register('email', {required : true, message: "l'email est obligatoire"})} type="email" className="input w-md" placeholder="Email" />
                    {errors.email && errors.email.type === "required" &&
                        <div className="text-error text-xs font-extralight italic"> {errors.email.message} </div>}

                    <label className="fieldset-label text-base">Password</label>
                    <input {...register('password', {required: true})} type="password" className="input w-md" placeholder="Password" />
                    {errors.password &&
                        <div className="text-error text-xs font-extralight italic"> {errors.password.message} </div>}

                    <button className="btn btn-soft btn-primary text-base mt-4">Login</button>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member? 
                    <Link to="/register" className="font-semibold text-primary hover:text-indigo-300 hover:transition"> Register here! </Link>
                </p>
            </div>

        </>
    )
}

export default Login
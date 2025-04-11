import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { login } from "../services/userService"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type FormData = z.infer<typeof loginSchema>;
function Login() {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, isDirty, isValid },
    } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            console.log(isSubmitting);
            const result = await login(data);
            console.log("Login success:", result);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.message)
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <form className="fieldset flex flex-col items-center w-lg bg-base-200 border border-base-300 p-4 rounded-box" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <legend className="fieldset-legend text-2xl">Login</legend>

                    <label className="fieldset-label text-base ml-9 text-left w-full">Email</label>
                    <input  {...register('email')} type="email" className="input w-md" placeholder="Email" />
                    {errors?.email &&
                        <div className="text-error text-xs font-extralight italic"> {errors?.email?.message} </div>}

                    <label className="fieldset-label text-base ml-9 text-left w-full">Password</label>
                    <input {...register('password')} type="password" className="input w-md" placeholder="Password" />
                    {errors?.password &&
                        <div className="text-error text-xs font-extralight italic"> {errors?.password?.message} </div>}
                    <button className="btn btn-soft btn-primary text-base mt-4" type="submit"
                        disabled={!isDirty || !isValid || isSubmitting}>Login</button>
                    {isSubmitting && (
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                className="inline w-6 h-6 mr-2 text-white animate-spin fill-rose-600 opacity-100"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* SVG for Spinner Animation */}
                            </svg>
                        </div>)}
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
import { Link } from "react-router-dom"
import { SubmitHandler, useForm } from 'react-hook-form'
import { User } from "../models/UserModel"


function Register() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<User>();

    const onSubmit: SubmitHandler<User> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            throw new Error()
            console.log(data)
        } catch (error) {
            setError("email", {
                message: "This email is already taken"
            })
            console.log(error)
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">



                <form className="fieldset flex flex-col items-center w-lg bg-base-200 border border-base-300 p-4 rounded-box" onSubmit={handleSubmit(onSubmit)}>
                    <legend className="fieldset-legend text-2xl">Register</legend>

                    <label className="fieldset-label text-base ml-9 text-left w-full">Email</label>

                    {errors.email && <div className="text-error text-xs font-extralight italic"> {errors.email.message} </div>}

                    <input {...register("email", {
                        required: "Email is required",
                        validate: (value) => {
                            if (!value.includes("@")) {
                                return "This is not an email"
                            }
                            return true;
                        },
                    })} type="email" className="input w-md" />



                    <label className="fieldset-label text-base ml-9 text-left w-full">Password</label>

                    {errors.password && <div className="text-error text-xs font-extralight italic"> {errors.password.message} </div>}

                    <input {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        },
                        validate: (value) => {
                            const hasUpperCase = /[A-Z]/.test(value);
                            const hasLowerCase = /[a-z]/.test(value);
                            const hasNumber = /[0-9]/.test(value);
                            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
                      
                            if (!hasUpperCase) return "Password must contain at least one uppercase letter";
                            if (!hasLowerCase) return "Password must contain at least one lowercase letter";
                            if (!hasNumber) return "Password must contain at least one number";
                            if (!hasSpecialChar) return "Password must contain at least one special character";
                      
                            return true;
                          },
                    })} type="password" className="input w-md" />



                    <label className="fieldset-label text-base ml-9 text-left w-full">Pseudo</label>

                    {errors.pseudo && <div className="text-error text-xs font-extralight italic"> {errors.pseudo.message} </div>}

                    <input {...register("pseudo", {
                        required: "How should we call you ?"
                    })} type="text" className="input w-md" />



                    <label className="fieldset-label text-base ml-9 text-left w-full">Tell us why you want to join :</label>

                    {errors.candidacyText && <div className="text-error text-xs font-extralight italic"> {errors.candidacyText.message} </div>}

                    <textarea {...register("candidacyText", {
                        required: "We need to know your motivation to join"
                    })} className="textarea w-md" />



                    <button disabled={isSubmitting} type="submit" className="btn btn-soft btn-primary text-base mt-4">
                        {isSubmitting ? "Let him cook..." : "Submit"}
                    </button>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already have an account ?
                    <Link to="/login" className="font-semibold text-primary hover:text-indigo-300 hover:transition"> Click here!</Link>
                </p>
            </div>

        </>
    )
}

export default Register
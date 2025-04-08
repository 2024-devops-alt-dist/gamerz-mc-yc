import { Link } from "react-router-dom"
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegister } from "../services/userService";

const schema = z.object({
    email: z.string().email(),
    pseudo: z.string().min(1, "How should we call you ?"), 
    motivation: z.string().min(4, "We would like to know more ... "),
    password: z.string()
      .min(8, "Password must have at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
  });

type FormFields = z.infer<typeof schema>

function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await userRegister(data)
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                <form className="fieldset flex flex-col items-center w-lg bg-base-200 border border-base-300 p-4 rounded-box" onSubmit={handleSubmit(onSubmit)}>
                    <legend className="fieldset-legend text-2xl">Register</legend>

                    <label className="fieldset-label text-base ml-9 text-left w-full">Email</label>

                    {errors.email && <div className="text-error text-xs font-extralight italic"> {errors.email.message} </div>}

                    <input {...register("email")} type="email" className="input w-md" />

                    <label className="fieldset-label text-base ml-9 text-left w-full">Password</label>

                    {errors.password && <div className="text-error text-xs font-extralight italic"> {errors.password.message} </div>}

                    <input {...register("password")} type="password" className="input w-md" />

                    <label className="fieldset-label text-base ml-9 text-left w-full">Pseudo</label>

                    {errors.pseudo && <div className="text-error text-xs font-extralight italic"> {errors.pseudo.message} </div>}

                    <input {...register("pseudo")} type="text" className="input w-md" />

                    <label className="fieldset-label text-base ml-9 text-left w-full">Tell us why you want to join :</label>

                    {errors.motivation && <div className="text-error text-xs font-extralight italic"> {errors.motivation.message} </div>}

                    <textarea {...register("motivation")} className="textarea w-md" />

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
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Signup = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="enter name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 digits</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign up" />
                        </div>
                    </form>
                    <p className='mx-auto mb-3'><small>Have an account?<Link className='text-red-800' to="/login">Sign in here</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
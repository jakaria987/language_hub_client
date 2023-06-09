import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200 pt-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-400">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-3xl font-bold text-center">Please SignUp</h1>
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="name"
                name="name"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-700">please enter name</span>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-700">please enter email</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-700">please enter password</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-700">
                  password is less than 6 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-700">
                  password must have one capital letter & one special character,
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-outline font-bold"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center text-xl text-gray-600 pb-4">
            <small>
              Already have an account
              <Link className="text-black" to="/login">
                {" "}
                log in here
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

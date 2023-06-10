import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const savedUser = {name : data.name, email: data.email}
          fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: {
              "content-type" : "application/json"
            },
            body: JSON.stringify(savedUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
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
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="name"
                {...register("photoURL")}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {/* {errors.photoURL && (
                <span className="text-red-700">please enter name</span>
              )} */}
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Confirm Password</span>
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
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

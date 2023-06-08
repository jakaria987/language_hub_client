

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

  return (
      <div className="hero min-h-screen bg-base-200 pt-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-400">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center">Please Login</h1>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-outline font-bold" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;

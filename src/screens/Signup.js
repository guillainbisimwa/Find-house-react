const Signup = () => (
  <>
  <h3 className="text-2xl font-medium leading-none mt-3">Sign up</h3>
  <div className="font-normal">Hello there! Sign UP and start managing your system</div>
  <input id="regular-form-2" type="text" className="form-control form-control-rounded" placeholder="Enter your name"></input>
  <input id="regular-form-2" type="email" className="form-control form-control-rounded" placeholder="Enter your email"></input>
  <input id="regular-form-2" type="password" className="form-control form-control-rounded border-theme-12" placeholder="Enter your password"></input>
  <input id="regular-form-2" type="password" className="form-control form-control-rounded border-theme-12" placeholder="Confirm your password"></input>
  <button className="btn btn-rounded-warning w-24 mr-1 mb-2"> Sign up </button>
  <div className="font-normal">Sign in here</div>
</>
);

export default Signup;

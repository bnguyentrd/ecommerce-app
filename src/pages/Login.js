import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
        <Meta title={"Login"} />
        <BreadCrumb title="Login" />
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Login</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        className="form-control" 
                                    />
                                </div>
                                <div className="mt-1">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password" 
                                        className="form-control" 
                                    />
                                </div>
                                <div>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                    <div className="d-flex justify-content-center mt-3 gap-15 align-items-center">
                                        <button className="button border-0" type="submit">Login</button>
                                        <Link to="/signup" className="button signup">Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Login;
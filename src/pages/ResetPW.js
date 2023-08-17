import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const ResetPW = () => {
  return (
    <>
        <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Create an Account</h3>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    className="form-control" 
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    name="mobile" 
                                    placeholder="Mobile Number" 
                                    className="form-control" 
                                />
                            </div>
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
                                <div className="d-flex justify-content-center mt-3 gap-15 align-items-center">
                                      <Link to="/login">Cancel</Link>
                                    <button className="button border-0">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ResetPW;
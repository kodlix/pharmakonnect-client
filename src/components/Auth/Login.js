import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { loginUser } from '../../store/modules/auth'
import './Login.css';
import AppLogo from '../Shared/AppLogo';



const Login = () => {
    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (user) => {
        dispatch(loginUser(user));
    }
    return (
        <>

            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center no-gutters">
                    <div className="col-lg-5 col-md-8 pt-20">
                        <div className="card shadow ">
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    <Link to={'/'} className="mb-2 font-weight-bold"><AppLogo /></Link>
                                    <hr />
                                    <span className="mb-1 font-weight-bold px-2 rounded text-primary">Account Login</span>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email: <span className="text-danger pl-2">{errors.email && "Email is required"}</span></label>
                                        <input type="email" id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email address here"
                                            ref={register({ required: true })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">Password: <span className="text-danger pl-2">{errors.email && "Password is required"}</span></label>
                                        <input type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="**************"
                                            ref={register({ required: true })}
                                        />
                                    </div>
                                    <div className="d-lg-flex justify-content-between align-items-center mb-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="rememberme" />
                                            <label className="custom-control-label " htmlFor="rememberme">Remember me</label>
                                        </div>
                                        <div>
                                            <Link to="forget-password.html">Forgot your password?</Link>
                                        </div>

                                    </div>
                                    <div className="py-2">
                                        <span className="font-weight-smaller">Don’t have an account? <Link to="/register" className="ml-1">Sign up</Link></span>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="mt-4 text-center">
                                        <Link to='' className="btn-social btn-social-outline btn-facebook">
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                        <Link to='' className="btn-social btn-social-outline btn-twitter">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link to='' className="btn-social btn-social-outline btn-linkedin">
                                            <i className="fab fa-linkedin"></i>
                                        </Link>
                                        <Link to="" className="btn-social btn-social-outline btn-github">
                                            <i className="fab fa-github"></i>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
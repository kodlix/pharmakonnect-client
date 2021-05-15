import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import AppLogo from '../Shared/AppLogo';
import './Register.css'
import { registerUser } from '../../store/modules/auth'


const Register = ({ props }) => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (user) => {
        dispatch(registerUser(user));
    }
    return (
        <>
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center no-gutters">
                    <div className="col-lg-5 col-md-8 pt-20">
                        <div className="card shadow">
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    <Link to={'/'} className="mb-2 font-weight-bold"><AppLogo /></Link>
                                    <hr />
                                    <span className="font-weight-bold px-2 rounded text-primary">Account Registration</span>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email:  <span className="text-danger pl-2">{errors.email && "Email is required"}</span></label>
                                        <input type="email" id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email address here"
                                            ref={register({ required: true })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">Password: <span className="text-danger pl-2">{errors.password && "Password is required"}</span></label>
                                        <input type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="**************"
                                            ref={register({ required: true })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Select Account Type:
                                            <span className="text-danger pl-2">{errors.accountType && "Account type is required"}</span>
                                        </label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" ref={register({ required: true })} value="individual" id="individual" name="accountType" />
                                            <label className="form-check-label" htmlFor="individual" >
                                                Individual
                                        </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" ref={register({ required: true })} value="corporate" id="corporate" name="accountType" />
                                            <label className="form-check-label" htmlFor="corporate">
                                                Corporate
                                    </label>
                                        </div>
                                    </div>

                                    <div className="py-2 mt-2">
                                        <span className="font-weight-smaller">Already have an account? <Link to="/login" className="ml-1">Log in</Link></span>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Create  Account
								</button>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="mt-4 text-center">
                                        <Link to="#!" className="btn-social btn-social-outline btn-facebook">
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                        <Link to="#!" className="btn-social btn-social-outline btn-twitter">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link to="#!" className="btn-social btn-social-outline btn-linkedin">
                                            <i className="fab fa-linkedin"></i>
                                        </Link>
                                        <Link to="#!" className="btn-social btn-social-outline btn-github">
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
    )
}

export default Register;
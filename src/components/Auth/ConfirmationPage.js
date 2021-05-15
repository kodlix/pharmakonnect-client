import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { loginUser } from '../../store/modules/auth'
import './Login.css';
import AppLogo from '../Shared/AppLogo';



const ConfirmationPage = () => {
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
                                    <span className="mb-1 font-weight-bold px-2 rounded text-primary">Security Verification</span>
                                </div>
                                <section className="text-center">
                                    <div className="mb-4"> <h4 className="font-weight-bold">Enter the code that was sent to your email</h4></div>
                                    <div className="mb-2">
                                        <p>To finish your registration, please enter the verification code we gave you. It might take a few minute to receive your code.</p>
                                    </div>
                                </section>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Verification code: <span className="text-danger pl-2">{errors.code && "Enter verification code"}</span></label>
                                        <input type="text" id="code"
                                            className="form-control"
                                            name="code"
                                            placeholder="Enter verification code"
                                            ref={register({ required: true })}
                                        />
                                    </div>


                                    <div className="py-2">
                                        <span className="font-weight-smaller">Don’t receive any code? <Link to="/register" className="ml-1"><strong>Resend Code</strong></Link></span>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
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

export default ConfirmationPage;
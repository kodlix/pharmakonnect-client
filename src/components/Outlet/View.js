import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loadOutletByCompany } from '../../store/modules/outlet';
import { loadCountry, loadStates, loadLga } from '../../store/modules/location';
import PageHeader from '../Shared/PageHeader';
import agent from '../../agent';
import "react-datepicker/dist/react-datepicker.css";
import './Outlet.css';
import { Link } from 'react-router-dom';

const View = (props) => {

    const dispatch = useDispatch();
    const outlet = useSelector(state => state.outlet.outlet);
    const outletId = props.match.params.id;
    const currentUser = agent.Auth.current();

    const { setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    
    useEffect(() => {
        dispatch(loadCountry());
        dispatch(loadOutletByCompany(outletId));
    }, [dispatch]);

    useEffect(() => {
        if (outlet) {
            Object.keys(outlet).forEach(key => {
                setValue(key, outlet[key]);
            })
        }
        dispatch(loadStates(outlet.country));
        dispatch(loadLga(outlet.state));
    }, [outlet])

    return (
        <>
            <div className="col-lg-9 col-md-8 col-12 bbg">
                <PageHeader pageTitle={'Outlet Detail'} heading={outlet?.name}>
                    <div className="dropdown pb-2" style={{ float: "right" }}>
                        <Link to={`/outlets`} className="pl-3">
                            <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                                <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                        </Link>
                    </div>
                </PageHeader>
                <div className="shadow p-5 mt-1 mb-5 bg-white rounded">

                    <div className="basicDetails">
                            <h5 className="text-success">Basic Details</h5>
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Outlet name:</label>
                                        <span> {outlet?.name} </span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pcn" className="form-label">PCN:</label>
                                        <span> {outlet?.pcn} </span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="openingTime" className="form-label"> Opening time: </label>
                                        <span> {outlet?.openingTime} </span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="closingTime" className="form-label"> Closing time: </label>
                                        <span> {outlet?.closingTime} </span>
                                    </div>
                                </div>
                            </div>

                        <hr />

                        <div className="locationDetails">
                            <h5 className="text-success">Location Details</h5>
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address:</label>
                                        <span> {outlet?.address} </span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="country" className="form-label">Country: </label>
                                        <span> {outlet?.countryName} </span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="state" className="form-label">State: </label>
                                        <span> {outlet?.stateName} </span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="lga" className="form-label">LGA: </label>
                                        <span> {outlet?.lgaName} </span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="City" className="form-label">City: </label>
                                        <span> {outlet?.city} </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="contactDetails">
                            <h5 className="text-success">Contact Details</h5>

                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="minQualify" className="form-label">Contact person:</label>
                                        <span> {outlet?.contactPerson}</span>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="p" className="form-label">Phone number:</label>
                                        <span> {outlet?.contactPersonPhonenumber}</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="experience" className="form-label">Email:</label>
                                        <span> {outlet?.contactPersonEmail}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View;
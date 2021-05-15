import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountry, loadStates, loadLga } from '../../store/modules/location';
import { createOutlet } from '../../store/modules/outlet';
import './Outlet.css';
import PageHeader from '../Shared/PageHeader';
import { Link } from 'react-router-dom';


const Create = () => {
    const { register, handleSubmit, errors, setValue, getValues, watch, trigger } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });

    const OpeningTime = watch('openingTime');
    const ClosingTime = watch('closingTime');
    const [stateName, setStateName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [lgaName, setLgaName] = useState('');

    const dispatch = useDispatch();
    const countries = useSelector(state => state.location.countries);
    const states = useSelector(state => state.location.states);
    const lgas = useSelector(state => state.location.lgas);
    const userEmail = JSON.parse(window.localStorage.getItem('auth')).email;

    useEffect(() => {
        dispatch(loadCountry());
    }, [dispatch]);


    const handleCountryChange = (e) => {
        let index = e.nativeEvent.target.selectedIndex;        
        let countryId = e.target.value;
        setCountryName(e.nativeEvent.target[index].text)
        dispatch(loadStates(countryId));
    }

    const handleStateChange = (e) => {
        let index = e.nativeEvent.target.selectedIndex; 
        let stateId = e.target.value;
        setStateName(e.nativeEvent.target[index].text)
        dispatch(loadLga(stateId));

    }

    
    const handleLgaChange = (event) => {
        let index = event.nativeEvent.target.selectedIndex;        
        setLgaName(event.nativeEvent.target[index].text)
    }

    const onSubmit = (outlet) => {
        outlet.stateName = stateName;
        outlet.countryName = countryName;
        outlet.lgaName = lgaName;
        console.log(outlet)

        dispatch(createOutlet(outlet));
    }

    return (
        <React.Fragment>
            <div className="col-lg-9 col-md-8 col-12 bbg">
                <PageHeader pageTitle={'Create Outlet'}>
                <Link to={`/outlets`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                    </Link>
                </PageHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card mt-1">
                        <div className="card-header">
                            <h3 className="h4 text-primary mb-0">Basic Details</h3>
                        </div>
                        <div className="card-body">
                            <div id="orderColumn" className="apex-charts row">
                                {/* <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="accountID">Account ID <span className="text-danger pl-2">{errors.accountID && " * Account ID is required"}</span></label>
                                    <input type="text"
                                        id="accountID"
                                        className="form-control"
                                        placeholder="Account ID"
                                        name="accountID"
                                        default ref={register({ required: true })} />
                                </div> */}
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="name">Outlet Name <span className="text-danger pl-2">{errors.name && " * Outlet Name is required"}</span></label>
                                    <input type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Outlet Name"
                                        name="name"
                                        default ref={register({ required: true })} />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="profileaddress2">PCN <span className="text-danger pl-2">{errors.pcn && " * PCN is required"}</span></label>
                                    <input type="text"
                                        id="pcn"
                                        className="form-control"
                                        placeholder="PCN"
                                        name="pcn"
                                        default ref={register({ required: true })}
                                    />
                                </div>
                                <div className="form-group col-6 col-md-3">
                                    <label className="form-label" htmlFor="openingTime">Opening Time {errors.openingTime && <span className="text-danger pl-2">{errors.openingTime.message}</span>}</label>
                                    <input type="time"
                                        id="openingTime"
                                        className="form-control"
                                        placeholder="Opening Time"
                                        name="openingTime"
                                        //defaultValue={trigger("closingTime", "openingTime") }
                                        ref={register({
                                            required: "* Opening time is required",
                                            validate: value => !value || !ClosingTime || value <= ClosingTime || "Opening time cannot be equal to or greater than closing time"
                                        })} />
                                </div>

                                <div className="form-group col-6 col-md-3">
                                    <label className="form-label" htmlFor="closingTime">Closing Time {errors.closingTime &&<span className="text-danger pl-2">{errors.closingTime.message}</span>}
                                     </label>
                                    <input type="time"
                                        id="closingTime"
                                        className="form-control"
                                        placeholder="Closing Time"
                                        name="closingTime"
                                        //defaultValue={trigger("openingTime", "closingTime") }
                                        ref={register({
                                            required: "* Closing Time is required",
                                            validate: value => !value || !OpeningTime || value >= OpeningTime || "Closing time cannot be equal to or Less than opening time"
                                        })} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-1">
                        <div className="card-header">
                            <h3 className="h4 text-primary mb-0">Location Details</h3>
                        </div>
                        <div className="card-body">
                            <div id="orderColumn" className="apex-charts row">
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="profileaddress2">Address <span className="text-danger pl-2">
                                        {errors.address && " * Address is required"}</span></label>
                                    <input type="text"
                                        id="address"
                                        className="form-control"
                                        placeholder="Address"
                                        name="address"
                                        // default onChange={(e) => { handleCountryChange(e) }}
                                        ref={register({ required: true })}
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">Country <span className="text-danger pl-2">{errors.countryId && " * Country is required"}</span></label>
                                    <select id="countryId"
                                        className="form-control"
                                        ref={register({ required: true })}
                                        name="countryId"
                                        onChange={(e) => { handleCountryChange(e) }}
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map(country =>
                                            <option key={country.id} value={country.id}>{country.name}
                                            </option>)}
                                    </select>
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">State <span className="text-danger pl-2">{errors.stateId && " * State is required"}</span></label>
                                    <select className="form-control"
                                        // onChange={handleStateChange}
                                        id="stateId"
                                        name="stateId"
                                        ref={register({ required: true })}
                                        onChange={(e) => { handleStateChange(e) }}>
                                        <option value="">Select State</option>
                                        {states && states.length > 0 && states.map(state =>
                                            <option key={state.id} value={state.id}>{state.name}
                                            </option>)}
                                    </select>
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">LGA <span className="text-danger pl-2">{errors.lgaId && " * LGA is required"}</span></label>
                                    <select className="form-control"
                                        id="lgaId"
                                        name="lgaId"
                                        onChange={(e) => { handleLgaChange(e) }}
                                        ref={register({ required: true })}>
                                        <option value="">Select LGA</option>
                                        {lgas && lgas.length > 0 && lgas.map(lga =>
                                            <option key={lga.id} value={lga.id}>{lga.name}
                                            </option>)}
                                    </select>
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="city">City <span className="text-danger pl-2">{errors.city && " * City is required"}</span></label>
                                    <input type="text"
                                        id="city"
                                        className="form-control"
                                        placeholder="City"
                                        name="city"
                                        default ref={register({ required: true })}
                                    />
                                </div>
                                <div className="form-group col-6 col-md-3">
                                    <label className="form-label" htmlFor="longtitude">Longitude {errors.longitude && <span className="text-danger pl-2">{errors.longitude.message}</span>}</label>
                                    <input type="number"
                                        id="longitude"
                                        className="form-control"
                                        placeholder="longitude"
                                        name="longitude"
                                        ref={register({
                                            required: "* Longitude is required",
                                            validate: value => !value || value <= 180 || value <= -180 || "Longitude must be -180° to 180°"
                                        })}
                                    />
                                </div>
                                <div className="form-group col-6 col-md-3">
                                    <label className="form-label" htmlFor="latitude">Latitude {errors.latitude && <span className="text-danger pl-2">{errors.latitude.message}</span>}</label>
                                    <input type="number"
                                        id="longitude"
                                        className="form-control"
                                        placeholder="latitude"
                                        name="latitude"
                                        ref={register({
                                            required: "* Latitude is required",
                                            validate: value => !value || value <= 90 || value <= -90 || "Latitude must be -90° to 90°"
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-1">
                        <div className="card-header">
                            <h3 className="h4 text-primary mb-0">Contact Details</h3>
                        </div>
                        <div className="card-body">
                            <div id="orderColumn" className="apex-charts row">
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="contactPerson">Contact Person <span className="text-danger pl-2">{errors.contactPerson && " * First Name is required"}</span></label>
                                    <input type="text"
                                        id="contactPerson"
                                        className="form-control"
                                        placeholder="Full Name"
                                        name="contactPerson"
                                        default ref={register({ required: true })} />
                                </div>
                                {/* <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="lastName">Last Name <span className="text-danger pl-2">{errors.lastName && " * Last Name is required"}</span></label>
                                    <input type="text"
                                        id="lastName"
                                        className="form-control"
                                        placeholder="Last Name"
                                        name="lastName"
                                        default ref={register({ required: true })} />
                                </div> */}
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="contactPersonPhonenumber">Phone Number <span className="text-danger pl-2">{errors.contactPersonPhonenumber && " * Phone Number is required"}</span></label>
                                    <input type="text"
                                        id="contactPersonPhonenumber"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        name="contactPersonPhonenumber"
                                        ref={register({
                                            required: "* Phone number is required",
                                            pattern: {
                                                value: /(?:(?:(\s*\(?([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\)?\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/,
                                                message: "* Entered value does not match a valid phone number format"
                                            }
                                        })}/>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="contactPersonEmail">Email <span className="text-danger pl-2">{errors.contactPersonEmail && " * Email is required"}</span></label>
                                    <input type="email"
                                        id="contactPersonEmail"
                                        className="form-control"
                                        placeholder="Email"
                                        name="contactPersonEmail"
                                        ref={register({
                                            required: "* Email is required",
                                            pattern: {
                                                value:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "* Entered value does not match email format"
                                            }
                                        })}/>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary float-right" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Create;
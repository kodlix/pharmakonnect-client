import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { editOutlet, loadOutletByCompany } from '../../store/modules/outlet';
import { loadCountry, loadStates, loadLga } from '../../store/modules/location';
import PageHeader from '../Shared/PageHeader';
import "react-datepicker/dist/react-datepicker.css";
import './Outlet.css';
import { Link } from 'react-router-dom';

const Edit = (props) => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.location.countries);
    const outlet = useSelector(state => state.outlet.outlet);
    const states = useSelector(state => state.location.states);
    const lgas = useSelector(state => state.location.lgas);

    const [itemToEdit, setItemToEdit] = useState({});

    const outletId = props.match.params.id;
    const { register, handleSubmit, errors, setValue, watch, trigger } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const OpeningTime = watch('openingTime');
    const ClosingTime = watch('closingTime');

    useEffect(() => {
        dispatch(loadCountry());
        dispatch(loadOutletByCompany(outletId));
    }, [dispatch]);

    useEffect(() => {
        if (outlet) {
            Object.keys(outlet).forEach(key => {
                setValue(key, outlet[key]);
            })
            setItemToEdit(outlet);
            dispatch(loadStates(outlet.countryId))
            dispatch(loadLga(outlet.stateId));

        }
    }, [outlet])

    const handleCountryChange = (e) => {
        let countryId = e.target.value;
        const country = countries.find(x => x.id === parseInt(countryId))
        itemToEdit.countryId = country.id;
        itemToEdit.countryName = country.name;
        dispatch(loadStates(countryId));
    }

    const handleStateChange = (e) => {
        let stateId = e.target.value;
        const state = states.find(x => x.id === parseInt(stateId))
        itemToEdit.stateId = state.id.toString();
        itemToEdit.stateName = state.name;
        setItemToEdit(itemToEdit)

        dispatch(loadLga(stateId));
    }

    const handleLgaChange = (e) => {
        let lgaId = e.target.value;
        const lga = lgas.find(x => x.id === parseInt(lgaId))
        itemToEdit.lgaId = lga.id.toString();
        itemToEdit.lgaName = lga.name;
        setItemToEdit(itemToEdit)

        dispatch(loadLga(itemToEdit.stateId));

    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setItemToEdit({ ...itemToEdit, [name]: value ?? JSON.parse(value) });
    }

    const onSubmit = () => {
        dispatch(editOutlet(outletId, itemToEdit));
    }
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12 bbg">
                <PageHeader pageTitle={'Update Outlet'}>
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
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="name">Outlet Name <span className="text-danger pl-2">{errors.name && " * Outlet Name is required"}</span></label>
                                    <input type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Outlet Name"
                                        name="name"
                                        onChange={(e) => { handleOnChange(e) }}
                                        default ref={register({ required: true })} />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="profileaddress2">PCN <span className="text-danger pl-2">{errors.pcn && " * PCN is required"}</span></label>
                                    <input type="text"
                                        id="pcn"
                                        className="form-control"
                                        placeholder="PCN"
                                        name="pcn"
                                        onChange={(e) => { handleOnChange(e) }}
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
                                        onChange={(e) => { handleOnChange(e) }}
                                        defaultValue={trigger("closingTime", "openingTime")}
                                        ref={register({
                                            required: "* Opening time is required",
                                            validate: value => !value || !ClosingTime || value <= ClosingTime || "Opening time cannot be equal to or greater than closing time"
                                        })} />
                                </div>
                                <div className="form-group col-6 col-md-3">
                                    <label className="form-label" htmlFor="closingTime">Closing Time {errors.closingTime && <span className="text-danger pl-2">{errors.closingTime.message}</span>}
                                    </label>
                                    <input type="time"
                                        id="closingTime"
                                        className="form-control"
                                        placeholder="Closing Time"
                                        name="closingTime"
                                        onChange={(e) => { handleOnChange(e) }}
                                        defaultValue={trigger("openingTime", "closingTime")}
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
                                    <label className="form-label" htmlFor="address">Address <span className="text-danger pl-2">
                                        {errors.address && " * Address is required"}</span></label>
                                    <input type="text"
                                        id="address"
                                        className="form-control"
                                        placeholder="Address"
                                        name="address"
                                        onChange={(e) => { handleOnChange(e) }}
                                        ref={register({ required: true })}
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">Country: <span className="text-danger pl-2">{errors.country && " * Country is required"}</span></label>
                                    <select id="country"
                                        className="form-control"
                                        ref={register({ required: true })}
                                        name="country"
                                        value={itemToEdit?.countryId}
                                        onChange={(e) => { handleOnChange(e); handleCountryChange(e) }}
                                    >
                                        {countries.map(country =>
                                            <option key={country.id} value={country.id}>{country.name}
                                            </option>)}
                                    </select>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">State: <span className="text-danger pl-2">{errors.state && " * State is required"}</span></label>
                                    <select className="form-control"
                                        id="state"
                                        name="state"
                                        ref={register({ required: true })}
                                        value={itemToEdit?.stateId}
                                        onChange={(e) => { handleOnChange(e); handleStateChange(e) }}

                                    >
                                        {states && states.length > 0 && states.map(state =>
                                            <option key={state.id} value={state.id}>{state.name}
                                            </option>)}
                                    </select>
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">LGA: <span className="text-danger pl-2">{errors.lga && " * LGN is required"}</span></label>
                                    <select className="form-control"
                                        id="lga"
                                        name="lga"
                                        value={itemToEdit?.lgaId}
                                        onChange={(e) => { handleOnChange(e); handleLgaChange(e) }}
                                        ref={register({ required: true })}
                                    >
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
                                        onChange={(e) => { handleOnChange(e) }}
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
                                        onChange={(e) => { handleOnChange(e) }}
                                        default ref={register({
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
                                        onChange={(e) => { handleOnChange(e) }}
                                        default ref={register({
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
                                    <label className="form-label" htmlFor="contactPerson">Contact Person Name <span className="text-danger pl-2">{errors.contactPerson && " * First Name is required"}</span></label>
                                    <input type="text"
                                        id="contactPerson"
                                        className="form-control"
                                        placeholder="Full Name"
                                        name="contactPerson"
                                        onChange={(e) => { handleOnChange(e) }}
                                        default ref={register({ required: true })} />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="contactPersonPhonenumber">Phone Number <span className="text-danger pl-2">{errors.contactPersonPhonenumber && " * Phone Number is required"}</span></label>
                                    <input type="text"
                                        id="contactPersonPhonenumber"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        name="contactPersonPhonenumber"
                                        onChange={(e) => { handleOnChange(e) }}
                                        default ref={register({ required: true })}
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="contactPersonEmail">Email <span className="text-danger pl-2">{errors.contactPersonEmail && " * Email is required"}</span></label>
                                    <input type="email"
                                        id="contactPersonEmail"
                                        className="form-control"
                                        placeholder="Email"
                                        name="contactPersonEmail"
                                        onChange={(e) => { handleOnChange(e) }}
                                        ref={register({ required: true })}
                                    />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary float-right" type="submit">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { updateProfileIndividual, updateProfilePicture, loadProfileWithData } from '../../store/modules/account';
import { loadLga, LoadOrganizationNames, loadStates, loadCountry } from '../../store/modules/location';
import PageHeader from '../Shared/PageHeader';
import { showErrorMessage } from '../../store/modules/notification';
import Autocomplete from '../Shared/AutoComplete';


import agent, { IMAGE_URL } from '../../agent';
import moment from 'moment';
import { validFileType } from '../Shared/helpers/file';
import "react-datepicker/dist/react-datepicker.css";
import './IndividualRegistration.css';
import '../Shared/AutoComplete.css'



const IndividualRegistration = (props) => {
    const dispatch = useDispatch();
    const { handleSubmit, register, errors, watch, setValue } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const [Isdisable, setIsDisable] = useState(false);
    const [returnLgas, setReturnLgas] = useState("");
    const [itemToEdit, setItemToEdit] = useState({});
    const [company, setCompany] = useState('')
    const [organizationNameValue, setOrganizationNameValue] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState();
    const [dateError, setDateError] = useState("");


    // const dateOfBirth = watch('dateOfBirth');

    const currentUser = agent.Auth.current();
    const userEmail = currentUser ? currentUser.email : null;
    const typeOfPracticeValue = watch("typesOfPractice");

    const countries = useSelector(state => state.location.countries);
    const states = useSelector(state => state.location.states);
    const lgas = useSelector(state => state.location.lgas);
    const organizationNames = useSelector(state => state.location.organizationNames);
    const profile = useSelector(state => state.account.profile);


    let organisationList = [];
    organizationNames.forEach(organizationname => {
        organisationList.push(organizationname.organizationName);
    });

    function handleInput(newValue) {
        setOrganizationNameValue(newValue);
        setValue("organizationName", newValue, { shouldValidate: true });
    }

    useEffect(() => {
        dispatch(loadCountry());
        dispatch(LoadOrganizationNames());
        dispatch(loadProfileWithData(userEmail));
    }, [dispatch]);


    useEffect(() => {
        setItemToEdit(profile);
    }, [profile]);

    const handleCountryChange = (e) => {
        let countryId = e.target.value;
        dispatch(loadStates(countryId));
    }

    const getCompany = (selectedCompany) => {
        setCompany(selectedCompany)
    }

    const handleStateChange = (e) => {
        let stateId = e.target.value;
        dispatch(loadLga(stateId));
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setItemToEdit({ ...itemToEdit, [name]: value ?? JSON.parse(value) });
    }

    // const handleDateChange = (dob) => {
    //     const thisYear = new Date().getFullYear();
    //     const yearOfBirth = dob?.getFullYear();
    //     const age = thisYear - yearOfBirth;
    //     if (age <= 18) {
    //         setDateError("must be older than 18 years.")
    //         return true
    //     } else {
    //         setDateError("");
    //         setItemToEdit({ ...itemToEdit, dateOfBirth: new Date(dob) })
    //         return false;
    //     }
    // }

    const onSubmit = (individual) => {
        // TODO evaluate age is more thhan 18 before saving

        individual.latitude = parseFloat(individual.latitude) || 0;
        individual.longitude = parseFloat(individual.longitude) || 0;
        individual.accountPackage = itemToEdit.accountPackage;
        individual.firstName = itemToEdit.firstName;
        individual.lastName = itemToEdit.lastName;
        individual.dateOfBirth = dateOfBirth || itemToEdit.dateOfBirth;
        individual.pcn = itemToEdit.pcn;
        individual.organizationName = itemToEdit.organizationName;
        individual.organizationName = company;
        individual.typesOfPractice = itemToEdit.typesOfPractice;
        individual.gender = itemToEdit.gender;
        individual.phoneNumber = itemToEdit.phoneNumber;
        individual.country = itemToEdit.country;
        individual.state = itemToEdit.state;
        individual.lga = itemToEdit.lga;
        individual.address = itemToEdit.address;
        console.log({ individual })
        dispatch(updateProfileIndividual(userEmail, individual));
    }

    const handleDateChange = (e) => {
        const dateOfBirth = e.target.value;
        const thisYear = new Date().getFullYear();
        const userdob = dateOfBirth.split('-');
        const dob = userdob[0];
        const age = thisYear - dob;

        if (age <= 18) {
            setDateError("must be older than 18 years.");
            // dispatch(showErrorMessage("Invalid Date of birth, Date of birth can not be current year"));
            return true;
        }
        else {
            setDateError("");
            setItemToEdit({ ...itemToEdit, dateOfBirth: dateOfBirth })
            return false;
        }
    }

    // Profile Picture
    const [image, setImage] = useState({ preview: "", raw: "" });

    // TODO: validate image size: restrict to 1mb;
    const handleChange = e => {
        if (e.target.files.length) {
            const valid = validFileType(e.target.files[0])
            if (!valid) {
                alert("only image of type (png, jpg, jpeg) file is allowed");
                return;
            }

            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };

    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
        dispatch(updateProfilePicture(formData));
    };

    // Profile Picture

    return (
        <>
            {/* <div className="col-12">
            <div className="alert alert-danger" role="alert">
                    This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
         </div> */}

            <div className="col-lg-9 col-md-8 col-12 bbg">
                <PageHeader pageTitle={'Update Individual Registration'}>
                </PageHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card mb-2 py-3">
                        <div className="profilepic-container">
                            {(image.preview || itemToEdit.profileImage) ? (
                                <img src={image.preview || IMAGE_URL + itemToEdit.profileImage} alt="dummy" width="135.63" height="140" className="rounded-circle" />
                            ) : (
                                <>
                                    <i className="fas fa-user-circle fa-10x w-100"></i>
                                </>
                            )}
                            <label htmlFor="upload-button" className="mt-3 profileImg-label"><i className="fas fa-camera fa-2x project-color text-white rounded-circle p-2"></i></label>
                        </div>
                        <input
                            type="file"
                            id="upload-button"
                            style={{ display: "none" }}
                            onChange={handleChange}
                            accept=".jpg, .jpeg, .png"
                        />
                        <br />
                        {image.preview.length !== 0 && <div className="btn project-color text-light imgSave-btn m-auto" onClick={handleUpload}>Save Image</div>}
                    </div>
                    <div className="card ">
                        <div className="card-body">
                            {/* <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center mb-4 mb-lg-0">
                                    <img src={"./logo192.png"} id="img-uploaded"
                                        className="avatar-xl rounded-circle " alt="" />
                                    <div className="ml-3">
                                        Upload image
                                        </div>
                                    <div className="form-group px-3 profileImg">
                                        <label className="form-label py-3">

                                        </label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile2" />
                                            <label className="custom-file-label" htmlFor="customFile2">Choose file</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <hr className="my-5" /> */}
                            <div>
                                <h4 className=" project-text-color mb-0 font-weight-bold">Basic Information</h4>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="accountPackage">Account Package: <span className="text-danger pl-2">{errors.accountPackage && " * Account Package is required"}</span></label>
                                        <input type="text"
                                            id="accountPackage"
                                            className="form-control"
                                            placeholder="Account Package"
                                            name="accountPackage"
                                            defaultValue={itemToEdit?.accountPackage}
                                            disabled={true}
                                            value={itemToEdit?.accountPackage}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })} />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="profilefname">First Name: <span className="text-danger pl-2">{errors.firstName && " * First Name is required"}</span></label>
                                        <input type="text"
                                            id="firstName"
                                            className="form-control"
                                            placeholder="First Name"
                                            name="firstName"
                                            defaultValue={itemToEdit?.firstName}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })} />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="lastName">Last Name: <span className="text-danger pl-2">{errors.lastName && " * Last Name is required"}</span></label>
                                        <input type="text"
                                            id="lastName"
                                            className="form-control"
                                            placeholder="Last Name"
                                            name="lastName"
                                            defaultValue={itemToEdit?.lastName}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })} />
                                    </div>
                                    {/* <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="birth">Date OF Birth:<span className="text-danger pl-2">
                                            {!(dateOfBirth || itemToEdit.dateOfBirth) && " * Date of birth is required"}
                                            {(dateError) && " * must be 18  years or above"}
                                        </span></label>
                                        <br />
                                        <DatePicker
                                            dateFormat="dd-MM-YYYY"
                                            selected={dateOfBirth}
                                            onChange={handleDateChange}
                                            value={dateOfBirth || itemToEdit.dateOfBirth}
                                            className="col-12"
                                        />
                                    </div> */}
                                    <div className=" form-group  col-12 col-md-6">
                                        <label>Date of birth * <span className="text-danger pl-2"> {!(dateOfBirth || itemToEdit.dateOfBirth) && " * Date of birth is required"}
                                            {(dateError) && " * must be 18  years or above"}</span></label>

                                        <div>
                                            <input type="date"
                                                id='dateOfBirth'
                                                name="dateOfBirth"
                                                className="form-control rounded-2"
                                                selected={dateOfBirth}
                                                onChange={handleDateChange}
                                                value={dateOfBirth || itemToEdit.dateOfBirth}
                                                ref={register({
                                                    required: "Start Date is required",
                                                    // validate: value => !value || value < new Date() || "ok"
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="profileaddress2">PCN: <span className="text-danger pl-2">{errors.pcn && " * PCN is required"}</span></label>
                                        <input type="text"
                                            id="pcn"
                                            className="form-control"
                                            placeholder="PCN"
                                            name="pcn"
                                            defaultValue={itemToEdit?.pcn}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true, maxLength: 10 })}
                                        />
                                    </div>

                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label"> Employer: <span className="text-danger pl-2">{errors.organizationName && " * Organization Name is required"}</span></label>
                                        <Autocomplete
                                            id="organizationName"
                                            className="form-control"
                                            name="organizationName"
                                            onChange={handleInput}
                                            value={organizationNameValue}
                                            suggestions={organisationList}
                                            getCompany={getCompany}
                                            companyName={organizationNameValue || itemToEdit?.organizationName}
                                            placeholder="Enter your company's name"
                                        />

                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label">Type of Practice: <span className="text-danger pl-2">{errors.typesOfPractice && " * Type Of Practice is required"}</span>
                                            {!typeOfPracticeValue && <span className="text-danger font-weight-bold">Type of Practice is required</span>}
                                        </label>
                                        <select
                                            id="typesOfPractice"
                                            className="form-control"
                                            name="typesOfPractice"
                                            value={itemToEdit?.typesOfPractice}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register()}

                                        >

                                            <option value="">Type Of Practice</option>
                                            <option value="hospital">Hospital</option>
                                            <option value="retail">Retail</option>
                                            <option value="wholesale">Wholesale</option>
                                            <option value="distribution">Distribution</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="education">Eductaion</option>

                                        </select>
                                    </div>

                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-check-label" htmlFor="individual">
                                            Gender:<span className="text-danger pl-2">{errors.gender && " * Gender is required"}</span>
                                        </label><br />
                                        <div
                                            className="custom-control custom-radio custom-control-inline">
                                            <input type="radio"
                                                id="female"
                                                name="gender"
                                                className="custom-control-input"
                                                value="female"
                                                onChange={(e) => handleOnChange(e)}
                                                checked={itemToEdit?.gender === 'female'}
                                                ref={register({ required: true })}
                                            />
                                            <label className="custom-control-label"
                                                htmlFor="female"><span
                                                    className="text-dark">Female</span></label>
                                        </div>
                                        <div
                                            className="custom-control custom-radio custom-control-inline">
                                            <input type="radio"
                                                id="male"
                                                name="gender"
                                                value="male"
                                                onChange={(e) => handleOnChange(e)}
                                                checked={itemToEdit?.gender === 'male'}
                                                className="custom-control-input"
                                                ref={register({ required: true })}
                                            />
                                            <label className="custom-control-label"
                                                htmlFor="male"><span
                                                    className="text-dark">Male</span></label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="shadow p-3 mt-2 mb-5 bg-white rounded card ">
                        <div className="card-body">
                            <h4 className=" project-text-color mb-0 font-weight-bold">Contact Information</h4>
                            <div className="row">
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="profileaddress2">Phone Number: <span className="text-danger pl-2">{errors.phoneNumber && " * Phone Number is required"}</span></label>
                                    <input type="text"
                                        id="phoneNumber"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        defaultValue={itemToEdit?.phoneNumber}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: true })}
                                    />
                                </div>


                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">Country: <span className="text-danger pl-2">{errors.country && " * Country is required"}</span></label>
                                    <select id="country"
                                        className="form-control"
                                        ref={register({ required: true })}
                                        name="country"
                                        value={itemToEdit?.country}
                                        onChange={(e) => { handleOnChange(e); handleCountryChange(e) }}
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map(country =>
                                            <option key={country.id} value={country.id}>{country.name}
                                            </option>)}
                                    </select>
                                </div>


                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">State: <span className="text-danger pl-2">{errors.state && " * State is required"}</span></label>
                                    <select className="form-control"
                                        // onChange={handleStateChange}
                                        id="state"
                                        name="state"
                                        ref={register({ required: true })}
                                        value={itemToEdit?.state}
                                        onChange={(e) => { handleOnChange(e); handleStateChange(e) }}

                                    >
                                        <option value="">Select State</option>
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
                                        value={itemToEdit?.lga}
                                        onChange={(e) => { handleOnChange(e) }}
                                        ref={register({ required: true })}
                                    >
                                        <option value="">Select LGA</option>
                                        {lgas && lgas.length > 0 && lgas.map(lga =>
                                            <option key={lga.id} value={lga.id}>{lga.name}
                                            </option>)}
                                    </select>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="profileaddress2">City:  <span className="text-danger pl-2">{errors.city && " * City is required"}</span></label>
                                    <input type="text"
                                        id="city"
                                        className="form-control"
                                        placeholder="City"
                                        name="city"
                                        defaultValue={itemToEdit?.city}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: true })}
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="profileaddress2">Address:  <span className="text-danger pl-2">
                                        {errors.address && " * Address is required"}</span></label>
                                    <input type="text"
                                        id="address"
                                        className="form-control"
                                        placeholder="Address"
                                        name="address"
                                        defaultValue={itemToEdit?.address}
                                        onChange={(e) => { handleOnChange(e); handleCountryChange(e) }}
                                        ref={register({ required: true })}
                                    />
                                </div>

                                {/* <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="longtitude">Longitude:  <span className="text-danger pl-2">{errors.longitude && "Longitude is required"}</span></label>
                                    <input type="number"
                                        id="longitude"
                                        className="form-control"
                                        placeholder="longitude"
                                        name="longitude"
                                        ref={register({ required: true })}
                                    />
                                </div> */}

                                {/* <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="latitude">Latitude:  <span className="text-danger pl-2">{errors.latitude && "Latitude is required"}</span></label>
                                    <input type="number"
                                        id="longitude"
                                        className="form-control"
                                        placeholder="latitude"
                                        name="latitude"
                                        ref={register({ required: true })}
                                    />
                                </div> */}
                                <div className="col-12">
                                    <button disabled={Isdisable} className="btn btn-primary float-right" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default IndividualRegistration;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateProfileCorporate, updateProfilePicture, loadProfileWithData } from '../../store/modules/account';
import { showErrorMessage } from '../../store/modules/notification';
import { loadLga, loadStates, loadCountry } from '../../store/modules/location';
import validator from 'validator';

import './CorporateRegistration.css';
import PageHeader from '../Shared/PageHeader';
import agent, { IMAGE_URL } from '../../agent';


const CorporateRegistration = () => {

    const dispatch = useDispatch();
    const { handleSubmit, register, errors, watch, trigger } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });
    const [returnLgas, setReturnLgas] = useState("");
    const [Isdisable, setIsDisable] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [itemToEdit, setItemToEdit] = useState({});

    const corOpeningTime = watch('openingTime');
    const corClosingTime = watch('closingTime')
    const typeOfPracticeValue = watch("typesOfPractice");

    const currentUser = agent.Auth.current();
    const userEmail = currentUser ? currentUser.email : null;

    const countries = useSelector(state => state.location.countries);
    const states = useSelector(state => state.location.states);
    const lgas = useSelector(state => state.location.lgas);
    const profile = useSelector(state => state.account.profile);

    useEffect(() => {
        dispatch(loadCountry());
        if (userEmail) {
            dispatch(loadProfileWithData(userEmail));
        }
    }, [dispatch]);

    useEffect(() => {
        setItemToEdit(profile)
    }, [profile]);

    const handleCountryChange = (e) => {
        let countryid = e.target.value;
        dispatch(loadStates(countryid));
    }

    const handleStateChange = (e) => {
        let stateId = e.target.value;
        dispatch(loadLga(stateId));
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setItemToEdit({ ...itemToEdit, [name]: value ?? JSON.parse(value) });
    }

    const validate = (value) => {
        if (!validator.isURL(value)) {
            setErrorMessage('Kindly input a valid URL');
        } else {
            setErrorMessage('');
        }
    }

    // Profile Picture
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
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

    // useEffect(() => {
    //     dispatch(loadProfileWithData())
    // }, [dispatch])

    // Profile Picture



    const onSubmit = (corporate) => {
        corporate.id = itemToEdit.id;
        corporate.yearofEstablishment = parseInt(corporate.yearofEstablishment);
        corporate.numberofEmployees = parseInt(corporate.numberofEmployees);
        corporate.latitude = parseFloat(corporate.latitude) || 0;
        corporate.longitude = parseFloat(corporate.longitude) || 0;
        corporate.accountPackage = itemToEdit.accountPackage;
        corporate.organizationName = itemToEdit.organizationName;
        corporate.organizationType = itemToEdit.organizationType;
        corporate.pcn = itemToEdit.pcn;
        corporate.companyRegistrationNumber = itemToEdit.companyRegistrationNumber;
        corporate.yearofEstablishment = parseInt(itemToEdit.yearofEstablishment);
        corporate.numberofEmployees = parseInt(itemToEdit.numberofEmployees);
        corporate.typesOfPractice = itemToEdit.typesOfPractice;
        corporate.phoneNumber = itemToEdit.phoneNumber;
        corporate.country = itemToEdit.country;
        corporate.state = itemToEdit.state;
        corporate.lga = itemToEdit.lga;
        corporate.city = itemToEdit.city;
        corporate.address = itemToEdit.address;
        corporate.openingTime = itemToEdit.openingTime;
        corporate.closingTime = itemToEdit.closingTime
        corporate.website = itemToEdit.website;
        corporate.premisesImage = itemToEdit.premisesImage;
        dispatch(updateProfileCorporate(userEmail, corporate));
    }

    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Update Corporate Registration'} >
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
                                            <input type="file"
                                                className="custom-file-input form-control"
                                                id="customFile2"
                                                name="profileImage"
                                            />
                                            <label className="custom-file-label" htmlFor="customFile2">Choose file</label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <hr className="my-5" /> */}
                            <div>
                                <h4 className="mb-0 font-weight-bold">Basic Information</h4>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label">Account Package : <span className="text-danger pl-2 font-weight-bold">{errors.accountPackage && " * Account Package is required"}</span></label>
                                        <input type="text"
                                            id="accountPackage"
                                            className="form-control"
                                            placeholder="Account Package"
                                            name="accountPackage"
                                            defaultValue={itemToEdit?.accountPackage}
                                            disabled={true}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })} />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="profilefname">Organization Name:  <span className="text-danger pl-2 font-weight-bold">{errors.organizationName && " * Organization Name is required"}</span></label>
                                        <input type="text"
                                            id="organizationName"
                                            className="form-control"
                                            placeholder="Organization name"
                                            name="organizationName"
                                            defaultValue={itemToEdit?.organizationName}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })}
                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="profilelname">Organization Type :<span className="text-danger pl-2 font-weight-bold">{errors.organizationType && " * Organization Type is required"}</span></label>
                                        <input type="text"
                                            id="organizationType"
                                            className="form-control"
                                            placeholder="Organization Type"
                                            name="organizationType"
                                            defaultValue={itemToEdit?.organizationType}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })}
                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="pcn">PCN : <span className="text-danger pl-2 font-weight-bold">{errors.pcn && " * PCN is required"}</span></label>
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
                                        <label className="form-label" htmlFor="companyRegistrationNumber">Company Registration Number : <span className="text-danger pl-2 font-weight-bold">{errors.companyRegistrationNumber && " * Company Registration Number is required"}</span></label>
                                        <input className="form-control flatpickr"
                                            type="text"
                                            placeholder="Company Reg number"
                                            id="companyRegistrationNumber"
                                            name="companyRegistrationNumber"
                                            defaultValue={itemToEdit?.companyRegistrationNumber}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })} />
                                    </div>
                                    <hr className="my-5" />



                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="profileaddress2">Year Of Establishment (Year) : <span className="text-danger pl-2 font-weight-bold">{errors.yearofEstablishment && " * Year Of Establishment is required"}</span> </label>
                                        <input type="number"
                                            onKeyDown={(evt) => evt.key === '.' && evt.preventDefault()}
                                            id="yearofEstablishment"
                                            className="form-control"
                                            placeholder="Year Of Establishment"
                                            name="yearofEstablishment"
                                            defaultValue={itemToEdit?.yearofEstablishment}
                                            onChange={(e) => handleOnChange(e)}
                                            // maxDate="{dateRef.current}"
                                            ref={register({ required: true, maxLength: 4 })}
                                        />
                                        {/* <YearPicker
                                            id="yearofEstablishment"
                                            className="form-control"
                                            placeholder="Year Of Establishment"
                                            name="yearofEstablishment"
                                            defaultValue={itemToEdit?.yearofEstablishment}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })} /> */}

                                    </div>

                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label" htmlFor="profileaddress2">Number Of Employees : <span className="text-danger pl-2 font-weight-bold">{errors.numberofEmployees && " * Number Of Employees is required"}</span></label>
                                        <input type="number"
                                            id="noofemployees"
                                            className="form-control"
                                            placeholder="Number Of Employees"
                                            name="numberofEmployees"
                                            defaultValue={itemToEdit?.numberofEmployees}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register({ required: true })} />
                                    </div>

                                    <div className="form-group col-12 col-md-6">
                                        <label className="form-label">Type of Practice: <span className="text-danger pl-2">{errors.typesOfPractice && " * Type Of Practice is required"}</span>
                                            {!typeOfPracticeValue && <span className="text-danger font-weight-bold">Type of Practice is required</span>}
                                        </label>
                                        <select
                                            id="typesOfPractice"
                                            className="form-control"
                                            ref={register()}
                                            name="typesOfPractice"
                                            value={itemToEdit?.typesOfPractice}
                                            onChange={(e) => handleOnChange(e)}
                                        >
                                            <option value="" defaultValue>Type Of Practice</option>
                                            <option value="hospital">Hospital</option>
                                            <option value="retail">Retail</option>
                                            <option value="wholesale">Wholesale</option>
                                            <option value="distribution">Distribution</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="education">Education</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className=" mt-2 card ">
                        <div className="card-body">
                            <h4 className="mb-0 font-weight-bold">Contact Information</h4>
                            <div className="row">
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="phoneNumber">Phone Number : <span className="text-danger pl-2 font-weight-bold">{errors.phoneNumber && " * Phone Number is required"}</span></label>
                                    <input type="text"
                                        id="phoneNumber"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        defaultValue={itemToEdit?.phoneNumber}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({
                                            required: true,
                                            maxLength: 12
                                        })}
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">Country : <span className="text-danger pl-2 font-weight-bold">{errors.country && " * Country is required"}</span></label>
                                    <select id="countryid"
                                        className="form-control"
                                        // onChange={handleCountryChange}
                                        value={itemToEdit?.country}
                                        onChange={(e) => { handleOnChange(e); handleCountryChange(e) }}
                                        ref={register({ required: true })}
                                        name="country"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map(country =>
                                            <option key={country.id} value={country.id}>{country.name}
                                            </option>)}
                                    </select>
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">State : <span className="text-danger pl-2 font-weight-bold">{errors.state && " * State is required"}</span></label>
                                    <select className="form-control"
                                        id="state"
                                        name="state"
                                        value={itemToEdit?.state}
                                        onChange={(e) => { handleOnChange(e); handleStateChange(e) }}
                                        ref={register({ required: true })}
                                    >
                                        <option value="">Select State</option>
                                        {states && states.length > 0 && states.map(state =>
                                            <option key={state.id} value={state.id}>{state.name}
                                            </option>)}
                                    </select>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">LGA : <span className="text-danger pl-2 font-weight-bold">{errors.lga && " * LGA is required"}</span></label>
                                    <select className="form-control"
                                        id="lga"
                                        name="lga"
                                        value={itemToEdit?.lga}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: true })}
                                    >
                                        <option value="">Select LGA</option>
                                        {lgas && lgas.length > 0 && lgas.map(lga =>
                                            <option key={lga.id} value={lga.id}>{lga.name}
                                            </option>)}
                                    </select>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="city">City :  <span className="text-danger pl-2 font-weight-bold">{errors.city && " * City is required"}</span></label>
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
                                    <label className="form-label" htmlFor="address">Address :  <span className="text-danger pl-2 font-weight-bold">{errors.address && " * Address is required"}</span></label>
                                    <input type="text"
                                        id="address"
                                        className="form-control"
                                        placeholder="Address"
                                        name="address"
                                        defaultValue={itemToEdit?.address}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: true })}
                                    />
                                </div>
                                {/* <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="longtitude">Longitude: <span className="text-danger pl-2">{errors.longitude && "Longitude is required"}</span></label>
                                    <input type="number"
                                        id="longitude"
                                        className="form-control"
                                        placeholder="longitude"
                                        name="longitude"
                                        ref={register({ required: true })}
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="latitude">Latitude: <span className="text-danger pl-2">{errors.latitude && "Latitude is required"}</span></label>
                                    <input type="number"
                                        id="longitude"
                                        className="form-control"
                                        placeholder="latitude"
                                        name="latitude"
                                        ref={register({ required: true })}
                                    />
                                </div> */}
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="openingTime">Opening Time * :{errors.openingTime && <span className="text-danger pl-2 font-weight-bold">
                                        {errors.openingTime.message}</span>}</label>
                                    <input type="time"
                                        id="openingTime"
                                        className="form-control"
                                        placeholder="Opening Time"
                                        name="openingTime"
                                        defaultValue={itemToEdit?.openingTime}
                                        onChange={(e) => { handleOnChange(e); trigger("closingTime", "openingTime") }}
                                        ref={register({
                                            required: "* Opening time is required",
                                            validate: value => !value || !corClosingTime || value <= corClosingTime || "Opening time cannot be equal to or greater than closing time"
                                        })}
                                    />
                                    {errors.closingTime && <p> invalid date</p>}

                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="closingTime">Closing Time :{errors.closingTime && <span className="text-danger pl-2 font-weight-bold">
                                        {errors.closingTime.message}</span>}
                                    </label>
                                    <input type="time"
                                        id="closingTime"
                                        className="form-control"
                                        placeholder="Closing Time"
                                        name="closingTime"
                                        defaultValue={itemToEdit?.closingTime}
                                        onChange={(e) => { handleOnChange(e); trigger("openingTime", "closingTime") }}
                                        ref={register({
                                            required: "* Closing Time is required",
                                            validate: value => !value || !corOpeningTime || value >= corOpeningTime || "Closing time cannot be equal to or Less than opening time"
                                        })}

                                    />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label" htmlFor="website">Website :   <span className="text-primary font-weight-bold">{errorMessage}</span> </label>
                                    <input type="text"
                                        id="website"
                                        className="form-control"
                                        placeholder="Website"
                                        name="website"
                                        defaultValue={itemToEdit?.website}
                                        onChange={(e) => { handleOnChange(e); validate(e.target.value) }}
                                        ref={register()}

                                    />

                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label"> Upload Premises Image </label>
                                    <div className="custom-file">
                                        <input type="file"
                                            className="form-control"
                                            id="premisesImage"
                                            name="premisesImage"
                                            defaultValue={itemToEdit?.premisesImage}
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                    </div>
                                </div>
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

export default CorporateRegistration;
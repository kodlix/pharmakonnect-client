import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageHeader from '../Shared/PageHeader';
import QuillEditor from '../Shared/QuillEditor';
import { createJobVacancy, formatter } from '../../store/modules/jobVacancy';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './JobVacancy.css';

const Create = () => {
    const { register, handleSubmit, errors, setValue, watch, trigger, control, getValues, setError, clearErrors } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const dispatch = useDispatch();
    const [jobDescriptionValue, setJobDescriptionValue] = useState("");
    const [jobIsRemote, setJobIsRemote] = useState("");
    const { startDate, endDate } = watch(["startDate", "endDate"]);
    const minimumSalary = watch('minSalary');
    const maximumSalary = watch('maxSalary');

    const removeEmptyFields = (data) => {
        Object.keys(data).forEach(key => {
            if (data[key] === '' || data[key] == null) {
                delete data[key];
            }
        });
    }
    Date.prototype.addHours = function (h) {
        this.setTime(this.getTime() + (h * 60 * 60 * 1000));
        return this;
    }

    function handleChange(newValue) {
        setJobDescriptionValue(newValue);
        setValue("jobDescription", newValue, { shouldValidate: true });
    }

    const validateJobDescription = (newValue) => {
        if ((newValue.replace(/\s+/g, ' ').length) < 1000) {
            if ((newValue.replace(/(<([^>]+)>)/gi, "").length && newValue.replace(/<(.|\n)*?>/g, '').trim().length) === 0) {
                //textarea is still empty
                return false;
            }
        }
        else {
            return true
        }
    }

    useEffect(() => {
        register("jobDescription", { required: "Job Description is required", validate: validateJobDescription });
        register("yearOfIncorporation", { required: ' Year of Incorporation is required', validate: value => value < new Date() || ' Cannot be today or a later date' });
    }, [register])


    const toggleJobIsRemote = (e) => {
        if (e.target.checked) {
            setValue('jobLocation', 'Remote', { shouldValidate: true })
            setJobIsRemote("Remote");
        }
        else {
            setValue("jobLocation", "", {
                shouldValidate: true
            })
            setJobIsRemote("");
        }
    }

    const onSubmit = (job) => {
        removeEmptyFields(job);

        if (jobIsRemote) {
            job.jobLocation = jobIsRemote;
        }

        job.yearOfIncorporation = job.yearOfIncorporation.getFullYear().toString();
        job.startDate = formatter.toISOStringFormat(job.startDate)
        job.endDate = formatter.toISOStringFormat(job.endDate)
        dispatch(createJobVacancy(job));
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className='col-lg-9 col-md-8 col-12'>
                <div className="create-vacancy mb-5">
                    <PageHeader pageTitle={'Create Job Vacancy'}>
                        <Link className="btn btn-primary" to="/jobvacancy"><i className="fa fas-back"></i>back</Link>
                    </PageHeader>
                    <div className="">
                        <div className="shadow p-5  mt-1 mb-5 bg-white rounded">
                            <h5 className="project-text-color">Company Information *</h5>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="nameOfCorporation" className="form-label">Company Name *<span className="text-danger font-weight-bold">{errors.nameOfCorporation && " Company name is required"}</span></label>
                                    <input type="text" className="form-control" name="nameOfCorporation" id="nameOfCorporation" placeholder="Company Name" ref={register({ required: true })} />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="yearOfIncorporation" className="form-label">Year of Incorporation * {errors.yearOfIncorporation && <span className="text-danger font-weight-bold">{errors.yearOfIncorporation.message}</span>}</label>
                                    <Controller
                                        control={control}
                                        name="yearOfIncorporation"
                                        render={(props) => (
                                            <DatePicker
                                                className="form-control"
                                                placeholderText="Select year"
                                                onChange={(e) => props.onChange(e)}
                                                selected={props.value}
                                                showYearPicker
                                                dateFormat="yyyy"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="companyUrl" className="form-label">Company Website{errors.companyUrl && <span className="text-danger font-weight-bold"> {errors.companyUrl.message}</span>}</label>
                                    <input type="text" className="form-control" name="companyUrl" id="companyUrl" placeholder="Company Website" ref={register({
                                        pattern: { value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-]*)?\??(?:[-\+=&;%@.\w]*)#?(?:[\w]*))?)/, message: "Website format is invalid" }
                                    })} />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="companyRegistrationNumber" className="form-label">Company Registration Number<span className="text-danger font-weight-bold">{errors.companyRegistrationNumber && " * Company Registration Number is required"}</span></label>
                                    <input type="text" className="form-control" name="companyRegistrationNumber" id="companyRegistrationNumber" placeholder="Company Registration Number" ref={register} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="jobTitle" className="form-label">Job Title *<span className="text-danger font-weight-bold">{errors.jobTitle && " Job title is required"}</span></label>
                                    <input type="text" className="form-control" id="jobTitle" name="jobTitle" placeholder="Job Title" ref={register({ required: true })} />
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="jobUrl" className="form-label">Job URL{errors.jobUrl && <span className="text-danger font-weight-bold">{errors.jobUrl.message}</span>}</label>
                                    <input type="text" className="form-control" name="jobUrl" id="jobUrl" placeholder="Job Website" ref={register({
                                        pattern: { value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-]*)?\??(?:[-\+=&;%@.\w]*)#?(?:[\w]*))?)/, message: " Job URL format is invalid" }
                                    })} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="contractTtpe">Contract Type * <span className="text-danger font-weight-bold">{errors.contactType && " Contract type is required"}</span></label>
                                    <select className="form-control" ref={register({ required: true })} name="contactType">
                                        <option value="" defaultValue>Select Contract Type</option>
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Contract</option>
                                        <option>Temporary</option>
                                        <option>Volunteer</option>
                                        <option>Internship</option>
                                    </select>
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="jobLocation" className="form-label">Job location * &nbsp;
                                     ( <input type="checkbox" onClick={toggleJobIsRemote} name="remoteJobLocation"
                                            className="align-text-bottom" />
                                        <small> This Job is Remote</small> )
                                        <span className="text-danger font-weight-bold">
                                            {errors.jobLocation && " Job Location is required"}</span></label>

                                    <input type="text" className="form-control" name="jobLocation" id="jobLocation" placeholder="Address" disabled={jobIsRemote} ref={register({
                                        required: true
                                    })} />
                                </div>
                            </div>
                        </div>

                        <div className="shadow p-5  mt-5 mb-5 bg-white rounded">
                            <h5 className="project-text-color">Qualifications</h5>

                            <div className="mb-5">
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="minimumQualification" className="form-label">Minimum Qualification *{errors.minimumQualification && <span className="text-danger font-weight-bold">{errors.minimumQualification.message}</span>}</label>
                                        <input type="text" className="form-control" name="minimumQualification" id="minimumQualification" placeholder="Minimum Qualification" ref={register({
                                            required: " Minimum Qualification is required"
                                        })} />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="workExperienceInYears" className="form-label">Work Experience (years) * {errors.workExperienceInYears && <span className="text-danger font-weight-bold">{errors.workExperienceInYears.message}</span>}</label>
                                        <input type="number" className="form-control" id="workExperienceInYears" name="workExperienceInYears" placeholder="Years of Expereince" ref={register({
                                            required: ' Work experience is required',
                                            valueAsNumber: true,
                                            min: {
                                                value: 0,
                                                message: ' * Work experience cannot be lower than 0'
                                            }
                                        })} />
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="minSalary" className="form-label">Minimum Salary * {errors.minSalary && <span className="text-danger font-weight-bold">{errors.minSalary.message}</span>}</label>
                                        <input type="number" className="form-control" id="minSalary" name="minSalary"
                                            onChange={() => trigger('maxSalary', 'minSalary')}
                                            placeholder="Minimum Salary " ref={register({
                                                required: ' Minimum Salary is required',
                                                valueAsNumber: true,
                                                min: {
                                                    value: 0,
                                                    message: ' * Maximum Salary cannot be lower than 0'
                                                }, validate: value => !value || !maximumSalary || parseFloat(value) <= parseFloat(maximumSalary) || ' cannot be higher than Maximum Salary'
                                            })} />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="maxSalary" className="form-label">Max. Salary * {errors.maxSalary && <span className="text-danger font-weight-bold">{errors.maxSalary.message}</span>}</label>
                                        <input type="number" className="form-control" id="maxSalary"
                                            onChange={() => trigger('minSalary', 'maxSalary')}
                                            name="maxSalary" placeholder="Maximum Salary " ref={register({
                                                required: ' Maximum Salary is required',
                                                valueAsNumber: true,
                                                min: {
                                                    value: 0,
                                                    message: ' * Maximum Salary cannot be lower than 0'
                                                }, validate: value => !value || !minimumSalary || parseFloat(value) >= parseFloat(minimumSalary) || ' cannot be lower than Minimum Salary'
                                            })} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="startDate" className="form-label">Start Date *{errors.startDate && <span className="text-danger font-weight-bold">{errors.startDate.message}</span>}</label>
                                        <Controller
                                            as={
                                                <DatePicker
                                                    className="form-control"
                                                    id="startDate"
                                                    maxDate={endDate}
                                                    selectsStart
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    selected={startDate}
                                                    format="YYYY-MM-D"
                                                    placeholderText="Select Start Date"

                                                />
                                            }
                                            name="startDate"
                                            control={control}
                                            valueName="selected"
                                            rules={{
                                                required: "Start Date is required",
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="endDate" className="form-label">End Date *{errors.endDate && <span className="text-danger font-weight-bold">{errors.endDate.message}</span>}</label>
                                        <Controller
                                            as={
                                                <DatePicker
                                                    className="form-control"
                                                    id="endDate"
                                                    minDate={startDate || new Date().getDate() + 1}
                                                    selectsEnd
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    format="YYYY-MM-D"
                                                    placeholderText="Select End Date"
                                                    selected={endDate}
                                                />
                                            }
                                            name="endDate"
                                            control={control}
                                            valueName="selected"
                                            rules={{
                                                required: "End Date is required",
                                                validate: value => value >= new Date() || "End Date must be after Today\'s date "
                                            }}
                                        />
                                    </div>

                                </div>


                                <div className="mb-3">
                                    <label htmlFor="otherSkills" className="form-label">Other Skills <span className="text-danger font-weight-bold">{errors.otherSkills && " * Other skills is required"}</span></label>
                                    <input type="text" className="form-control" name="otherSkills" id="otherSkills" placeholder="Other Skills" ref={register} />
                                </div>

                            </div>
                        </div>

                        <div className="shadow p-5  mt-5 mb-3 bg-white rounded">
                            <h5 className="project-text-color">Job Description *  {errors.jobDescription && <span className="text-danger font-weight-bold wrap-des">{errors.jobDescription.message}</span>}{errors.jobDescription && errors.jobDescription.type === "validate" && <span className="text-danger font-weight-bold"> Job Description is required</span>} </h5>

                            <div className="mb-5">
                                <div className="mb-3">
                                    <QuillEditor value={jobDescriptionValue} onChange={handleChange} name="jobDescription" />
                                </div>
                            </div>
                        </div>

                        <div className="text-right"><button type="submit" className="btn btn-success btn-reg fw-bold shadow   mt-3 mb-5 rounded">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Create;
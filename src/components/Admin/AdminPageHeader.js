import React from 'react';
import './AdminPageHeader.css';

const AdminPageHeader = ({
    title = "Dashbaord",
    count,
    showDate = false
}) => {
    return (
        <div className="row">
            <div className="col-lg-11 col-md-11 col-12">
                <div className="border-bottom pb-2 mb-1 d-lg-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="m-0 h3 font-weight-bold">
                            {title} {count && `(${count})`}</h4>
                    </div>
                    {
                        showDate && <div className="d-flex my-1">
                            <div className="input-group mr-3">
                                <input className="form-control flatpickr" type="text" placeholder="Select Date" aria-describedby="basic-addon2"/>
                                <div className="input-group-append input-button">
                                    <span className="input-group-text text-muted" id="basic-addon2">
                                        <i className="fe fe-calendar"></i>
                                    </span>
                                </div>
                            </div>
                            <a href="#!" className="btn btn-primary">Setting</a>
                        </div>
                    }
                 </div>
            </div>
        </div>
    );
}

export default AdminPageHeader;

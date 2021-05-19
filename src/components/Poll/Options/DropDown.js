import React from 'react';

const DropDownOption = () => {
    return ( 
        <div className="form-group col-12">
        <label className="form-label" htmlFor="address">Question Options
            <small className="mx-1">(select one correct option)</small>
        </label>
        <div className="row">
        <select className="custom-select custom-select-md mb-3">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        </div>
        

        <div className="col-12">
            <button className="btn btn-sm btn-secondary mt-0 mb-3" title="add option">
                <i className="fas fa-plus"></i>
            </button>
        </div>
    </div>
     );
}
 
export default DropDownOption;
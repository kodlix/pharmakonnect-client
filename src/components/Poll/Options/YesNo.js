import React from 'react';

const YesNoOption = () => {
    return ( 
        <div className="form-group col-12">
        <label className="form-label" for="address">Question Options
            <small className="mx-1">(select correct option)</small>
        </label>
        <div className="row">
            <div className="input-group col-12 col-md-8 mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="radio" name="options"
                            aria-label="Radio button for following text input" />
                    </div>
                </div>
                <input type="text" className="form-control"
                    aria-label="Text input with radio button"
                    placeholder="Option 1" required value="Yes" />
            </div>
        </div>
        <div className="row">
            <div className="input-group col-12 col-md-8 mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="radio" name="options"
                            aria-label="Radio button for following text input" />
                    </div>
                </div>
                <input type="text" className="form-control"
                    aria-label="Text input with radio button"
                    placeholder="Option 2" required value="No" />
            </div>
        </div>
    </div>
     );
}
 
export default YesNoOption;
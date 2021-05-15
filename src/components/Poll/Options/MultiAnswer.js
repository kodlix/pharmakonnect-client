import React from 'react';

const MultiAnswerOption = () => {
    return ( 
        <div className="form-group col-12">
        <label className="form-label" for="address">Question Options
            <small className="mx-1">(select one correct option)</small>
        </label>
        <div className="row">
            <div className="input-group col-12 col-md-10 mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" name="options"
                            aria-label="Check button for following text input" />
                    </div>
                </div>
                <input type="text" className="form-control"
                    aria-label="Text input with checkbox button"
                    placeholder="Option 1" required />
                <button className="btn">
                    <i className="fas fa-times-circle"></i>
                </button>

            </div>
        </div>
        <div className="row">
            <div className="input-group col-12 col-md-10 mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" name="options"
                            aria-label="Check button for following text input" />
                    </div>
                </div>
                <input type="text" className="form-control"
                    aria-label="Text input with checkbox button"
                    placeholder="Option 2" required />
                <button className="btn">
                    <i className="fas fa-times-circle"></i>
                </button>
            </div>
        </div>
        <div className="row">
            <div className="input-group col-12 col-md-10 mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" name="options"
                            aria-label="Check button for following text input" />
                    </div>
                </div>
                <input type="text" className="form-control"
                    aria-label="Text input with checkbox button"
                    placeholder="Option 3" required />
                <button className="btn">
                    <i className="fas fa-times-circle"></i>
                </button>
            </div>
        </div>

        <div className="col-12">
            <button className="btn btn-sm btn-secondary mt-0 mb-3" title="add option">
                <i className="fas fa-plus"></i>
            </button>
        </div>
    </div>
     );
}
 
export default MultiAnswerOption;
import React from 'react';

const OpenEndedOption = () => {
    return ( 
            <div className="form-group col-12 col-md-8">
                <label className="form-label" htmlFor="opinion">Enter your response</label>
                <textarea id="opinion" className="form-control"
                    placeholder="Give a description of what the poll entails"
                    rows="3" required></textarea>
            </div>
     );
}
 
export default OpenEndedOption;
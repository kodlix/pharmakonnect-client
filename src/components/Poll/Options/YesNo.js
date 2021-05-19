import React, {useState, useEffect} from 'react';

const YesNoOption = ({questionType, getSelectedOption, resetOptions, initialCount}) => {
    const [optionCount, setOptionCount] = useState(2);
    const [selectedResults, setSelectedResults] = useState([])
    const [elementId, ] = useState(Date.now().toString())

    useEffect(() => {
        setSelectedResults([]);
        populateOptions();
    }, [resetOptions])

    useEffect(() => {
        if(questionType === 'Yes/No'){
            setOptionCount(initialCount);
        }
        else{
            setOptionCount(initialCount);
        }
    }, [initialCount])

    const values = ["Yes", "No"];    

    const populateOptions = e => {
        const allOptions = [];
        console.log(allOptions)

        var radioButtons = document.getElementsByClassName('yes-no')
        for (let i = 0; i < radioButtons.length; i++) {
            const elem = radioButtons[i];
            const result = {
                isCorrect: false,
                content: elem.value,
                name: elem.name,
                id: elem.id,
                questionType
            }
            allOptions.push(result);        
        }
        setSelectedResults([...allOptions]);
    }


    const handleSelectCorrect = (e) => {
        console.log(selectedResults);
        const selectedItemId = e.target.id.split("-")[2];
        const checked = e.target.checked;
        const updated = selectedResults.map((item) => {
            if (checked && item.name.includes(selectedItemId)) {
                item.isCorrect = true
            } else{
                item.isCorrect = false
            }
            return item;
        })
        setSelectedResults(updated);
        getSelectedOption(updated);

    }
    
    const optionElements = [];
        for (var i = 0; i < optionCount; i++) {
            optionElements.push(
            <div key={i + '@' +  elementId} className="input-group col-12 col-md-10 mb-2" id={'option-div-' + (i + '@' +  elementId)}>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="radio" name={'option-radio-' + elementId} id={'option-radio-' + (i + '@' +  elementId)}
                            aria-label="Radio button for following text input" onChange={handleSelectCorrect} 
                            title="select correct option"
                             />
                    </div>
                </div>
                <input type="text" className="form-control" name={'option-input-' + (i + '@' +  elementId)} id={'option-input-' + (i + '@' +  elementId)}
                    aria-label="Text input with radio button" readOnly value={values[i]}
                    className="yes-no"
                    placeholder={'enter an option'} required />
            </div>);
        }
    return ( 
        <div className="form-group col-12">
            <label className="form-label" htmlFor="address">Question Options
                <small className="mx-1">(select one correct option)</small>
            </label>

            <div className="row" id="element-row">
                {optionElements}
            </div>            
        </div>
     );
}
 
export default YesNoOption;
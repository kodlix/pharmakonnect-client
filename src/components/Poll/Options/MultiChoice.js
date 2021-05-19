import React, {useState, useEffect} from 'react';

const MultiChoiceOption = ({questionType, getSelectedOption, resetOptions, initialCount }) => {
    const [optionCount, setOptionCount] = useState(initialCount);
    const [selectedResults, setSelectedResults] = useState([])
    const [elementId, ] = useState(Date.now().toString())

    useEffect(() => {
        setSelectedResults([]);
    }, [resetOptions])

    useEffect(() => {
        setOptionCount(initialCount);
    }, [initialCount])
    

    const handleOnBlur = (e) => {
        console.log(selectedResults);

        const elem = e.target;
        const result = {
            isCorrect: false,
            content : elem.value,
            name: elem.name,
            questionType
        }

        const exist = selectedResults.find(x => x.name === result.name);
        if (!exist && result.content) {
            const newResults = [...selectedResults, result]
            setSelectedResults([...newResults]);
            getSelectedOption(selectedResults);
        }
        else if (result.content){
            const updated = selectedResults.map((item) => {
                if (item.name === result.name) {
                    item.content = result.content
                }
                return item;
            })
            setSelectedResults(updated);
            getSelectedOption(selectedResults);
        }

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

    const handleOnDelete = (e) => {
        console.log(selectedResults);
        const elem = e.target.offsetParent;
        elem.style.display = 'none';
        const idToDelete = e.target.name.split("-")[2];
        const updatedResults = selectedResults.filter(x => !x.name.includes(idToDelete));
        setSelectedResults(updatedResults);
        setOptionCount(optionCount)
        getSelectedOption(updatedResults);
        
    }

    const addNewElement = () => {
        setOptionCount(optionCount + 1);
    }

    const resetSelectedOptions = () => {
        setSelectedResults([]);
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
                    aria-label="Text input with radio button"
                    placeholder={'enter an option'} required onBlur={handleOnBlur} />
               
                <button className="btn btn-primary" title="delete this option" onClick={handleOnDelete} name={'option-button-' + (i + '@' +  elementId)}>
                    delete
                </button>
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

                <div className="col-12">
                    <button className="btn btn-sm btn-secondary mt-0 mb-3" title="add option" onClick={addNewElement}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        );
}
 
export default MultiChoiceOption;
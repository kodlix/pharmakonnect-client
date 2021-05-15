import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Autocomplete = ({ suggestions, description, companyName, getCompany }) => {
    const [active, setActive] = useState(0);
    const [filtered, setFiltered] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [input, setInput] = useState("");
    const { register } = useForm();



    // @TODO pass the fullm company object instead of 
    // companyName; so one can extract the Id and the name separately

    const onChange = e => {
        setFirstLoad(false);
        const input = e.currentTarget.value;
        const newFilteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
        );
        setActive(0);
        setFiltered(newFilteredSuggestions);
        setIsShow(true);
        setInput(e.currentTarget.value)
    };
    const onClick = e => {
        setActive(0);
        setFiltered([]);
        setIsShow(false);
        setInput(e.currentTarget.innerText)
        getCompany(e.currentTarget.innerText)

    };
    const onKeyDown = e => {
        if (e.keyCode === 13) { // enter key
            setActive(0);
            setIsShow(false);
            setInput(filtered[active])
        }
        else if (e.keyCode === 38) { // up arrow
            return (active === 0) ? null : setActive(active - 1);
        }
        else if (e.keyCode === 40) { // down arrow
            return (active - 1 === filtered.length) ? null : setActive(active + 1);
        }
    };



    useEffect(() => {
        setFirstLoad(true);
    }, [])


    const renderAutocomplete = () => {
        if (isShow && input) {
            if (filtered.length) {
                return (
                    <ul className="autocomplete">
                        {filtered.map((suggestion, index) => {
                            let className;
                            if (index === active) {
                                className = "active";
                            }
                            return (
                                <li className={className} key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                return (
                    <div className="no-autocomplete">
                        <em>Not found</em>
                    </div>
                );
            }
        }
        return <></>;
    }
    return (
        <>
            <input
                className="form-control"
                name
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={(firstLoad && companyName) || input}
                placeholder={description}
                ref={register({ required: true })}
            />
            {renderAutocomplete()}
        </>
    );
}
export default Autocomplete;
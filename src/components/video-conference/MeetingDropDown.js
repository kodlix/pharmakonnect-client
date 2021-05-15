import React from 'react'
import { Link } from 'react-router-dom';



const MeetingDropDown = ({ id, deleteItem, viewItem, editItem, }) => {



    return (
        <div className="dropdown pb-2" style={{ float: "right" }} >
            <span className="btn-md " role="button" id="dropdownMenuLink"
                data-bs-toggle="dropdown" aria-expanded="false">
                <strong className="bg-secondary text-white px-3  pb-2  rounded-pill" style={{ fontWeight: '1.3 rem' }}>...</strong>
            </span>
            <ul className="dropdown-menu ml-5" aria-labelledby="dropdownMenuLink" style={{ width: "10px", zIndex: 10000000000 }} >
                <li> <Link to={`/conference/edit/${id}`} className="dropdown-item">Edit</Link>
                </li>
                <li><Link className="dropdown-item" style={{ cursor: "pointer" }} onClick={deleteItem}> <span className="text-danger"> Delete</span></Link>
                </li>
            </ul>

        </div>
    )
}

export default MeetingDropDown;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import './Chat.css';
import AppLogo from '../Shared/AppLogo';
import SideBar from './SideBar';
import Profile from './Profile';
import Setting from './Setting';
import Swal from 'sweetalert2';
import { loadContacts, deleteContact, loadContactById } from '../../store/modules/contact';



const Contact = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contact.contacts);
    const contact = useSelector(state => state.contact.contact);
    console.log(contact)
    const contactbyid = (id) => {
        dispatch(loadContactById(id))
    }

    useEffect(() => {
        dispatch(loadContacts());
    }, [dispatch]);



    const deleteById = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#754ffe',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            dispatch(deleteContact(id));
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

            }
        })
    }




    const [contactList, setcontactList] = useState(true);
    const [chatDetail, setchatDetail] = useState(true);
    const [chatSetting, setchatSetting] = useState(false);
    const [profile, setprofile] = useState(false);

    function openChatSettings() {
        setchatSetting(true)
        setcontactList(false)
        setchatDetail(true)
    }
    function closeChatSettings() {
        setcontactList(true)
        setchatSetting(false)
    }

    function openChat() {
        setchatDetail(true)
        setcontactList(false)
        setchatSetting(false)
    }

    function closeChat() {
        setchatDetail(true)
        setcontactList(true)
    }

    function openProfile() {
        setprofile(true)
    }
    function closeProfile() {
        setprofile(false)
    }

    return (
        <React.Fragment>
            <div id="main">

                {/* <!-- Main Wrapper --> */}
                <div className="main-wrapper">

                    {/* <!-- content --> */}
                    <div className="content main_content">

                        {/* <!-- sidebar group --> */}

                        {/* <!-- web sidebar group --> */}
                        <div className="web-sidebar-group left-sidebar chat_sidebar" id="chat-list">
                            {/* <!-- Chats sidebar --> */}

                            <SideBar />

                            <div id="chats" className="left-sidebar-wrap sidebar active">
                                {/* <!-- chat list web --> */}

                                {contactList && <div className="sidebar-body" id="webchatsidebar">
                                    <h5 className="nav-item dropdown text-primary fw-bolder mb-4">Contacts
                         <button type="button" className="nav-link float-right btn btn-circle  btn-sm web-header_button"
                                            href="#" data-bs-toggle="dropdown">
                                            <i className="fas fa-plus button_plus"></i>
                                        </button>
                                        <div className="dropdown-menu header_drop_icon">
                                            <a className="dropdown-item" data-toggle="modal" data-target="#new_group">
                                                New Group
                            </a>
                                            <a className="dropdown-item" data-toggle="modal" data-target="#chat-new">New Chat</a>
                                            <a className="dropdown-item" onClick={openChatSettings}>
                                                Settings
                            </a>
                                        </div>

                                    </h5>
                                    <div className="search_chat has-search m-0 mb-3">
                                        <span className="fas fa-search form-control-feedback"></span>
                                        <input className="form-control chat_input" id="search-contact" type="text" placeholder="Search chats" />
                                    </div>
                                    <ul className="user-list">
                                        {
                                            contacts?.length > 0 &&
                                            contacts?.map((contact, index) =>
                                                <li className="user-list-item" onClick={() => contactbyid(contact.id)}>
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar-8.jpg" className="rounded-circle" alt="image" />
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h5>{contact.lastName + " " + contact.firstName}</h5>
                                                            {/* <p>It seems logical that the strategy of providing!</p> */}
                                                        </div>
                                                        <div className="last-chat-time">
                                                            {/* <small className="text-muted">14:45 pm</small> */}
                                                            <div className="chat-toggle mt-1">
                                                                <div className="dropdown">
                                                                    <a type="button dropdown"
                                                                        href="#" data-bs-toggle="dropdown">
                                                                        <i className="fas fa-ellipsis-h"></i>

                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">

                                                                        <div className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => contactbyid(contact.id)}>Details</div>
                                                                        <Link to={`/chatList/${contact.id}`} className="dropdown-item">Chat</Link>
                                                                        <div className="dropdown-divider"></div>
                                                                        <Link className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => deleteById(contact.id)}>Delete</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )

                                        }

                                    </ul>
                                </div>
                                }
                                {/* <!-- /chat list web --> */}

                                {/* <!-- chat settings web --> */}

                                {chatSetting && <Setting closeChatSettings={closeChatSettings} />
                                }
                                {/* <!-- chat settings web --> */}
                            </div>
                            {/* <!-- / Chats sidebar --> */}
                        </div>
                        {/* <!-- /web Sidebar group --> */}


                        {/* <!-- Chat --> */}
                        {chatDetail && <div className="chat" id="middle">
                            <div className="chat-header">
                                <div className="user-details">
                                    <div className="d-lg-none ml-2">
                                        <ul className="list-inline mt-2 mr-2">
                                            <li className="list-inline-item">
                                                <span className="text-muted px-0 left_side" data-chat="open">
                                                    <i className="fas fa-arrow-left" onClick={closeChat}></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <figure className="avatar ml-1">
                                        <img src="assets/images/avatar-2.jpg" className="rounded-circle" alt="image" />
                                    </figure>
                                    <div className="mt-1">
                                        <h5 className="mb-1">{contact.lastName + " " + contact.firstName}</h5>

                                    </div>
                                </div>
                                <div className="chat-options">
                                    <ul className="list-inline">
                                        <li className="list-inline-item find">
                                                <div className="search_chat has-search m-0 mb-3 mr-2 list-inline-item" style={{left: "-150px", top: "10px"}}>
                                                    <span className="fas fa-search form-control-feedback"></span>
                                                    <input className="form-control chat_input" id="search-contact" type="text" placeholder="Search chats" />
                                                </div>

                                                <div className="search_chat has-search m-0 mb-3 mr-2 list-inline-item" style={{left: "-145px", top: "10px"}}>
                                                    <span className="fas fa-search form-control-feedback"></span>
                                                    <input className="form-control chat_input" id="search-contact" type="text" placeholder="Search chats" />
                                                </div>

                                                <div className="search_chat has-search m-0 mb-3 mr-2 list-inline-item" style={{left: "-140px", top: "10px"}}>
                                                    <span className="fas fa-search form-control-feedback"></span>
                                                    <input className="form-control chat_input" id="search-contact" type="text" placeholder="Search chats" />
                                                </div>
                                        </li>

                                        <li className="list-inline-item dropdown">
                                            <a type="button" className="nav-link float-right btn btn-outline-light"
                                                href="#" data-bs-toggle="dropdown">
                                                <i className="fas fa-ellipsis-h"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item dream_profile_menu" onClick={openProfile}>Profile</a>
                                                <a href="#" className="dropdown-item">Media, Links and Docs</a>
                                                <a href="#" className="dropdown-item">Search</a>
                                            </div>

                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="chat-body">
                                <div className="chat-body-inner text-center">
                                    <img src="assets/images/avatar-2.jpg" className="empty-page-img" alt="image" />
                                    <h3 className="font-weight-bold">{contact.lastName + " " + contact.firstName}</h3>
                                    <small>{"Email: " + contact.email + "  " +
                                        "Phone: " + contact.phoneNo}</small>
                                </div>
                            </div>

                        </div>
                        }
                        {/* <!-- /Chat --> */}

                        {/* <!-- Upload Documents --> */}


                        {/* <!-- Right sidebar --> */}
                        {profile && <Profile closeProfile={closeProfile} />
                        }
                        {/* <!-- Right sidebar --> */}

                    </div>
                    {/* <!-- /Content --> */}

                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;
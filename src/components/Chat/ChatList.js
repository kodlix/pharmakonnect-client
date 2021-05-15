import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './Chat.css';
import AppLogo from '../Shared/AppLogo';
import SideBar from './SideBar';
import Profile from './Profile';
import Setting from './Setting';
import { loadConversation, loadConversationById } from '../../store/modules/chat';
import moment from 'moment';



const ChatList = (props) => {
    const dispatch = useDispatch();
    const conversationList = useSelector(state => state.conversation.conversation);
    const conversation = useSelector(state => state.conversation.conversationById);
    const chatId = props.match.params.id;
    console.log(conversationList);
    console.log(conversation)
    useEffect(() => {
        dispatch(loadConversation());
        dispatch(loadConversationById(chatId));
    }, [dispatch]);




    const [chatLis, setchatList] = useState(true);
    const [chatDetail, setchatDetail] = useState(true);
    const [chatSetting, setchatSetting] = useState(false);
    const [profile, setprofile] = useState(false);

    function openChatSettings() {
        setchatSetting(true)
        setchatList(false)
        setchatDetail(true)
    }
    function closeChatSettings() {
        setchatList(true)
        setchatSetting(false)
    }

    function openChat() {
        setchatDetail(true)
        setchatList(false)
        setchatSetting(false)
    }

    function closeChat() {
        setchatDetail(true)
        setchatList(true)
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

                                {chatLis && <div className="sidebar-body" id="webchatsidebar">
                                    <h5 className="nav-item dropdown text-primary fw-bolder mb-4">Chat List
                        <button type="button" className="nav-link float-right btn"
                                            href="contact" data-bs-toggle="dropdown">
                                            Contact
                                        </button>
                                        {/* <div className="dropdown-menu header_drop_icon">
                                            <a className="dropdown-item" data-toggle="modal" data-target="#new_group">
                                                New Group
                            </a>
                                            <a className="dropdown-item" data-toggle="modal" data-target="#chat-new">New Chat</a>
                                            <a className="dropdown-item" onClick={openChatSettings}>
                                                Settings
                            </a>
                                        </div> */}

                                    </h5>
                                    <div className="search_chat has-search m-0 mb-3">
                                        <span className="fas fa-search form-control-feedback"></span>
                                        <input className="form-control chat_input" id="search-contact" type="text" placeholder="Search chats" />
                                    </div>
                                    <ul className="user-list">
                                        {
                                            conversationList?.length > 0 &&
                                            conversationList.map((conversation) =>
                                                <li className="user-list-item" key={conversation.id} >
                                                    <div className="avatar avatar-online">
                                                        <img src="assets/images/avatar-8.jpg" className="rounded-circle" alt="image" />

                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h5>{(() => {
                                                                if (conversation.isGroupChat) { return (conversation.title) } else
                                                                    if (conversation.creatorId === conversation.initiatorId) { return (conversation.channelName) } else { return (conversation.creatorName) }
                                                            })()}</h5>
                                                            <p>It seems logical that the strategy of providing!</p>
                                                        </div>
                                                        <div className="last-chat-time">
                                                            <small className="text-muted">{moment(conversation.updatedOn).startOf('hour').fromNow()}</small>
                                                            <div className="chat-toggle mt-1">
                                                                <div className="dropdown">
                                                                    <a data-toggle="dropdown" href="#">
                                                                        <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item">Open</a>
                                                                        <a href="#" className="dropdown-item dream_profile_menu">Profile</a>
                                                                        <a href="#" className="dropdown-item">Add to archive</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>




                                            )}

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
                                        <h5 className="mb-1">Scott Albrkight</h5>
                                        <small className="text-muted mb-2">
                                            Active 35m ago
                        </small>
                                    </div>
                                </div>

                                <div className="chat-options">
                                    <ul className="list-inline">

                                        <li className="list-inline-item" data-toggle="tooltip" title=""
                                            data-original-title="search chat">
                                            <a className="btn btn-outline-light" data-toggle="modal"
                                                data-target="#chat_search">
                                                <i className="fas fa-search"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title=""
                                            data-original-title="Voice call">
                                            <a className="btn btn-outline-light" data-toggle="modal"
                                                data-target="#voice_call">
                                                <i className="fas fa-phone-alt voice_chat_phone"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title=""
                                            data-original-title="Video call">
                                            <a href="#" className="btn btn-outline-light" data-toggle="modal"
                                                data-target="#video_call">
                                                <i className="fas fa-video"></i>
                                            </a>
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
                                <div className="messages">
                                    <div className="chats">
                                        <div className="chat-avatar">
                                            <img src="assets/images/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
                                        </div>
                                        <div className="chat-content">
                                            <div className="message-content">
                                                Hi James! What’s Up?
                            </div>
                                            <div className="chat-time">
                                                <div>
                                                    <div className="time">Yesterday 14:26 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-action-btns">
                                            <ul>
                                                <li><a href="#" className="share-msg" title="Share"><i className="fas fa-share"></i></a>
                                                </li>
                                                <li><a href="#" className="edit-msg"><i className="fas fa-edit"></i></a></li>
                                                <li><a href="#" className="del-msg"><i className="fas fa-trash-alt"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="chats chats-right">
                                        <div className="chat-content">
                                            <div className="message-content">
                                                Oh, hello! All perfectly. I work, study and know this wonderful world!
                            </div>
                                            <div className="chat-time">
                                                <div>
                                                    <div className="time">Yesterday 14:38 PM <i><img src="assets/images/double-tick.png" alt="" /></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="chat-footer">
                                <form>
                                    <input type="text" className="form-control chat_form" placeholder="Write a message." />
                                    <div className="form-buttons">
                                        <button className="btn" type="button">
                                            <i className="far fa-smile"></i>
                                        </button>
                                        <button className="btn" type="button" data-toggle="modal" data-target="#drag_files">
                                            <i className="fas fa-paperclip"></i>
                                        </button>
                                        <button className="btn" type="button">
                                            <i className="fas fa-microphone-alt"></i>
                                        </button>
                                        <button className="btn send-btn" type="submit">
                                            <i className="fab fa-telegram-plane"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        }
                        {/* <!-- /Chat --> */}


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

export default ChatList;
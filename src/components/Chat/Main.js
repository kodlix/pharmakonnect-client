import React from 'react';
import './Chat.css';


const Main = () => {
    return (
        <React.Fragment>
            <div id="main">
        {/* <!-- Main Wrapper --> */}
    <div className="main-wrapper">
	
        {/* <!-- content --> */}
        <div className="content main_content">
		
            {/* <!-- sidebar group --> */}
            <div className="sidebar-group left-sidebar chat_sidebar">
                {/* <!-- Chats sidebar --> */}
                <div id="chats" className="left-sidebar-wrap sidebar active"> 
                    <div className="header">
                        <div className="header-top">
                            <div className="logo ml-2 mt-3">
                                <h3 className="fw-bolder text-light">PharmaConn3ct</h3>
                                {/* <!-- <a href="index.html">
                                    <img src="assets/img/logo.png" className="header_image img-fluid" alt="">
                                </a> --> */}
                            </div>
                            <ul className="header-action mt-4">
                                <li>
                                    <a href="#" data-toggle="dropdown">
                                        <i className="fas fa-ellipsis-h ellipse_header"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right header_drop_icon">
                                        <a className="dropdown-item" data-toggle="modal" data-target="#new_group">
											New Group
										</a>
                                        <a className="dropdown-item" data-toggle="modal" data-target="#profile_modal">Profile</a>
                                        <a className="dropdown-item" data-toggle="modal"
                                            data-target="#settings_modal">Settings</a>
                                        <a href="login.html" className="dropdown-item">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className="nav nav-tabs chat-tabs mt-4">
                            <li className="nav-item">
                                <a className="nav-link  active" href="index.html">Chats</a>
                            </li>                          
                            <li className="nav-item ml-1">
                                <a className="nav-link" href="group.html">Contacts</a>
                            </li>
                            <li className="nav-item ml-1">
                                <a className="nav-link" href="status.html">Status</a>
                            </li>
                            <li className="nav-item ml-1">
                                <a className="nav-link" href="call-log.html">Call</a>
                            </li>
                        </ul>
                        <button type="button" className="float-right btn btn-circle btn-sm header_button"
                            data-toggle="modal" data-target="#chat-new">
                            <i className="fas fa-plus button_plus"></i>
                        </button>
                    </div>
                    <div className="search_chat has-search">
                        <span className="fas fa-search form-control-feedback"></span>
                        <input className="form-control chat_input" id="search-contact" type="text" placeholder="" />
                    </div>
                    <div className="sidebar-body" id="chatsidebar">
                        <ul className="user-list">
                            <li className="user-list-item">
                                <div className="avatar avatar-online">
                                    <img src="assets/img/avatar-8.jpg" className="rounded-circle" alt="image" />
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Regina Dickerson</h5>
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">14:45 pm</small>
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
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-away">
                                        <img src="assets/img/avatar-7.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Kevin Howard</h5>
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">08:45 pm</small>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        className="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-offline">
                                        <img src="assets/img/avatar-1.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5 className="list_group_notread">Eric Knight</h5>
                                        <p>Welcome to the community mate! 👍</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">Yesterday</small>
                                        <div className="new-message-count"></div>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        className="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item unread">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar-2.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Scott Albright</h5>
                                        <p>I remember everything mate. See you later 🤘</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">06:18 am</small>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i className="fas fa-ellipsis-h ellipse_header open_drop"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        className="dropdown-item dr_menu">Profile</a>
                                                    <a href="#" className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-away">
                                        <img src="assets/img/avatar-3.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5 className="list_group_notread">Irene Perkins</h5>
                                        <p><i className="fa fa-camera mr-1"></i> I will miss you, too, my dear!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">Yesterday</small>
                                        <div className="new-message-count"></div>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        className="dropdown-item dream_profile_menu" >Profile</a>
                                                    <a href="#" className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src="assets/img/avatar-4.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5 className="list_group_notread">Carol Andre</h5>
                                        <p><i className="fa fa-camera mr-1"></i> Photo</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">Yesterday</small>
                                        <div className="new-message-count"></div>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        className="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> 
                {/* <!-- / Chats sidebar --> */}
            </div>
            {/* <!-- /Sidebar group --> */}

            {/* <!-- Chat --> */}
            <div className="chat" id="middle">
              <div className="chat-header">
                  <div className="user-details">
                      <div className="d-lg-none ml-2">
                          <ul className="list-inline mt-2 mr-2">
                              <li className="list-inline-item">
                                  <a className="text-muted px-0 left_side" href="#" data-chat="open">
                                      <i className="fas fa-arrow-left"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <figure className="avatar ml-1">
                          <img src="assets/img/carousel1.jpg" className="rounded-circle" alt="image" />
                      </figure>
                      <div className="mt-1">
                          <h5 className="mb-1">Dreams Team</h5>
                          <small className="text-muted mb-2">
                              Active
                          </small>
                      </div>
                  </div>
                  <div className="avatar-group">
                      <div className="avatar avatar-xs group_img group_header">
                          <img className="avatar-img rounded-circle border border-white" alt="User Image"
                              src="assets/img/avatar-1.jpg" />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                          <img className="avatar-img rounded-circle border border-white" alt="User Image"
                              src="assets/img/avatar-7.jpg" />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                          <span className="avatar-title rounded-circle border border-white">10+</span>
                      </div>
                      <div className="search_chat has-search m-0 ml-2">
                        <span className="fas fa-search form-control-feedback"></span>
                        <input className="form-control chat_input" id="search-contact" type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="chat-options">
                      <ul className="list-inline">
                          <li className="list-inline-item" data-toggle="tooltip" title=""
                              data-original-title="Voice call">
                              <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                  data-target="#voice_call">
                                  <i className="fas fa-phone-alt voice_chat_phone"></i>
                              </a>
                          </li>
                          <li className="list-inline-item" data-toggle="tooltip" title=""
                              data-original-title="Video call">
                              <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                  data-target="#video_call">
                                  <i className="fas fa-video"></i>
                              </a>
                          </li>
                          <li className="list-inline-item">
                              <a className="btn btn-outline-light" href="#" data-toggle="dropdown">
                                  <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item dream_profile_menu">Profile</a>
                                <a href="#" className="dropdown-item">Media, Links and Docs</a>
                                <a href="#" className="dropdown-item">Search</a>
                                <a href="#" className="dropdown-item">Mute Notifications</a>
                                <a href="#" className="dropdown-item">Report</a>
                                <a href="#" className="dropdown-item">Clear Chat</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="chat-body">
                  <div className="messages">
                      <div className="chats">
                          <div className="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
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
                                      <div className="time">Yesterday 14:38 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="chats">
                          <div className="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div className="chat-content">
                              <div className="message-content">
                                  Ok Cool, Where you from
                              </div>
                              <div className="chat-time">
                                  <div>
                                      <div className="time">Yesterday 14:40 PM</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="chats chats-right">

                          <div className="chat-content">
                              <div className="message-content">
                                  I am from California, and you?
                              </div>
                              <div className="chat-time">
                                  <div>
                                      <div className="time">Yesterday 14:42 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
          <div className="chat-line">
            <span className="chat-date">Today</span>
          </div>

                      <div className="chats">
                          <div className="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div className="chat-content">
                              <div className="message-content">
                                  I am from Australia, and where you working?
                              </div>
                              <div className="chat-time">
                                  <div>
                                      <div className="time">14:26 PM</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="chats chats-right">

                          <div className="chat-content">
                              <div className="message-content">
                                  Oh Cool, Yeah i am working here famous software company
                              </div>
                              <div className="chat-time">
                                  <div>
                                      <div className="time">14:29 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="chats">
                          <div className="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div className="chat-content">
                              <div className="message-content">
                                  That's Good Lol, What is your designation?
                              </div>
                              <div className="chat-time">
                                  <div>
                                      <div className="time">14:30 PM</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="chats chats-right">

                          <div className="chat-content">
                              <div className="message-content">
                                  I am senior software engineer.
                              </div>
                              <div className="chat-time">
                                  <div>
                                      <div className="time">14:32 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
          <div className="chat-line">
            <span className="chat-date">1 message unread</span>
          </div>

                      <div className="chats">
                          <div className="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div className="chat-content">
                              <div className="message-content">
                                  Good.!!!
                              </div>
                              <div className="chat-time">
                                  <div>
                                      <div className="time">14:33 PM</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="chats chats-right">

                          <div className="chat-content">
                              <div className="message-content">
                                  Yeah, Thank you..
                              </div>
                              <div className="chat-time">
                                  <div>
                                      <div className="time">14:34 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
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
            {/* <!-- /Chat --> */}

            {/* <!-- Upload Documents --> */}
            <div id="drag_files" className="modal fade" role="dialog">
              <div className="modal-dialog modal-md modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h4 className="modal-title">Drag and drop files upload</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                          <form id="js-upload-form">
                              <div className="upload-drop-zone" id="drop-zone">
                                  <i className="fa fa-cloud-upload fa-2x"></i> <span className="upload-text">Just drag and
                                      drop files here</span>
                              </div>
                          </form>
                          <div className="text-center mt-0">
                              <button className="btn newgroup_create m-0" data-dismiss="modal">Add to upload</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Upload Documents --> */}

            {/* <!-- Voice call --> */}
            <div className="modal fade voice_pop" id="voice_call" role="document">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content voice_content ml-3">
                      <div className="modal-body voice_body">
                          <div className="call-box incoming-box">
                              <div className="call-wrapper">
                                  <div className="call-inner">
                                      <div className="call-user">
                                          <img alt="User Image" src="assets/img/avatar-2.jpg" className="call-avatar" />
                                          <h4>Tobbias Williams</h4>
                                          <span className="chat_cal">calling...</span>
                                      </div>
                                      <div className="call-items">
                                          <a href="#" className="btn call-item call-end" data-dismiss="modal">
                                              <i className="fas fa-phone-alt phone_icon"></i></a>
                                          <a href="#" className="btn call-item call-start" data-dismiss="modal"> <i
                                                  className="fas fa-phone-alt"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Voice call --> */}

            {/* <!-- Video Call --> */}
            <div className="modal fade voice_pop" id="video_call" role="document">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content voice_content ml-3">
                      <div className="modal-body voice_body">
                          <div className="call-box incoming-box">
                              <div className="call-wrapper">
                                  <div className="call-inner">
                                      <div className="call-user">
                                          <img alt="User Image" src="assets/img/avatar-2.jpg" className="call-avatar" />
                                          <h4>Tobbias Williams</h4>
                                          <span className="chat_cal">calling...</span>
                                      </div>
                                      <div className="call-items">
                                          <a href="#" className="btn call-item call-end" data-dismiss="modal"><i
                                                  className="fas fa-phone-alt phone_icon"></i></a>
                                          <a href="#" className="btn call-item call-start" data-dismiss="modal">
                                              <i className="fas fa-video"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Video Call --> */}

            {/* <!-- Chat New Modal --> */}
            <div className="modal fade" id="new_group">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">
                              New Group
                          </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <i className="fas fa-times close_icon"></i>
                          </button>
                      </div>
                      <div className="modal-body">
                          {/* <!-- Tabs --> */}
                          <ul className="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                              <li className="nav-item">
                                  <a href="#create-group-details" className="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Details</a>
                              </li>

                              <li className="nav-item">
                                  <a href="#create-group-members" className="nav-link" data-toggle="tab" role="tab" aria-selected="false">Members</a>
                              </li>
                          </ul>
                          {/* <!-- Tabs -->    */}
                          {/* <!-- Create chat --> */}
                          <div className="tab-content" role="tablist">
                              {/* <!-- Chat details --> */}
                              <div id="create-group-details" className="tab-pane fade show active"
                                  role="tabpanel">
                                  <form action="#">
                                      <div className="form-group">
                                          <label>Name</label>
                                          <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Group Name" />
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="new-chat-topic">Topic (optional)</label>
                                          <input className="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic" />
                                      </div>
                                      <div className="form-group mb-0">
                                          <label htmlFor="new-chat-description">Description</label>
                                          <textarea className="form-control form-control-lg group_control_text" name="new-chat-description" id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                      </div>
                                  </form>
                              </div>
                              {/* <!-- Chat details --> */}
                              
                              {/* <!-- Chat Members --> */}
                              <div id="create-group-members" className="tab-pane fade create-group-members" role="tabpanel">
                                  <nav className="list-group list-group-flush mb-n6">
                                      {/* <!-- Search --> */}
                                      <form className="mb-3 newgroup_content">
                                          <div className="input-group">
                                              <input type="text" className="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                              <div className="input-group-append">
                                                  <button className="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                                                      <i className="fas fa-search newgroup_fa_search"></i>
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                      {/* <!-- Search --> */}
                                      <div className="mb-6">
                                          <small className="text-uppercase">A</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="card mb-6 group_card_mb">
                                          <div className="card-body">
                                              <div className="media">
                                                  <div className="avatar avatar-online mr-5">
                                                      <img className="avatar-img group_image" src="assets/img/avatar-7.jpg" alt="Anna Bridges" />
                                                  </div>
                                                  <div
                                                      className="media-body align-self-center mr-6 group_card_media">
                                                      <h6 className="mb-0">Anna Bridges</h6>
                                                      <small className="text-muted">Online</small>
                                                  </div>
                                                  <div className="align-self-center ml-auto">
                                                      <div className="custom-control custom-checkbox">
                                                          <input className="custom-control-input" id="id-user-1" type="checkbox" />
                                                          <label className="custom-control-label" htmlFor="id-user-1"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label className="stretched-label" htmlFor="id-user-1"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="mb-6">
                                          <small className="text-uppercase">B</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="card mb-6 group_card_mb">
                                          <div className="card-body">
                                              <div className="media">
                                                  <div className="avatar mr-5">
                                                      <img className="avatar-img group_image" src="assets/img/avatar-1.jpg" alt="Brian Dawson" />
                                                  </div>
                                                  <div className="media-body align-self-center mr-6 group_card_media">
                                                      <h6 className="mb-0">Brian Dawson</h6>
                                                      <small className="text-muted">last seen 2 hours ago</small>
                                                  </div>
                                                  <div className="align-self-center ml-auto">
                                                      <div className="custom-control custom-checkbox">
                                                          <input className="custom-control-input" id="id-user-2" type="checkbox" />
                                                          <label className="custom-control-label" htmlFor="id-user-2"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label className="stretched-label" htmlFor="id-user-2"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="mb-6">
                                          <small className="text-uppercase">L</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="card mb-6 group_card_mb">
                                          <div className="card-body">
                                              <div className="media">
                                                  <div className="avatar mr-5">
                                                      <img className="avatar-img group_image" src="assets/img/avatar-2.jpg" alt="Leslie Sutton" />
                                                  </div>
                                                  <div className="media-body align-self-center mr-6 group_card_media">
                                                      <h6 className="mb-0">Leslie Sutton</h6>
                                                      <small className="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div className="align-self-center ml-auto">
                                                      <div className="custom-control custom-checkbox">
                                                          <input className="custom-control-input" id="id-user-3" type="checkbox" />
                                                          <label className="custom-control-label" htmlFor="id-user-3"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label className="stretched-label" htmlFor="id-user-3"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="mb-6">
                                          <small className="text-uppercase">M</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="card mb-6 group_card_mb">
                                          <div className="card-body">
                                              <div className="media">
                                                  <div className="avatar mr-5">
                                                      <img className="avatar-img group_image" src="assets/img/avatar-3.jpg" alt="Matthew Wiggins" />
                                                  </div>
                                                  <div className="media-body align-self-center mr-6 group_card_media">
                                                      <h6 className="mb-0">Matthew Wiggins</h6>
                                                      <small className="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div className="align-self-center ml-auto">
                                                      <div className="custom-control custom-checkbox">
                                                          <input className="custom-control-input" id="id-user-4" type="checkbox" />
                                                          <label className="custom-control-label" htmlFor="id-user-4"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label className="stretched-label" htmlFor="id-user-4"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="mb-6">
                                          <small className="text-uppercase">S</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="card mb-6 group_card_mb">
                                          <div className="card-body">
                                              <div className="media">
                                                  <div className="avatar mr-5">
                                                      <img className="avatar-img group_image" src="assets/img/avatar-4.jpg" alt="Simon Hensley" />
                                                  </div>
                                                  <div className="media-body align-self-center mr-6 group_card_media">
                                                      <h6 className="mb-0">Simon Hensley</h6>
                                                      <small className="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div className="align-self-center ml-auto">
                                                      <div className="custom-control custom-checkbox">
                                                          <input className="custom-control-input" id="id-user-5" type="checkbox" />
                                                          <label className="custom-control-label" htmlFor="id-user-5"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label className="stretched-label" htmlFor="id-user-5"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="mb-6">
                                          <small className="text-uppercase">W</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="card mb-6 group_card_mb">
                                          <div className="card-body">
                                              <div className="media">
                                                  <div className="avatar mr-5">
                                                      <img className="avatar-img group_image" src="assets/img/avatar-5.jpg" alt="William Wright" />
                                                  </div>
                                                  <div className="media-body align-self-center mr-6 group_card_media">
                                                      <h6 className="mb-0">William Wright</h6>
                                                      <small className="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div className="align-self-center ml-auto">
                                                      <div className="custom-control custom-checkbox">
                                                          <input className="custom-control-input" id="id-user-6" type="checkbox" />
                                                          <label className="custom-control-label" htmlFor="id-user-6"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label className="stretched-label" htmlFor="id-user-6"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      {/* <!-- Friend --> */}
                                      <div className="card mb-6 group_card_mb">
                                          <div className="card-body">
                                              <div className="media">
                                                  <div className="avatar mr-5">
                                                      <img className="avatar-img group_image" src="assets/img/avatar-6.png" alt="William Greer" />
                                                  </div>
                                                  <div className="media-body align-self-center mr-6 group_card_media">
                                                      <h6 className="mb-0">William Greer</h6>
                                                      <small className="text-muted">last seen 10 minutes ago</small>
                                                  </div>
                                                  <div className="align-self-center ml-auto">
                                                      <div className="custom-control custom-checkbox">
                                                          <input className="custom-control-input" id="id-user-7" type="checkbox" />
                                                          <label className="custom-control-label" htmlFor="id-user-7"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label className="stretched-label" htmlFor="id-user-7"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="mb-6">
                                          <small className="text-uppercase">Z</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div className="card mb-6 group_card_mb">
                                          <div className="card-body">
                                              <div className="media">
                                                  <div className="avatar mr-5">
                                                      <img className="avatar-img group_image" src="assets/img/avatar-8.jpg" alt="Zane Mayes" />
                                                  </div>
                                                  <div
                                                      className="media-body align-self-center mr-6 group_card_media">
                                                      <h6 className="mb-0">Zane Mayes</h6>
                                                      <small className="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div className="align-self-center ml-auto">
                                                      <div className="custom-control custom-checkbox">
                                                          <input className="custom-control-input" id="id-user-8" type="checkbox" />
                                                          <label className="custom-control-label" htmlFor="id-user-8"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label className="stretched-label" htmlFor="id-user-8"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                  </nav>
                              </div>
                              {/* <!-- Chat Members --> */}
                          </div>
                          {/* <!-- Create chat --> */}
                          {/* <!-- Button --> */}
                          <div className="pt-3">
                              <div className="container text-center">
                                  <button className="btn btn-block newgroup_create mb-1 mt-0" type="submit" data-dismiss="modal">Create group</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Chat New Modal --> */}

            {/* <!-- New group modal --> */}
            <div className="modal fade" id="new_group">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                New Group
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <!-- Tabs --> */}
                            <ul className="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                                <li className="nav-item">
                                    <a href="#create-group-details" className="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Details</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#create-group-members" className="nav-link" data-toggle="tab" role="tab" aria-selected="false">Members</a>
                                </li>
                            </ul>
                            {/* <!-- Tabs --> */}
                            {/* <!-- Create chat --> */}
                            <div className="tab-content" role="tablist">
                                {/* <!-- Chat details --> */}
                                <div id="create-group-details" className="tab-pane fade show active"
                                    role="tabpanel">
                                    <form action="#">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Group Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="new-chat-topic">Topic (optional)</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="new-chat-description">Description</label>
                                            <textarea className="form-control form-control-lg group_control_text" name="new-chat-description" id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- Chat details --> */}
								
                                {/* <!-- Chat Members --> */}
                                <div id="create-group-members" className="tab-pane fade create-group-members" role="tabpanel">
                                    <nav className="list-group list-group-flush mb-n6">
                                        {/* <!-- Search --> */}
                                        <form className="mb-3 newgroup_content">
                                            <div className="input-group">
                                                <input type="text" className="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                                <div className="input-group-append">
                                                    <button className="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                                                        <i className="fas fa-search newgroup_fa_search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        {/* <!-- Search --> */}
                                        <div className="mb-6">
                                            <small className="text-uppercase">A</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="card mb-6 group_card_mb">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="avatar avatar-online mr-5">
                                                        <img className="avatar-img group_image" src="assets/img/avatar-7.jpg" alt="Anna Bridges" />
                                                    </div>
                                                    <div
                                                        className="media-body align-self-center mr-6 group_card_media">
                                                        <h6 className="mb-0">Anna Bridges</h6>
                                                        <small className="text-muted">Online</small>
                                                    </div>
                                                    <div className="align-self-center ml-auto">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="id-user-1" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="id-user-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label className="stretched-label" htmlFor="id-user-1"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="mb-6">
                                            <small className="text-uppercase">B</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="card mb-6 group_card_mb">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="avatar mr-5">
                                                        <img className="avatar-img group_image" src="assets/img/avatar-1.jpg" alt="Brian Dawson" />
                                                    </div>
                                                    <div className="media-body align-self-center mr-6 group_card_media">
                                                        <h6 className="mb-0">Brian Dawson</h6>
                                                        <small className="text-muted">last seen 2 hours ago</small>
                                                    </div>
                                                    <div className="align-self-center ml-auto">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="id-user-2" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="id-user-2"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label className="stretched-label" htmlFor="id-user-2"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="mb-6">
                                            <small className="text-uppercase">L</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="card mb-6 group_card_mb">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="avatar mr-5">
                                                        <img className="avatar-img group_image" src="assets/img/avatar-2.jpg" alt="Leslie Sutton" />
                                                    </div>
                                                    <div className="media-body align-self-center mr-6 group_card_media">
                                                        <h6 className="mb-0">Leslie Sutton</h6>
                                                        <small className="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div className="align-self-center ml-auto">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="id-user-3" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="id-user-3"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label className="stretched-label" htmlFor="id-user-3"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="mb-6">
                                            <small className="text-uppercase">M</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="card mb-6 group_card_mb">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="avatar mr-5">
                                                        <img className="avatar-img group_image" src="assets/img/avatar-3.jpg" alt="Matthew Wiggins" />
                                                    </div>
                                                    <div className="media-body align-self-center mr-6 group_card_media">
                                                        <h6 className="mb-0">Matthew Wiggins</h6>
                                                        <small className="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div className="align-self-center ml-auto">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="id-user-4" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="id-user-4"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label className="stretched-label" htmlFor="id-user-4"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="mb-6">
                                            <small className="text-uppercase">S</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="card mb-6 group_card_mb">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="avatar mr-5">
                                                        <img className="avatar-img group_image" src="assets/img/avatar-4.jpg" alt="Simon Hensley" />
                                                    </div>
                                                    <div className="media-body align-self-center mr-6 group_card_media">
                                                        <h6 className="mb-0">Simon Hensley</h6>
                                                        <small className="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div className="align-self-center ml-auto">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="id-user-5" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="id-user-5"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label className="stretched-label" htmlFor="id-user-5"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="mb-6">
                                            <small className="text-uppercase">W</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="card mb-6 group_card_mb">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="avatar mr-5">
                                                        <img className="avatar-img group_image" src="assets/img/avatar-5.jpg" alt="William Wright" />
                                                    </div>
                                                    <div className="media-body align-self-center mr-6 group_card_media">
                                                        <h6 className="mb-0">William Wright</h6>
                                                        <small className="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div className="align-self-center ml-auto">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="id-user-6" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="id-user-6"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label className="stretched-label" htmlFor="id-user-6"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        {/* <!-- Friend --> */}
                                        <div className="card mb-6 group_card_mb">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="avatar mr-5">
                                                        <img className="avatar-img group_image" src="assets/img/avatar-6.png" alt="William Greer" />
                                                    </div>
                                                    <div className="media-body align-self-center mr-6 group_card_media">
                                                        <h6 className="mb-0">William Greer</h6>
                                                        <small className="text-muted">last seen 10 minutes ago</small>
                                                    </div>
                                                    <div className="align-self-center ml-auto">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="id-user-7" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="id-user-7"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label className="stretched-label" htmlFor="id-user-7"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="mb-6">
                                            <small className="text-uppercase">Z</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div className="card mb-6 group_card_mb">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="avatar mr-5">
                                                        <img className="avatar-img group_image" src="assets/img/avatar-8.jpg" alt="Zane Mayes" />
                                                    </div>
                                                    <div
                                                        className="media-body align-self-center mr-6 group_card_media">
                                                        <h6 className="mb-0">Zane Mayes</h6>
                                                        <small className="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div className="align-self-center ml-auto">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="id-user-8" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="id-user-8"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label className="stretched-label" htmlFor="id-user-8"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                    </nav>
                                </div>
                                {/* <!-- Chat Members --> */}
                            </div>
                            {/* <!-- Create chat --> */}
                            {/* <!-- Button --> */}
                            <div className="pt-3">
                                <div className="container text-center">
                                    <button className="btn btn-block newgroup_create mb-1 mt-0" type="submit" data-dismiss="modal">Create group</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /New group modal --> */}

            {/* <!-- Profile Modal --> */}
            <div className="modal fade" id="profile_modal">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">
                              Profile
                          </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <i className="fas fa-times close_icon"></i>
                          </button>
                      </div>
                      <div className="modal-body">
                          {/* <!-- Card --> */}
                          <div className="card mb-6 profile_Card">
                              <div className="card-body">
                                  <div className="text-center py-6">
                                      {/* <!-- Photo --> */}
                                      <div className="avatar avatar-xl mb-3">
                                          <img className="avatar-img rounded-circle mCS_img_loaded" src="assets/img/avatar-5.jpg" alt="" /><i className="fas fa-camera" title="edit image"></i>
                                      </div>
                                      <h5>John Janousek</h5>
                                      <p className="text-muted m-0">Last seen: Today</p>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- Card --> */}
                          {/* <!-- Card --> */}
                          <form action="#" className="mt-3">
                              <div className="form-group">
                                  <label>Country</label>
                                  <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Country Name" />
                              </div>
                              <div className="form-group">
                                  <label>Phone</label>
                                  <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19" />
                              </div>
                              <div className="form-group">
                                  <label>Email</label>
                                  <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="johnjanousek@gmail.com" />
                              </div>
                          </form>
                          {/* <!-- Card --> */}
                          <div className="form-row profile_form mt-3 mb-1">
                              {/* <!-- Button --> */}
                              <button type="button" className="btn btn-block newgroup_create mb-0" data-dismiss="modal">
                                  Update Profile
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Profile Modal --> */}

            {/* <!-- Settings Modal --> */}
            <div className="modal fade" id="settings_modal">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">
                              Settings
                          </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <i className="fas fa-times close_icon"></i>
                          </button>
                      </div>
                      <div className="modal-body">
                          <div className="card-header position-relative account_details">
                              <a href="#" className="text-reset d-block stretched-link collapsed">
                                  <div className="row no-gutters align-items-center">
                                      {/* <!-- Title --> */}
                                      <div className="col">
                                          <h5>Account</h5>
                                          <p className="m-0">Update your profile details.</p>
                                      </div>
                                      {/* <!-- Icon --> */}
                                      <div className="col-auto">
                                          <i className="text-muted icon-md fas fa-user"></i>
                                      </div>
                                  </div>
                              </a>
                          </div>
                          <div className="card-header position-relative mt-3 security_details">
                              <a href="#" className="text-reset d-block stretched-link collapsed">
                                  <div className="row no-gutters align-items-center">
                                      {/* <!-- Title --> */}
                                      <div className="col">
                                          <h5>Security</h5>
                                          <p className="m-0">Update your profile details.</p>
                                      </div>
                                      {/* <!-- Icon --> */}
                                      <div className="col-auto">
                                          <i className="text-muted icon-md fas fa-crosshairs"></i>
                                      </div>
                                  </div>
                              </a>
                          </div>
                          <div className="mt-3">
                              <label htmlFor="profile-name">Name</label>
                              <input className="form-control form-control-lg profile_input group_formcontrol" name="profile-name" id="profile-name" type="text" placeholder="Type your name" />
                          </div>
                          <div className="mt-4">
                              <label htmlFor="profile-name">Current Password</label>
                              <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_pswd" type="text" placeholder="Current Password" />
                          </div>
                          <div className="mt-4">
                              <label htmlFor="profile-name">New Password</label>
                              <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_new" type="text" placeholder="New Password" />
                          </div>
                          <div className="mt-4">
                              <label htmlFor="profile-name">Verify Password</label>
                              <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_prfname" type="text" placeholder="Verify Password" />
                          </div>
                          <div className="mt-3 text-center">
                              <button className="btn btn-block newgroup_create mb-0" type="submit" data-dismiss="modal">Save Settings</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Settings Modal --> */}

            {/* <!-- Right sidebar --> */}
            <div className="right-sidebar right_sidebar_profile" id="middle1">
              <div className="right-sidebar-wrap profile_wrap_right member_sidebar active">
                  <div className="contact-close_call mr-4 mt-4 text-right">
                      <a href="#"
                          className="btn btn-outline-light close_profile close_profile4">
                          <i className="fas fa-times close_icon"></i>
                      </a>
                  </div>
                  <div className="sidebar-body">
                      <div className="pl-4 pr-4 right_sidebar_logo">
                          <div className="text-center mb-3">
                              <figure className="avatar avatar-xl mb-3">
                                  <img src="assets/img/carousel1.jpg" className="rounded-circle" alt="image" />
                              </figure>
                              <h5 className="mb-1 profile-name">Dreams Team</h5>
                          </div>
                          <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified profile-tabs">
                              <li className="nav-item">
                                  <a className="nav-link active" href="#info">Info</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#member">Members</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#addmember"><i className="fas fa-user-plus"></i></a>
                            </li>
                          </ul>
                          {/* <!-- Tab panes --> */}
                          <div className="tab-content rightside_tab">
                              <div id="info" className="tab-pane active"><br />  
                                  <div className="accordion-col">
                                      <div className="accordion-title">
                                          <h6 className="primary-title">Media (31) <i className="fas fa-chevron-right float-right"></i></h6>
                                      </div>
                                      <div className="accordion-content">
                                          <div className="media-lists">
                                              <div className="media-image">
                                                  <img src="assets/img/media1.jpg" alt="" />
                                              </div>
                                              <div className="media-image">
                                                  <img src="assets/img/media2.jpg" alt="" />
                                              </div>
                                              <div className="media-image">
                                                  <img src="assets/img/media3.jpg" alt="" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-title">
                                          <h6 className="primary-title">About<i className="fas fa-chevron-right float-right"></i></h6>
                                      </div>
                                      <div className="accordion-content">
                                          <p className="text-muted text-center mt-1">Help people to build websites and apps + grow
                                              awareness in social media 🔥</p>
                                          {/* <!-- <div className="mt-2 text-center">
                                              <h6>Phone: <span className="text-muted ml-2">+(33 1) 45 55 01 10</span></h6>
                                          </div> --> */}
                                      </div>
                                      <div className="accordion-title">
                                          <h6 className="primary-title">Settings <i className="fas fa-chevron-right float-right"></i></h6>
                                      </div>
                                      <div className="accordion-content">
                                          <ul className="contact-action">
                                              <li className="block-user mt-1">
                                                  <a href="#"><i className="fas fa-ban mr-2 text-muted"></i>Block</a>
                                              </li>
                                              <li className="report-contact">
                                                  <a href="#"><i className="fas fa-thumbs-down mr-2"></i> Report Contact</a>
                                              </li>
                                              <li className="delete-chat">
                                                  <a href="#"><i className="fas fa-trash-alt mr-2"></i> Delete Chat</a>
                                              </li>
                                              <li className="exit-group">
                                                <a href="#"><i className="fas fa-trash-alt mr-2"></i> Exit Group</a>
                                            </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div id="member" className="tab-pane"><br />
                                  <div>
                                      <h6 className="primary-title">20 Participants <i
                                              className="fas fa-chevron-right float-right"></i></h6>
                                      <div className="list-group list-group-flush">
                                          <a href="#" className="list-group-item list-group-item-action">
                                              <div className="media align-items-center">
                                                  <div className="mr-3">
                                                      <img alt="Image placeholder" src="assets/img/avatar-8.jpg"
                                                          className="avatar  rounded-circle" />
                                                  </div>
                                                  <div className="media-body">
                                                      <h6 className="text-sm d-block text-truncate mb-0">Regina Dickerson
                                                      </h6>
                                                      <span className="d-block text-sm text-muted">At Work</span>
                                                  </div>
                                              </div>
                                          </a>
                                          <a href="#" className="list-group-item list-group-item-action">
                                              <div className="media align-items-center">
                                                  <div className="mr-3">
                                                      <img alt="Image placeholder" src="assets/img/avatar-7.jpg"
                                                          className="avatar  rounded-circle" />
                                                  </div>
                                                  <div className="media-body">
                                                      <h6 className="text-sm d-block text-truncate mb-0">Kevin Howard
                                                      </h6>
                                                      <span className="d-block text-sm text-muted">At Work</span>
                                                  </div>
                                              </div>
                                          </a>
                                          <a href="#" className="list-group-item list-group-item-action">
                                              <div className="media align-items-center">
                                                  <div className="mr-3">
                                                      <img alt="Image placeholder" src="assets/img/avatar-1.jpg"
                                                          className="avatar  rounded-circle" />
                                                  </div>
                                                  <div className="media-body">
                                                      <h6 className="text-sm d-block text-truncate mb-0">Eric Knight
                                                      </h6>
                                                      <span className="d-block text-sm text-muted">At Work</span>
                                                  </div>
                                              </div>
                                          </a>
                                          <div className="view-more ml-4 mt-3">
                                              <a href="#"><i className="fas fa-chevron-down mr-1"></i> <span>17
                                                      More</span></a>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                              <div id="addmember" className="tab-pane"><br />
                                <div className="accordion-col">
                                    <div className="accordion-title">
                                        <h6 className="primary-title">Invite Link <i className="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div className="accordion-content">
                                        <p className="text-muted text-center mt-1">https://pharmaconnect/hrkdksj@#&$%)*!@%</p>
                                        <a href="#" className="text-muted"><i className="fas fa-copy"></i> Copy Link</a><br />
                                        <a href="#" className="text-muted"><i className="fas fa-share-alt"></i> Share Link</a><br />
                                        <a href="#" className="text-muted"><i className="fas fa-minus-circle"></i> Reset Link</a><br />
                                    </div>
                                    <div className="accordion-title">
                                        <h6 className="primary-title">By Username<i className="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div className="accordion-content">
                                        <input className="form-control chat_input" id="username" type="text" placeholder="username" />
                                    </div>
                                    <div className="accordion-title">
                                        <h6 className="primary-title">By E-mail<i className="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div className="accordion-content">
                                        <input className="form-control chat_input" id="email" type="email" placeholder="@" />
                                    </div>
                                    <div className="accordion-title">
                                        <h6 className="primary-title">By Phone Number<i className="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div className="accordion-content">
                                        <input className="form-control chat_input" id="phone" type="text" placeholder="phone number" />
                                    </div>
                                    <div className="accordion-title">
                                        <h6 className="primary-title">By Contacts<i className="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div className="accordion-content">
                                        <div className="search_chat m-0 has-search">
                                            <span className="fas fa-search form-control-feedback"></span>
                                            <input className="form-control chat_input" id="search-contact" type="text" placeholder="" />
                                        </div>
                                       
                                            <ul className="user-list">
                                                <li className="user-list-item mt-2">
                                                    <div className="avatar avatar-online">
                                                        <img src="assets/img/avatar-8.jpg" className="rounded-circle" alt="image" />
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h6 className="font-weight-bolder">Regina Dickerson</h6>
                                                            <span className="font-weight-bold text-success">Phone: <br /> <small className="">+234 703 797 7478</small> </span> <hr />
                                                            <span className="font-weight-bold text-success">E-mail: <br /> <small className="">reginadickerson@gmail.com</small> </span>
                                                        </div>
                                                         
                                                    </div>
                                                </li>
                                                <li className="user-list-item">
                                                    <div>
                                                        <div className="avatar avatar-away">
                                                            <img src="assets/img/avatar-7.jpg" className="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h6 className="font-weight-bolder">Kevin Howard</h6>
                                                            <span className="font-weight-bold text-success">Phone: <br /> <small className="">+234 806 097 2418</small> </span> <hr />
                                                            <span className="font-weight-bold text-success">E-mail: <br /> <small className="">kevinhoward@gmail.com</small> </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="user-list-item">
                                                    <div>
                                                        <div className="avatar avatar-offline">
                                                            <img src="assets/img/avatar-1.jpg" className="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h6 className="font-weight-bolder">Eric Knight</h6>
                                                            <span className="font-weight-bold text-success">Phone: <br /> <small className="">+234 516 486 3091</small> </span> <hr />
                                                            <span className="font-weight-bold text-success">E-mail: <br /> <small className="">ericknight@yahoo.com</small> </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="user-list-item">
                                                    <div>
                                                        <div className="avatar avatar-online">
                                                            <img src="assets/img/avatar-2.jpg" className="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <div>
                                                                <h6 className="font-weight-bolder">Scott Albright</h6>
                                                                <span className="font-weight-bold text-success">Phone: <br /> <small className="">+234 732 093 2314</small> </span> <hr />
                                                                <span className="font-weight-bold text-success">E-mail: <br /> <small className="">scottalbright@yahoo.com</small> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="user-list-item">
                                                    <div>
                                                        <div className="avatar avatar-away">
                                                            <img src="assets/img/avatar-3.jpg" className="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h6 className="font-weight-bolder">Irene Perkins</h6>
                                                            <span className="font-weight-bold text-success">Phone: <br /> <small className="">+234 334 768 1298</small> </span> <hr />
                                                            <span className="font-weight-bold text-success">E-mail: <br /> <small className="">ireneperkins@yahoo.com</small> </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="user-list-item">
                                                    <div>
                                                        <div className="avatar avatar-online">
                                                            <img src="assets/img/avatar-4.jpg" className="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="users-list-body">
                                                        <div>
                                                            <h6 className="font-weight-bolder">Carol Andre</h6>
                                                            <span className="font-weight-bold text-success">Phone: <br /> <small className="">+234 864 908 5478</small> </span> <hr />
                                                            <span className="font-weight-bold text-success">E-mail: <br /> <small className="">carolandre@gmail.com</small> </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        
                                    </div>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- Right sidebar --> */}

        </div> 
        {/* <!-- /Content --> */}
		
    </div>
    {/* <!-- /Main Wrapper --> */}
    </div>
            
        </React.Fragment>
    )
}

export default Main;
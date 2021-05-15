import React from 'react';
import './Chat.css';


const Main = () => {
    return (
        <React.Fragment>
            <div id="main">
        {/* <!-- Main Wrapper --> */}
    <div class="main-wrapper">
	
        {/* <!-- content --> */}
        <div class="content main_content">
		
            {/* <!-- sidebar group --> */}
            <div class="sidebar-group left-sidebar chat_sidebar">
                {/* <!-- Chats sidebar --> */}
                <div id="chats" class="left-sidebar-wrap sidebar active"> 
                    <div class="header">
                        <div class="header-top">
                            <div class="logo ml-2 mt-3">
                                <h3 class="fw-bolder text-light">PharmaConn3ct</h3>
                                {/* <!-- <a href="index.html">
                                    <img src="assets/img/logo.png" class="header_image img-fluid" alt="">
                                </a> --> */}
                            </div>
                            <ul class="header-action mt-4">
                                <li>
                                    <a href="#" data-toggle="dropdown">
                                        <i class="fas fa-ellipsis-h ellipse_header"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right header_drop_icon">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#new_group">
											New Group
										</a>
                                        <a class="dropdown-item" data-toggle="modal" data-target="#profile_modal">Profile</a>
                                        <a class="dropdown-item" data-toggle="modal"
                                            data-target="#settings_modal">Settings</a>
                                        <a href="login.html" class="dropdown-item">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul class="nav nav-tabs chat-tabs mt-4">
                            <li class="nav-item">
                                <a class="nav-link  active" href="index.html">Chats</a>
                            </li>                          
                            <li class="nav-item ml-1">
                                <a class="nav-link" href="group.html">Contacts</a>
                            </li>
                            <li class="nav-item ml-1">
                                <a class="nav-link" href="status.html">Status</a>
                            </li>
                            <li class="nav-item ml-1">
                                <a class="nav-link" href="call-log.html">Call</a>
                            </li>
                        </ul>
                        <button type="button" class="float-right btn btn-circle btn-sm header_button"
                            data-toggle="modal" data-target="#chat-new">
                            <i class="fas fa-plus button_plus"></i>
                        </button>
                    </div>
                    <div class="search_chat has-search">
                        <span class="fas fa-search form-control-feedback"></span>
                        <input class="form-control chat_input" id="search-contact" type="text" placeholder="" />
                    </div>
                    <div class="sidebar-body" id="chatsidebar">
                        <ul class="user-list">
                            <li class="user-list-item">
                                <div class="avatar avatar-online">
                                    <img src="assets/img/avatar-8.jpg" class="rounded-circle" alt="image" />
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Regina Dickerson</h5>
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">14:45 pm</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="#" class="dropdown-item">Open</a>
                                                    <a href="#" class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="#" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar avatar-away">
                                        <img src="assets/img/avatar-7.jpg" class="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Kevin Howard</h5>
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">08:45 pm</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="#" class="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="#" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar avatar-offline">
                                        <img src="assets/img/avatar-1.jpg" class="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">Eric Knight</h5>
                                        <p>Welcome to the community mate! 👍</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">Yesterday</small>
                                        <div class="new-message-count"></div>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="#" class="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="#" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item unread">
                                <div>
                                    <div class="avatar avatar-online">
                                        <img src="assets/img/avatar-2.jpg" class="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Scott Albright</h5>
                                        <p>I remember everything mate. See you later 🤘</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">06:18 am</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header open_drop"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="#" class="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        class="dropdown-item dr_menu">Profile</a>
                                                    <a href="#" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="#" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar avatar-away">
                                        <img src="assets/img/avatar-3.jpg" class="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">Irene Perkins</h5>
                                        <p><i class="fa fa-camera mr-1"></i> I will miss you, too, my dear!</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">Yesterday</small>
                                        <div class="new-message-count"></div>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="#" class="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu" >Profile</a>
                                                    <a href="#" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="#" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar avatar-online">
                                        <img src="assets/img/avatar-4.jpg" class="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">Carol Andre</h5>
                                        <p><i class="fa fa-camera mr-1"></i> Photo</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">Yesterday</small>
                                        <div class="new-message-count"></div>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="#" class="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="#" class="dropdown-item">Delete</a>
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
            <div class="chat" id="middle">
              <div class="chat-header">
                  <div class="user-details">
                      <div class="d-lg-none ml-2">
                          <ul class="list-inline mt-2 mr-2">
                              <li class="list-inline-item">
                                  <a class="text-muted px-0 left_side" href="#" data-chat="open">
                                      <i class="fas fa-arrow-left"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <figure class="avatar ml-1">
                          <img src="assets/img/carousel1.jpg" class="rounded-circle" alt="image" />
                      </figure>
                      <div class="mt-1">
                          <h5 class="mb-1">Dreams Team</h5>
                          <small class="text-muted mb-2">
                              Active
                          </small>
                      </div>
                  </div>
                  <div class="avatar-group">
                      <div class="avatar avatar-xs group_img group_header">
                          <img class="avatar-img rounded-circle border border-white" alt="User Image"
                              src="assets/img/avatar-1.jpg" />
                      </div>
                      <div class="avatar avatar-xs group_img group_header">
                          <img class="avatar-img rounded-circle border border-white" alt="User Image"
                              src="assets/img/avatar-7.jpg" />
                      </div>
                      <div class="avatar avatar-xs group_img group_header">
                          <span class="avatar-title rounded-circle border border-white">10+</span>
                      </div>
                      <div class="search_chat has-search m-0 ml-2">
                        <span class="fas fa-search form-control-feedback"></span>
                        <input class="form-control chat_input" id="search-contact" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="chat-options">
                      <ul class="list-inline">
                          <li class="list-inline-item" data-toggle="tooltip" title=""
                              data-original-title="Voice call">
                              <a href="javascript:void(0)" class="btn btn-outline-light" data-toggle="modal"
                                  data-target="#voice_call">
                                  <i class="fas fa-phone-alt voice_chat_phone"></i>
                              </a>
                          </li>
                          <li class="list-inline-item" data-toggle="tooltip" title=""
                              data-original-title="Video call">
                              <a href="javascript:void(0)" class="btn btn-outline-light" data-toggle="modal"
                                  data-target="#video_call">
                                  <i class="fas fa-video"></i>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a class="btn btn-outline-light" href="#" data-toggle="dropdown">
                                  <i class="fas fa-ellipsis-h"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a href="#" class="dropdown-item dream_profile_menu">Profile</a>
                                <a href="#" class="dropdown-item">Media, Links and Docs</a>
                                <a href="#" class="dropdown-item">Search</a>
                                <a href="#" class="dropdown-item">Mute Notifications</a>
                                <a href="#" class="dropdown-item">Report</a>
                                <a href="#" class="dropdown-item">Clear Chat</a>
                                <a href="#" class="dropdown-item">Delete</a>
                            </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="chat-body">
                  <div class="messages">
                      <div class="chats">
                          <div class="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div class="chat-content">
                              <div class="message-content">
                                  Hi James! What’s Up?
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">Yesterday 14:26 PM</div>
                                  </div>
                              </div>
                          </div>
                          <div class="chat-action-btns">
                              <ul>
                                  <li><a href="#" class="share-msg" title="Share"><i class="fas fa-share"></i></a>
                                  </li>
                                  <li><a href="#" class="edit-msg"><i class="fas fa-edit"></i></a></li>
                                  <li><a href="#" class="del-msg"><i class="fas fa-trash-alt"></i></a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="chats chats-right">
                          <div class="chat-content">
                              <div class="message-content">
                                  Oh, hello! All perfectly. I work, study and know this wonderful world!
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">Yesterday 14:38 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="chats">
                          <div class="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div class="chat-content">
                              <div class="message-content">
                                  Ok Cool, Where you from
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">Yesterday 14:40 PM</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="chats chats-right">

                          <div class="chat-content">
                              <div class="message-content">
                                  I am from California, and you?
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">Yesterday 14:42 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
          <div class="chat-line">
            <span class="chat-date">Today</span>
          </div>

                      <div class="chats">
                          <div class="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div class="chat-content">
                              <div class="message-content">
                                  I am from Australia, and where you working?
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">14:26 PM</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="chats chats-right">

                          <div class="chat-content">
                              <div class="message-content">
                                  Oh Cool, Yeah i am working here famous software company
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">14:29 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="chats">
                          <div class="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div class="chat-content">
                              <div class="message-content">
                                  That's Good Lol, What is your designation?
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">14:30 PM</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="chats chats-right">

                          <div class="chat-content">
                              <div class="message-content">
                                  I am senior software engineer.
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">14:32 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
          <div class="chat-line">
            <span class="chat-date">1 message unread</span>
          </div>

                      <div class="chats">
                          <div class="chat-avatar">
                              <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image" />
                          </div>
                          <div class="chat-content">
                              <div class="message-content">
                                  Good.!!!
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">14:33 PM</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="chats chats-right">

                          <div class="chat-content">
                              <div class="message-content">
                                  Yeah, Thank you..
                              </div>
                              <div class="chat-time">
                                  <div>
                                      <div class="time">14:34 PM <i><img src="assets/img/double-tick.png" alt="" /></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="chat-footer">
                  <form>
                      <input type="text" class="form-control chat_form" placeholder="Write a message." />
                      <div class="form-buttons">
                          <button class="btn" type="button">
                              <i class="far fa-smile"></i>
                          </button>
                          <button class="btn" type="button" data-toggle="modal" data-target="#drag_files">
                              <i class="fas fa-paperclip"></i>
                          </button>
                          <button class="btn" type="button">
                              <i class="fas fa-microphone-alt"></i>
                          </button>
                          <button class="btn send-btn" type="submit">
                              <i class="fab fa-telegram-plane"></i>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
            {/* <!-- /Chat --> */}

            {/* <!-- Upload Documents --> */}
            <div id="drag_files" class="modal fade" role="dialog">
              <div class="modal-dialog modal-md modal-dialog-centered">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h4 class="modal-title">Drag and drop files upload</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                          <form id="js-upload-form">
                              <div class="upload-drop-zone" id="drop-zone">
                                  <i class="fa fa-cloud-upload fa-2x"></i> <span class="upload-text">Just drag and
                                      drop files here</span>
                              </div>
                          </form>
                          <div class="text-center mt-0">
                              <button class="btn newgroup_create m-0" data-dismiss="modal">Add to upload</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Upload Documents --> */}

            {/* <!-- Voice call --> */}
            <div class="modal fade voice_pop" id="voice_call" role="document">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content voice_content ml-3">
                      <div class="modal-body voice_body">
                          <div class="call-box incoming-box">
                              <div class="call-wrapper">
                                  <div class="call-inner">
                                      <div class="call-user">
                                          <img alt="User Image" src="assets/img/avatar-2.jpg" class="call-avatar" />
                                          <h4>Tobbias Williams</h4>
                                          <span class="chat_cal">calling...</span>
                                      </div>
                                      <div class="call-items">
                                          <a href="#" class="btn call-item call-end" data-dismiss="modal">
                                              <i class="fas fa-phone-alt phone_icon"></i></a>
                                          <a href="#" class="btn call-item call-start" data-dismiss="modal"> <i
                                                  class="fas fa-phone-alt"></i></a>
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
            <div class="modal fade voice_pop" id="video_call" role="document">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content voice_content ml-3">
                      <div class="modal-body voice_body">
                          <div class="call-box incoming-box">
                              <div class="call-wrapper">
                                  <div class="call-inner">
                                      <div class="call-user">
                                          <img alt="User Image" src="assets/img/avatar-2.jpg" class="call-avatar" />
                                          <h4>Tobbias Williams</h4>
                                          <span class="chat_cal">calling...</span>
                                      </div>
                                      <div class="call-items">
                                          <a href="#" class="btn call-item call-end" data-dismiss="modal"><i
                                                  class="fas fa-phone-alt phone_icon"></i></a>
                                          <a href="#" class="btn call-item call-start" data-dismiss="modal">
                                              <i class="fas fa-video"></i></a>
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
            <div class="modal fade" id="new_group">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title">
                              New Group
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <i class="fas fa-times close_icon"></i>
                          </button>
                      </div>
                      <div class="modal-body">
                          {/* <!-- Tabs --> */}
                          <ul class="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                              <li class="nav-item">
                                  <a href="#create-group-details" class="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Details</a>
                              </li>

                              <li class="nav-item">
                                  <a href="#create-group-members" class="nav-link" data-toggle="tab" role="tab" aria-selected="false">Members</a>
                              </li>
                          </ul>
                          {/* <!-- Tabs -->    */}
                          {/* <!-- Create chat --> */}
                          <div class="tab-content" role="tablist">
                              {/* <!-- Chat details --> */}
                              <div id="create-group-details" class="tab-pane fade show active"
                                  role="tabpanel">
                                  <form action="#">
                                      <div class="form-group">
                                          <label>Name</label>
                                          <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Group Name" />
                                      </div>
                                      <div class="form-group">
                                          <label for="new-chat-topic">Topic (optional)</label>
                                          <input class="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic" />
                                      </div>
                                      <div class="form-group mb-0">
                                          <label for="new-chat-description">Description</label>
                                          <textarea class="form-control form-control-lg group_control_text" name="new-chat-description" id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                      </div>
                                  </form>
                              </div>
                              {/* <!-- Chat details --> */}
                              
                              {/* <!-- Chat Members --> */}
                              <div id="create-group-members" class="tab-pane fade create-group-members" role="tabpanel">
                                  <nav class="list-group list-group-flush mb-n6">
                                      {/* <!-- Search --> */}
                                      <form class="mb-3 newgroup_content">
                                          <div class="input-group">
                                              <input type="text" class="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                              <div class="input-group-append">
                                                  <button class="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                                                      <i class="fas fa-search newgroup_fa_search"></i>
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                      {/* <!-- Search --> */}
                                      <div class="mb-6">
                                          <small class="text-uppercase">A</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="card mb-6 group_card_mb">
                                          <div class="card-body">
                                              <div class="media">
                                                  <div class="avatar avatar-online mr-5">
                                                      <img class="avatar-img group_image" src="assets/img/avatar-7.jpg" alt="Anna Bridges" />
                                                  </div>
                                                  <div
                                                      class="media-body align-self-center mr-6 group_card_media">
                                                      <h6 class="mb-0">Anna Bridges</h6>
                                                      <small class="text-muted">Online</small>
                                                  </div>
                                                  <div class="align-self-center ml-auto">
                                                      <div class="custom-control custom-checkbox">
                                                          <input class="custom-control-input" id="id-user-1" type="checkbox" />
                                                          <label class="custom-control-label" for="id-user-1"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label class="stretched-label" for="id-user-1"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="mb-6">
                                          <small class="text-uppercase">B</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="card mb-6 group_card_mb">
                                          <div class="card-body">
                                              <div class="media">
                                                  <div class="avatar mr-5">
                                                      <img class="avatar-img group_image" src="assets/img/avatar-1.jpg" alt="Brian Dawson" />
                                                  </div>
                                                  <div class="media-body align-self-center mr-6 group_card_media">
                                                      <h6 class="mb-0">Brian Dawson</h6>
                                                      <small class="text-muted">last seen 2 hours ago</small>
                                                  </div>
                                                  <div class="align-self-center ml-auto">
                                                      <div class="custom-control custom-checkbox">
                                                          <input class="custom-control-input" id="id-user-2" type="checkbox" />
                                                          <label class="custom-control-label" for="id-user-2"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label class="stretched-label" for="id-user-2"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="mb-6">
                                          <small class="text-uppercase">L</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="card mb-6 group_card_mb">
                                          <div class="card-body">
                                              <div class="media">
                                                  <div class="avatar mr-5">
                                                      <img class="avatar-img group_image" src="assets/img/avatar-2.jpg" alt="Leslie Sutton" />
                                                  </div>
                                                  <div class="media-body align-self-center mr-6 group_card_media">
                                                      <h6 class="mb-0">Leslie Sutton</h6>
                                                      <small class="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div class="align-self-center ml-auto">
                                                      <div class="custom-control custom-checkbox">
                                                          <input class="custom-control-input" id="id-user-3" type="checkbox" />
                                                          <label class="custom-control-label" for="id-user-3"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label class="stretched-label" for="id-user-3"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="mb-6">
                                          <small class="text-uppercase">M</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="card mb-6 group_card_mb">
                                          <div class="card-body">
                                              <div class="media">
                                                  <div class="avatar mr-5">
                                                      <img class="avatar-img group_image" src="assets/img/avatar-3.jpg" alt="Matthew Wiggins" />
                                                  </div>
                                                  <div class="media-body align-self-center mr-6 group_card_media">
                                                      <h6 class="mb-0">Matthew Wiggins</h6>
                                                      <small class="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div class="align-self-center ml-auto">
                                                      <div class="custom-control custom-checkbox">
                                                          <input class="custom-control-input" id="id-user-4" type="checkbox" />
                                                          <label class="custom-control-label" for="id-user-4"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label class="stretched-label" for="id-user-4"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="mb-6">
                                          <small class="text-uppercase">S</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="card mb-6 group_card_mb">
                                          <div class="card-body">
                                              <div class="media">
                                                  <div class="avatar mr-5">
                                                      <img class="avatar-img group_image" src="assets/img/avatar-4.jpg" alt="Simon Hensley" />
                                                  </div>
                                                  <div class="media-body align-self-center mr-6 group_card_media">
                                                      <h6 class="mb-0">Simon Hensley</h6>
                                                      <small class="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div class="align-self-center ml-auto">
                                                      <div class="custom-control custom-checkbox">
                                                          <input class="custom-control-input" id="id-user-5" type="checkbox" />
                                                          <label class="custom-control-label" for="id-user-5"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label class="stretched-label" for="id-user-5"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="mb-6">
                                          <small class="text-uppercase">W</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="card mb-6 group_card_mb">
                                          <div class="card-body">
                                              <div class="media">
                                                  <div class="avatar mr-5">
                                                      <img class="avatar-img group_image" src="assets/img/avatar-5.jpg" alt="William Wright" />
                                                  </div>
                                                  <div class="media-body align-self-center mr-6 group_card_media">
                                                      <h6 class="mb-0">William Wright</h6>
                                                      <small class="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div class="align-self-center ml-auto">
                                                      <div class="custom-control custom-checkbox">
                                                          <input class="custom-control-input" id="id-user-6" type="checkbox" />
                                                          <label class="custom-control-label" for="id-user-6"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label class="stretched-label" for="id-user-6"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      {/* <!-- Friend --> */}
                                      <div class="card mb-6 group_card_mb">
                                          <div class="card-body">
                                              <div class="media">
                                                  <div class="avatar mr-5">
                                                      <img class="avatar-img group_image" src="assets/img/avatar-6.png" alt="William Greer" />
                                                  </div>
                                                  <div class="media-body align-self-center mr-6 group_card_media">
                                                      <h6 class="mb-0">William Greer</h6>
                                                      <small class="text-muted">last seen 10 minutes ago</small>
                                                  </div>
                                                  <div class="align-self-center ml-auto">
                                                      <div class="custom-control custom-checkbox">
                                                          <input class="custom-control-input" id="id-user-7" type="checkbox" />
                                                          <label class="custom-control-label" for="id-user-7"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label class="stretched-label" for="id-user-7"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="mb-6">
                                          <small class="text-uppercase">Z</small>
                                      </div>
                                      {/* <!-- Friend --> */}
                                      <div class="card mb-6 group_card_mb">
                                          <div class="card-body">
                                              <div class="media">
                                                  <div class="avatar mr-5">
                                                      <img class="avatar-img group_image" src="assets/img/avatar-8.jpg" alt="Zane Mayes" />
                                                  </div>
                                                  <div
                                                      class="media-body align-self-center mr-6 group_card_media">
                                                      <h6 class="mb-0">Zane Mayes</h6>
                                                      <small class="text-muted">last seen 3 days ago</small>
                                                  </div>
                                                  <div class="align-self-center ml-auto">
                                                      <div class="custom-control custom-checkbox">
                                                          <input class="custom-control-input" id="id-user-8" type="checkbox" />
                                                          <label class="custom-control-label" for="id-user-8"></label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* <!-- Label --> */}
                                          <label class="stretched-label" for="id-user-8"></label>
                                      </div>
                                      {/* <!-- Friend --> */}
                                  </nav>
                              </div>
                              {/* <!-- Chat Members --> */}
                          </div>
                          {/* <!-- Create chat --> */}
                          {/* <!-- Button --> */}
                          <div class="pt-3">
                              <div class="container text-center">
                                  <button class="btn btn-block newgroup_create mb-1 mt-0" type="submit" data-dismiss="modal">Create group</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Chat New Modal --> */}

            {/* <!-- New group modal --> */}
            <div class="modal fade" id="new_group">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                New Group
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            {/* <!-- Tabs --> */}
                            <ul class="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                                <li class="nav-item">
                                    <a href="#create-group-details" class="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Details</a>
                                </li>

                                <li class="nav-item">
                                    <a href="#create-group-members" class="nav-link" data-toggle="tab" role="tab" aria-selected="false">Members</a>
                                </li>
                            </ul>
                            {/* <!-- Tabs --> */}
                            {/* <!-- Create chat --> */}
                            <div class="tab-content" role="tablist">
                                {/* <!-- Chat details --> */}
                                <div id="create-group-details" class="tab-pane fade show active"
                                    role="tabpanel">
                                    <form action="#">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Group Name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="new-chat-topic">Topic (optional)</label>
                                            <input class="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic" />
                                        </div>
                                        <div class="form-group mb-0">
                                            <label for="new-chat-description">Description</label>
                                            <textarea class="form-control form-control-lg group_control_text" name="new-chat-description" id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- Chat details --> */}
								
                                {/* <!-- Chat Members --> */}
                                <div id="create-group-members" class="tab-pane fade create-group-members" role="tabpanel">
                                    <nav class="list-group list-group-flush mb-n6">
                                        {/* <!-- Search --> */}
                                        <form class="mb-3 newgroup_content">
                                            <div class="input-group">
                                                <input type="text" class="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                                <div class="input-group-append">
                                                    <button class="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                                                        <i class="fas fa-search newgroup_fa_search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        {/* <!-- Search --> */}
                                        <div class="mb-6">
                                            <small class="text-uppercase">A</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar avatar-online mr-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-7.jpg" alt="Anna Bridges" />
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center mr-6 group_card_media">
                                                        <h6 class="mb-0">Anna Bridges</h6>
                                                        <small class="text-muted">Online</small>
                                                    </div>
                                                    <div class="align-self-center ml-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-1" type="checkbox" />
                                                            <label class="custom-control-label" for="id-user-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label class="stretched-label" for="id-user-1"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="mb-6">
                                            <small class="text-uppercase">B</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar mr-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-1.jpg" alt="Brian Dawson" />
                                                    </div>
                                                    <div class="media-body align-self-center mr-6 group_card_media">
                                                        <h6 class="mb-0">Brian Dawson</h6>
                                                        <small class="text-muted">last seen 2 hours ago</small>
                                                    </div>
                                                    <div class="align-self-center ml-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-2" type="checkbox" />
                                                            <label class="custom-control-label" for="id-user-2"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label class="stretched-label" for="id-user-2"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="mb-6">
                                            <small class="text-uppercase">L</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar mr-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-2.jpg" alt="Leslie Sutton" />
                                                    </div>
                                                    <div class="media-body align-self-center mr-6 group_card_media">
                                                        <h6 class="mb-0">Leslie Sutton</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ml-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-3" type="checkbox" />
                                                            <label class="custom-control-label" for="id-user-3"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label class="stretched-label" for="id-user-3"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="mb-6">
                                            <small class="text-uppercase">M</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar mr-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-3.jpg" alt="Matthew Wiggins" />
                                                    </div>
                                                    <div class="media-body align-self-center mr-6 group_card_media">
                                                        <h6 class="mb-0">Matthew Wiggins</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ml-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-4" type="checkbox" />
                                                            <label class="custom-control-label" for="id-user-4"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label class="stretched-label" for="id-user-4"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="mb-6">
                                            <small class="text-uppercase">S</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar mr-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-4.jpg" alt="Simon Hensley" />
                                                    </div>
                                                    <div class="media-body align-self-center mr-6 group_card_media">
                                                        <h6 class="mb-0">Simon Hensley</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ml-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-5" type="checkbox" />
                                                            <label class="custom-control-label" for="id-user-5"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label class="stretched-label" for="id-user-5"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="mb-6">
                                            <small class="text-uppercase">W</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar mr-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-5.jpg" alt="William Wright" />
                                                    </div>
                                                    <div class="media-body align-self-center mr-6 group_card_media">
                                                        <h6 class="mb-0">William Wright</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ml-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-6" type="checkbox" />
                                                            <label class="custom-control-label" for="id-user-6"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label class="stretched-label" for="id-user-6"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        {/* <!-- Friend --> */}
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar mr-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-6.png" alt="William Greer" />
                                                    </div>
                                                    <div class="media-body align-self-center mr-6 group_card_media">
                                                        <h6 class="mb-0">William Greer</h6>
                                                        <small class="text-muted">last seen 10 minutes ago</small>
                                                    </div>
                                                    <div class="align-self-center ml-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-7" type="checkbox" />
                                                            <label class="custom-control-label" for="id-user-7"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label class="stretched-label" for="id-user-7"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="mb-6">
                                            <small class="text-uppercase">Z</small>
                                        </div>
                                        {/* <!-- Friend --> */}
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar mr-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-8.jpg" alt="Zane Mayes" />
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center mr-6 group_card_media">
                                                        <h6 class="mb-0">Zane Mayes</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ml-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-8" type="checkbox" />
                                                            <label class="custom-control-label" for="id-user-8"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Label --> */}
                                            <label class="stretched-label" for="id-user-8"></label>
                                        </div>
                                        {/* <!-- Friend --> */}
                                    </nav>
                                </div>
                                {/* <!-- Chat Members --> */}
                            </div>
                            {/* <!-- Create chat --> */}
                            {/* <!-- Button --> */}
                            <div class="pt-3">
                                <div class="container text-center">
                                    <button class="btn btn-block newgroup_create mb-1 mt-0" type="submit" data-dismiss="modal">Create group</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /New group modal --> */}

            {/* <!-- Profile Modal --> */}
            <div class="modal fade" id="profile_modal">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title">
                              Profile
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <i class="fas fa-times close_icon"></i>
                          </button>
                      </div>
                      <div class="modal-body">
                          {/* <!-- Card --> */}
                          <div class="card mb-6 profile_Card">
                              <div class="card-body">
                                  <div class="text-center py-6">
                                      {/* <!-- Photo --> */}
                                      <div class="avatar avatar-xl mb-3">
                                          <img class="avatar-img rounded-circle mCS_img_loaded" src="assets/img/avatar-5.jpg" alt="" /><i class="fas fa-camera" title="edit image"></i>
                                      </div>
                                      <h5>John Janousek</h5>
                                      <p class="text-muted m-0">Last seen: Today</p>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- Card --> */}
                          {/* <!-- Card --> */}
                          <form action="#" class="mt-3">
                              <div class="form-group">
                                  <label>Country</label>
                                  <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Country Name" />
                              </div>
                              <div class="form-group">
                                  <label>Phone</label>
                                  <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19" />
                              </div>
                              <div class="form-group">
                                  <label>Email</label>
                                  <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="johnjanousek@gmail.com" />
                              </div>
                          </form>
                          {/* <!-- Card --> */}
                          <div class="form-row profile_form mt-3 mb-1">
                              {/* <!-- Button --> */}
                              <button type="button" class="btn btn-block newgroup_create mb-0" data-dismiss="modal">
                                  Update Profile
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Profile Modal --> */}

            {/* <!-- Settings Modal --> */}
            <div class="modal fade" id="settings_modal">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title">
                              Settings
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <i class="fas fa-times close_icon"></i>
                          </button>
                      </div>
                      <div class="modal-body">
                          <div class="card-header position-relative account_details">
                              <a href="#" class="text-reset d-block stretched-link collapsed">
                                  <div class="row no-gutters align-items-center">
                                      {/* <!-- Title --> */}
                                      <div class="col">
                                          <h5>Account</h5>
                                          <p class="m-0">Update your profile details.</p>
                                      </div>
                                      {/* <!-- Icon --> */}
                                      <div class="col-auto">
                                          <i class="text-muted icon-md fas fa-user"></i>
                                      </div>
                                  </div>
                              </a>
                          </div>
                          <div class="card-header position-relative mt-3 security_details">
                              <a href="#" class="text-reset d-block stretched-link collapsed">
                                  <div class="row no-gutters align-items-center">
                                      {/* <!-- Title --> */}
                                      <div class="col">
                                          <h5>Security</h5>
                                          <p class="m-0">Update your profile details.</p>
                                      </div>
                                      {/* <!-- Icon --> */}
                                      <div class="col-auto">
                                          <i class="text-muted icon-md fas fa-crosshairs"></i>
                                      </div>
                                  </div>
                              </a>
                          </div>
                          <div class="mt-3">
                              <label for="profile-name">Name</label>
                              <input class="form-control form-control-lg profile_input group_formcontrol" name="profile-name" id="profile-name" type="text" placeholder="Type your name" />
                          </div>
                          <div class="mt-4">
                              <label for="profile-name">Current Password</label>
                              <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_pswd" type="text" placeholder="Current Password" />
                          </div>
                          <div class="mt-4">
                              <label for="profile-name">New Password</label>
                              <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_new" type="text" placeholder="New Password" />
                          </div>
                          <div class="mt-4">
                              <label for="profile-name">Verify Password</label>
                              <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_prfname" type="text" placeholder="Verify Password" />
                          </div>
                          <div class="mt-3 text-center">
                              <button class="btn btn-block newgroup_create mb-0" type="submit" data-dismiss="modal">Save Settings</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            {/* <!-- /Settings Modal --> */}

            {/* <!-- Right sidebar --> */}
            <div class="right-sidebar right_sidebar_profile" id="middle1">
              <div class="right-sidebar-wrap profile_wrap_right member_sidebar active">
                  <div class="contact-close_call mr-4 mt-4 text-right">
                      <a href="#"
                          class="btn btn-outline-light close_profile close_profile4">
                          <i class="fas fa-times close_icon"></i>
                      </a>
                  </div>
                  <div class="sidebar-body">
                      <div class="pl-4 pr-4 right_sidebar_logo">
                          <div class="text-center mb-3">
                              <figure class="avatar avatar-xl mb-3">
                                  <img src="assets/img/carousel1.jpg" class="rounded-circle" alt="image" />
                              </figure>
                              <h5 class="mb-1 profile-name">Dreams Team</h5>
                          </div>
                          <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified profile-tabs">
                              <li class="nav-item">
                                  <a class="nav-link active" href="#info">Info</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#member">Members</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#addmember"><i class="fas fa-user-plus"></i></a>
                            </li>
                          </ul>
                          {/* <!-- Tab panes --> */}
                          <div class="tab-content rightside_tab">
                              <div id="info" class="tab-pane active"><br />  
                                  <div class="accordion-col">
                                      <div class="accordion-title">
                                          <h6 class="primary-title">Media (31) <i class="fas fa-chevron-right float-right"></i></h6>
                                      </div>
                                      <div class="accordion-content">
                                          <div class="media-lists">
                                              <div class="media-image">
                                                  <img src="assets/img/media1.jpg" alt="" />
                                              </div>
                                              <div class="media-image">
                                                  <img src="assets/img/media2.jpg" alt="" />
                                              </div>
                                              <div class="media-image">
                                                  <img src="assets/img/media3.jpg" alt="" />
                                              </div>
                                          </div>
                                      </div>
                                      <div class="accordion-title">
                                          <h6 class="primary-title">About<i class="fas fa-chevron-right float-right"></i></h6>
                                      </div>
                                      <div class="accordion-content">
                                          <p class="text-muted text-center mt-1">Help people to build websites and apps + grow
                                              awareness in social media 🔥</p>
                                          {/* <!-- <div class="mt-2 text-center">
                                              <h6>Phone: <span class="text-muted ml-2">+(33 1) 45 55 01 10</span></h6>
                                          </div> --> */}
                                      </div>
                                      <div class="accordion-title">
                                          <h6 class="primary-title">Settings <i class="fas fa-chevron-right float-right"></i></h6>
                                      </div>
                                      <div class="accordion-content">
                                          <ul class="contact-action">
                                              <li class="block-user mt-1">
                                                  <a href="#"><i class="fas fa-ban mr-2 text-muted"></i>Block</a>
                                              </li>
                                              <li class="report-contact">
                                                  <a href="#"><i class="fas fa-thumbs-down mr-2"></i> Report Contact</a>
                                              </li>
                                              <li class="delete-chat">
                                                  <a href="#"><i class="fas fa-trash-alt mr-2"></i> Delete Chat</a>
                                              </li>
                                              <li class="exit-group">
                                                <a href="#"><i class="fas fa-trash-alt mr-2"></i> Exit Group</a>
                                            </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div id="member" class="tab-pane"><br />
                                  <div>
                                      <h6 class="primary-title">20 Participants <i
                                              class="fas fa-chevron-right float-right"></i></h6>
                                      <div class="list-group list-group-flush">
                                          <a href="#" class="list-group-item list-group-item-action">
                                              <div class="media align-items-center">
                                                  <div class="mr-3">
                                                      <img alt="Image placeholder" src="assets/img/avatar-8.jpg"
                                                          class="avatar  rounded-circle" />
                                                  </div>
                                                  <div class="media-body">
                                                      <h6 class="text-sm d-block text-truncate mb-0">Regina Dickerson
                                                      </h6>
                                                      <span class="d-block text-sm text-muted">At Work</span>
                                                  </div>
                                              </div>
                                          </a>
                                          <a href="#" class="list-group-item list-group-item-action">
                                              <div class="media align-items-center">
                                                  <div class="mr-3">
                                                      <img alt="Image placeholder" src="assets/img/avatar-7.jpg"
                                                          class="avatar  rounded-circle" />
                                                  </div>
                                                  <div class="media-body">
                                                      <h6 class="text-sm d-block text-truncate mb-0">Kevin Howard
                                                      </h6>
                                                      <span class="d-block text-sm text-muted">At Work</span>
                                                  </div>
                                              </div>
                                          </a>
                                          <a href="#" class="list-group-item list-group-item-action">
                                              <div class="media align-items-center">
                                                  <div class="mr-3">
                                                      <img alt="Image placeholder" src="assets/img/avatar-1.jpg"
                                                          class="avatar  rounded-circle" />
                                                  </div>
                                                  <div class="media-body">
                                                      <h6 class="text-sm d-block text-truncate mb-0">Eric Knight
                                                      </h6>
                                                      <span class="d-block text-sm text-muted">At Work</span>
                                                  </div>
                                              </div>
                                          </a>
                                          <div class="view-more ml-4 mt-3">
                                              <a href="#"><i class="fas fa-chevron-down mr-1"></i> <span>17
                                                      More</span></a>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                              <div id="addmember" class="tab-pane"><br />
                                <div class="accordion-col">
                                    <div class="accordion-title">
                                        <h6 class="primary-title">Invite Link <i class="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div class="accordion-content">
                                        <p class="text-muted text-center mt-1">https://pharmaconnect/hrkdksj@#&$%)*!@%</p>
                                        <a href="#" class="text-muted"><i class="fas fa-copy"></i> Copy Link</a><br />
                                        <a href="#" class="text-muted"><i class="fas fa-share-alt"></i> Share Link</a><br />
                                        <a href="#" class="text-muted"><i class="fas fa-minus-circle"></i> Reset Link</a><br />
                                    </div>
                                    <div class="accordion-title">
                                        <h6 class="primary-title">By Username<i class="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div class="accordion-content">
                                        <input class="form-control chat_input" id="username" type="text" placeholder="username" />
                                    </div>
                                    <div class="accordion-title">
                                        <h6 class="primary-title">By E-mail<i class="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div class="accordion-content">
                                        <input class="form-control chat_input" id="email" type="email" placeholder="@" />
                                    </div>
                                    <div class="accordion-title">
                                        <h6 class="primary-title">By Phone Number<i class="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div class="accordion-content">
                                        <input class="form-control chat_input" id="phone" type="text" placeholder="phone number" />
                                    </div>
                                    <div class="accordion-title">
                                        <h6 class="primary-title">By Contacts<i class="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div class="accordion-content">
                                        <div class="search_chat m-0 has-search">
                                            <span class="fas fa-search form-control-feedback"></span>
                                            <input class="form-control chat_input" id="search-contact" type="text" placeholder="" />
                                        </div>
                                       
                                            <ul class="user-list">
                                                <li class="user-list-item mt-2">
                                                    <div class="avatar avatar-online">
                                                        <img src="assets/img/avatar-8.jpg" class="rounded-circle" alt="image" />
                                                    </div>
                                                    <div class="users-list-body">
                                                        <div>
                                                            <h6 class="font-weight-bolder">Regina Dickerson</h6>
                                                            <span class="font-weight-bold text-success">Phone: <br /> <small class="">+234 703 797 7478</small> </span> <hr />
                                                            <span class="font-weight-bold text-success">E-mail: <br /> <small class="">reginadickerson@gmail.com</small> </span>
                                                        </div>
                                                         
                                                    </div>
                                                </li>
                                                <li class="user-list-item">
                                                    <div>
                                                        <div class="avatar avatar-away">
                                                            <img src="assets/img/avatar-7.jpg" class="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="users-list-body">
                                                        <div>
                                                            <h6 class="font-weight-bolder">Kevin Howard</h6>
                                                            <span class="font-weight-bold text-success">Phone: <br /> <small class="">+234 806 097 2418</small> </span> <hr />
                                                            <span class="font-weight-bold text-success">E-mail: <br /> <small class="">kevinhoward@gmail.com</small> </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="user-list-item">
                                                    <div>
                                                        <div class="avatar avatar-offline">
                                                            <img src="assets/img/avatar-1.jpg" class="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="users-list-body">
                                                        <div>
                                                            <h6 class="font-weight-bolder">Eric Knight</h6>
                                                            <span class="font-weight-bold text-success">Phone: <br /> <small class="">+234 516 486 3091</small> </span> <hr />
                                                            <span class="font-weight-bold text-success">E-mail: <br /> <small class="">ericknight@yahoo.com</small> </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="user-list-item">
                                                    <div>
                                                        <div class="avatar avatar-online">
                                                            <img src="assets/img/avatar-2.jpg" class="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="users-list-body">
                                                        <div>
                                                            <div>
                                                                <h6 class="font-weight-bolder">Scott Albright</h6>
                                                                <span class="font-weight-bold text-success">Phone: <br /> <small class="">+234 732 093 2314</small> </span> <hr />
                                                                <span class="font-weight-bold text-success">E-mail: <br /> <small class="">scottalbright@yahoo.com</small> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="user-list-item">
                                                    <div>
                                                        <div class="avatar avatar-away">
                                                            <img src="assets/img/avatar-3.jpg" class="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="users-list-body">
                                                        <div>
                                                            <h6 class="font-weight-bolder">Irene Perkins</h6>
                                                            <span class="font-weight-bold text-success">Phone: <br /> <small class="">+234 334 768 1298</small> </span> <hr />
                                                            <span class="font-weight-bold text-success">E-mail: <br /> <small class="">ireneperkins@yahoo.com</small> </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="user-list-item">
                                                    <div>
                                                        <div class="avatar avatar-online">
                                                            <img src="assets/img/avatar-4.jpg" class="rounded-circle" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="users-list-body">
                                                        <div>
                                                            <h6 class="font-weight-bolder">Carol Andre</h6>
                                                            <span class="font-weight-bold text-success">Phone: <br /> <small class="">+234 864 908 5478</small> </span> <hr />
                                                            <span class="font-weight-bold text-success">E-mail: <br /> <small class="">carolandre@gmail.com</small> </span>
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
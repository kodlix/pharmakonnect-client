import React, { useEffect } from 'react';
import AppLogo from '../Shared/AppLogo';
import './VideoConference.css';
import { Link } from 'react-router-dom';
import { UiEvents } from './utils/ui-events'
import { SocketEvents } from './utils/socket-events'
import { UrlToHyperLinkConverter } from './utils/url-to-hyperlink-converter'
import Swal from 'sweetalert2';
import { h } from './utils/helpers';




const Room = () => {

    useEffect(() => {

        SocketEvents.onSocketEventsLoaded();
        UiEvents.onUiEventsLoaded();
        UrlToHyperLinkConverter.call(this);


        if (window.performance.getEntriesByType("navigation")) {
            let act = window.performance.getEntriesByType("navigation")[0].type;
            const isHidden = document.getElementById('lnks').attributes.getNamedItem('hidden');

            if (isHidden && (act == 'reload' || act == 'back_forward')) {
                // perform
            }

        }

    }, [])


    const showConferenceLanding = (value) => {
        if (value) {
            return Swal.fire({
                title: 'Are you sure you want to leave the meeting?',
                text: "You can still join again through the meeting link",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#276678',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then((result) => {
                if (result.isConfirmed) {
                    h.flushData();
                    window.location.href = `${window.location.origin}/conference`
                }
            })

        }
        h.flushData();
        window.location.href = `${window.location.origin}/conference`
    }




    return (
        <>


            <span hidden={true} id="wmsg" data-toggle="modal" data-target="#waitModal"></span>

            <div className="modal fade" id="waitModal" tabIndex="-1" data-backdrop="static" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p style={{ fontWeight: 'bold' }} className="headerText modal-title text-center" id="exampleModalLabel"></p>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <p id="waitingMsg"></p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button hidden={true} type="button" className="btn btn-success " id='admitBtn' aria-label="Close" data-dismiss="modal" aria-hidden="true">Admit</button>
                            <button hidden={true} type="button" className="btn btn-danger " id='removeBtn' aria-label="Close" data-dismiss="modal" aria-hidden="true">Remove</button>
                            <button onClick={() => showConferenceLanding('')} type="button" className="btn btn-danger m-2 " id="cancelBtn" aria-label="Close" data-dismiss="modal">Leave</button>
                        </div>
                    </div>
                </div>
            </div>

            <span hidden={true} id="items" data-toggle="modal" data-target="#err"></span>
            <div className="modal fade" id="err" tabIndex="-1" data-backdrop="static" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Error</h5>
                        </div>
                        <div className="modal-body">
                            <p className="text-danger" id="errMsg"></p>

                            <button onClick={() => showConferenceLanding("")} className="font-weight-bolder btn  rounded-2 btn-primary">Ok</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="invite" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Invite people to this meeting</h5>
                            <button id="cl" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Copy the link below and send it to the meeting participants.</p>

                            <p id="sample" className="current-url"></p>

                            <button id="copy-url" className="font-weight-bolder btn  rounded-2 btn-primary"> <i className="fa fa-copy"></i> <span id='cop'>Copy</span></button>


                        </div>
                    </div>
                </div>
            </div>

            <div className="modal" id='recording-options-modal' className="custom-modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Recording Options</h5>

                        </div>
                        <div className="modal-body">
                            <p>Click on any of the buttons below to record.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" id='record-video' className="btn btn-primary">Record video</button>
                            <button type="button" id='record-screen' className="btn btn-primary">Record screen</button>
                            <button type="button" className="btn btn-danger" id='closeModal' data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <nav id="lnks" className="navbar fixed-top rounded-2 d-print-none navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand text-primary" style={{ fontWeight: "bold" }} onClick={() => showConferenceLanding("")} to="/conference" ><AppLogo /> <i
                    className="fa fa-video text-primary"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div style={{ marginRight: '60px' }} className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto" >

                        <li className="nav-item ">
                            <a style={{ fontSize: "13px", fontWeight: "bold" }} href="/blogs" replace="true" className="mt-1 text-light btn btn-primary btn-sm"
                                id="schedule-meeting">Back to DASHBOARD <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <Link style={{ fontSize: "13px", fontWeight: "bold" }} to="/conference/schedule" className="text-primary nav-link"
                                id="schedule-meeting">SCHEDULE A MEETING <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item ">
                            <a style={{ fontSize: '13px', fontWeight: 'bold' }} className="text-primary nav-link" id="join-meeting">JOIN A MEETING <span className="sr-only">(current)</span></a>
                        </li>
                        {/* <li className="nav-item dropdown">
                  <a style={{fontSize: '13px', fontWeight: 'bold'}} className="text-primary nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    HOST A MEETING
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" id="with-video-on">With Video On</a>
                    <a className="dropdown-item" id="with-video-off">With Video Off</a>
                    <a className="dropdown-item" id="screen-share-only">Screen Share Only</a>
                  </div>
                </li> */}
                    </ul>

                </div>
            </nav>


            <div>
                <div className="container cont">
                    <div style={{ marginTop: '15%' }} className="row">
                        <div className="col-md-4">
                            <h1 style={{ fontSize: '40px', lineHeight: '60px', color: '#444' }} >
                                ...in this together.
                        <br></br>
                        Keeping you connected
                        <br></br>
                        with what matters most.
                    </h1>
                            <div className="mt-5">
                                <button id="get-started" style={{ fontSize: '1.8rem' }} className="font-weight-bolder btn btn-lg rounded-2 btn-primary"> Get Started</button>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <img width="100%" src="assets/images/group.jpg" />

                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '10%' }} className="container-fluid" id='room-create' hidden={true}>
                <div className="row">
                    <div className="col-12 h2 mt-5 text-center">Host a Meeting</div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 text-center">
                        <span className="form-text small text-danger" id='err-msg'></span>
                    </div>
                    <div className="col-12 col-md-4 offset-md-4 mb-3" id='room-created'></div>
                    <div className="col-12 col-md-4 offset-md-4 mb-3">
                        <input type="text" id='room-name' className="form-control rounded-2" placeholder="Please enter a room name."></input>
                    </div>
                    <div className="col-12 col-md-4 offset-md-4 mb-3">
                        <input type="text" id='your-name' className="form-control rounded-2" placeholder="Please enter your name."></input>
                    </div>


                    <div className="col-12 col-md-4 offset-md-4 mb-3">
                        <button id='create-room' className="font-weight-bolder btn btn-block rounded-2 btn-primary">Create meeting</button>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '10%' }} className="container-fluid" id='username-set' hidden={true}>
                <div className="row">
                    <div className="col-12 h4 mt-5 text-center">Ready to join?</div>
                </div>

                <div className="row mt-2">
                    <div className="col-12 text-center">
                        <span className="form-text small text-danger" id='err-msg-username'></span>
                    </div>

                    <div className="col-12 col-md-4 offset-md-4 mb-3">
                        <input type="text" id='meeting-link' className="form-control rounded-2" placeholder="Please enter meeting link."></input>
                    </div>

                    <div className="col-12 col-md-4 offset-md-4 mb-3">
                        <input type="text" id='username' className="form-control rounded-2" placeholder="Please enter your name."></input>
                    </div>

                    <div className="col-12 col-md-4 offset-md-4 mb-3">
                        <button id='enter-room' className="font-weight-bolder btn btn-block rounded-2 btn-primary">Join</button>
                    </div>
                </div>
            </div>

            <div className="container-fluid room-comm" hidden={true}>
                <div className="row">
                    <video className="local-video mirror-mode" id='local' volume='0' autoPlay muted></video>
                </div>

                <div className="row">
                    <div className="col-md-12 main" id='main-section'>
                        <div className="row mt-2 mb-2" id='videos'></div>
                    </div>

                    <div className="col-md-3 chat-col d-print-none mb-2 bg-white " id='chat-pane' hidden={true}>
                        <div className="row">
                            <div className="col-12 font-weight-bold text-center mb-3">Pharma Konnect Chat   <span id="hide" className="text-danger" style={{ cursor: 'pointer', float: 'right' }} >X</span>
                            </div>
                        </div>

                        <div id='chat-messages'></div>


                        <div style={{ marginTop: '23%' }} className="input-group">
                            <input id='chat-input' className="form-control rounded-2  border-dark" rows='3' placeholder="Type message here..." />
                            <span className="input-group-addon btn btn-primary " id="send-btn">Send</span>
                        </div>

                    </div>
                    <div className="col-md-3 chat-col d-print-none mb-2 bg-white " id='part-pane' hidden={true}>
                        <div className="row">
                            <div className="col-12 font-weight-bold text-center mb-3">Participants <span id="partCount"></span> <span id="hidepart" className="text-danger"
                                style={{ cursor: 'pointer', float: 'right' }}>X</span>
                            </div>
                        </div>

                        <div id="part-area">

                        </div>


                        <div style={{ textAlign: 'center' }}>
                            <span data-toggle="modal" data-target="#invite" className="btn btn-secondary " id="inv">Invite</span>
                            <span className=" btn btn-secondary ml-5" hidden={true} id="showb">Mute All</span>

                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-dark footer">
                <div className="pull-right room-comm" hidden={true}>
                    <button className="btn btn-lg rounded-2 btn-no-effect" id='toggle-video' title="Mute video">
                        <i className="fa fa-video text-light circle-icon"></i>
                    </button>
                    <button className="btn btn-lg rounded-2 btn-no-effect" id='toggle-mute' title="Mute audio">
                        <i className="fa fa-microphone-alt text-light circle-icon"></i>
                    </button>
                    <button className="btn btn-lg rounded-2 btn-no-effect" id='share-screen' title="Share screen">
                        <i className="fa fa-desktop text-light circle-icon"></i>
                    </button>

                    <button className="btn btn-lg rounded-2 btn-no-effect" id='toggle-part-pane' title="Participants">
                        <i data-count="" style={{ lineHeight: '1px', paddingTop: '19px', fontSize: '20px' }} className="fa fa-user-friends text-light circle-icon badgePart"></i>
                    </button>

                    <button className="btn btn-lg rounded-2 btn-no-effect" id='record' title="Record">
                        <i className="fa fa-dot-circle text-light circle-icon"></i>
                    </button>

                    <button title="chat" className="btn btn-lg text-light pull-right btn-no-effect" id='toggle-chat-pane'>
                        <i className="fa fa-comment-alt circle-icon"></i> <span className="badge badge-danger very-lgall font-weight-lighter" id='new-chat-notification' hidden={true}>New message</span>
                    </button>

                    <button className="btn btn-lg rounded-2 btn-no-effect" id="leaveMeeting">
                        <a onClick={() => showConferenceLanding('leave')} className="text-light text-decoration-none"><i className="fa fa-phone circle-icon1" title="Leave"></i></a>
                    </button>

                    <div className="btn-group-vertical" id="endMeeting" hidden={true}>
                        <div className="btn-group" >
                            <button className="btn btn-lg rounded-2 btn-no-effect text-light" data-toggle="dropdown"><i className="fa fa-phone circle-icon1" title="End"></i>

                            </button>
                            <div className="dropdown-menu endMeeting">
                                <a className="dropdown-item bg-danger text-white mb-1" id="endMeetingBtn">End Meeting for All</a>
                                <a className="dropdown-item bg-dark text-white" onClick={() => showConferenceLanding('leave')}>Leave Meeting</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Room;
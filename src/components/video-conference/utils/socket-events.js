import { h } from './helpers';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import io from "socket.io-client";
import { API_ROOT } from "../../../agent";
import Swal from 'sweetalert2';



let notyf = new Notyf({
    duration: 4000,
    ripple: true,
    position: { x: 'right', y: 'top' }
});



export const SocketEvents = {

    onSocketEventsLoaded: () => {

        let room;
        let id;
        let username;
        let scheduleMeetingData;
        let admitted;

        const type = h.getQString(window.location.href, 'meetingID');

        if (type) {
            scheduleMeetingData = JSON.parse(sessionStorage.getItem("meetingData"))
            admitted = JSON.parse(sessionStorage.getItem("admitted"));

            room = h.getQString(window.location.href, 'meetingID')
            id = scheduleMeetingData?.id || h.getQString(window.location.href, 'id');
            username = scheduleMeetingData?.isNewMeeting ? scheduleMeetingData?.schedulerName || sessionStorage.getItem('username') : sessionStorage.getItem('username');

        } else {
            room = h.getQString(window.location.href, 'id') || sessionStorage.getItem('meetinglink');
            username = sessionStorage.getItem('username');
        }

        if (!room) {
            return;
        }
        else if (!username) {
            document.querySelector('.cont').hidden = true;
            document.querySelector('#username-set').attributes.removeNamedItem('hidden');
            document.querySelector('#meeting-link').value = window.location.href;
            document.querySelector('#meeting-link').disabled = true;
            document.querySelector('#meeting-link').hidden = true;
        }
        else {

            const isNew = JSON.parse(sessionStorage.getItem("isNew"));
            const isNewMeeting = JSON.parse(sessionStorage.getItem("isNewMeeting"));

            let commElem = document.getElementsByClassName('room-comm');

            document.getElementById('lnks').hidden = true;
            document.querySelector('.cont').hidden = true;


            for (let i = 0; i < commElem.length; i++) {
                commElem[i].attributes.removeNamedItem('hidden');
            }

            document.querySelector('.current-url').innerHTML = window.location.href;


            let pc = [];
            let socket;

            if (type) {
                socket = io(`${API_ROOT}/schedulemeetinggateway`);
                document.getElementById("leaveMeeting").hidden = true;
                document.getElementById("endMeeting").hidden = false;

            } else {
                socket = io(`${API_ROOT}/flatmeetinggateway`);
                document.getElementById("endMeeting").hidden = true;
                document.getElementById("leaveMeeting").hidden = false;
            }

            let socketId = '';
            let myStream = '';
            let screen = '';
            let recordedStream = [];
            let mediaRecorder = '';

            if (scheduleMeetingData) {
                if (!scheduleMeetingData.hostVideo && isNewMeeting) {
                    getAndSetUserStreamWithVideoOff();
                } else if (!scheduleMeetingData.participantVideo && !isNewMeeting) {
                    getAndSetUserStreamWithVideoOff();
                }
                else {
                    if (scheduleMeetingData.hostVideo && isNewMeeting) {
                        getAndSetUserStream();
                    } else if (scheduleMeetingData.participantVideo && !isNewMeeting) {
                        getAndSetUserStream();
                    }

                }
            } else {
                getAndSetUserStream();
            }


            socket.on('connect', () => {
                //set socketId
                socketId = socket.io.engine.id;

                if (scheduleMeetingData) {
                    if (scheduleMeetingData.waitingRoom && !isNewMeeting && !admitted) {
                        document.querySelector('.room-comm').hidden = true;
                        document.querySelector('.footer').hidden = true;
                        document.getElementById('lnks').attributes.removeNamedItem('hidden');
                        document.querySelector('#username-set').attributes.removeNamedItem('hidden');
                        document.querySelector('#meeting-link').value = window.location.href;
                        document.querySelector('#meeting-link').disabled = true;
                        document.querySelector('#meeting-link').hidden = true;
                        document.getElementById("waitingMsg").innerHTML = "Please wait, the meeting host will let you in soon.";
                        document.querySelector(".headerText").innerHTML = `${scheduleMeetingData.topic}`;
                        document.getElementById('wmsg').click();

                        socket.emit("waiter", {
                            name: username,
                            meetingId: room,
                            socketId: socketId
                        })
                    }
                }

                document.getElementById('admitBtn').addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    socket.emit('admit', {
                        meetingId: room,
                        waiterId: sessionStorage.getItem('currentWaiter')
                    })
                })

                if (!isNewMeeting) {
                    document.getElementById("endMeeting").hidden = true;
                    document.getElementById("leaveMeeting").hidden = false;
                }


                socket.on('waiter', data => {
                    document.getElementById("waitingMsg").innerHTML = `${data.message}`;
                    document.querySelector('#admitBtn').hidden = false;
                    document.querySelector('#removeBtn').hidden = false;
                    document.querySelector('#cancelBtn').hidden = true;
                    document.querySelector(".headerText").innerHTML = `${scheduleMeetingData.topic}`;
                    sessionStorage.setItem("currentWaiter", data.socketId);
                    document.getElementById('wmsg').click();
                })

                socket.on('admitted', data => {
                    sessionStorage.setItem('admitted', JSON.stringify(true));
                    window.location.reload();
                })

                socket.on('removed', data => {
                    sessionStorage.setItem('removed', JSON.stringify(true));
                    window.location.href = `${window.location.origin}/conference`;
                })

                if (!type) {
                    if (isNew) {
                        socket.emit('createRoom', {
                            room: room,
                            socketId: socketId,
                            isNew: isNew,
                            user: username
                        });
                    } else {
                        socket.emit('joinRoom', {
                            room: room,
                            socketId: socketId,
                            isNew: isNew,
                            user: username
                        });
                    }
                } else {
                    if (isNewMeeting) {
                        socket.emit('startMeeting', {
                            id: id,
                            name: username,
                            meetingId: room,
                            socketId: socketId,
                            isNewMeeting: isNewMeeting
                        });
                    } else {
                            if(scheduleMeetingData.waitingRoom && !admitted) {
                                socket.emit('joinWaitingRoom', {
                                    id: id,
                                    name: username,
                                    meetingId: room,
                                    socketId: socketId,
                                    isNewMeeting: isNewMeeting
                                });
                            } else {
                                socket.emit('joinMeeting', {
                                    id: id,
                                    name: username,
                                    meetingId: room,
                                    socketId: socketId,
                                    isNewMeeting: isNewMeeting
                                });
                            }
                    }

                }

                document.getElementById('endMeetingBtn').addEventListener('click', (e) => {
                    e.preventDefault();
                    Swal.fire({
                        title: 'Are you sure you want to end the meeting?',
                        text: "Thank you for attending the meeting.",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#754ffe',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            socket.emit('endMeeting', {
                                id: id,
                                meetingId: room
                            })
                        }
                    })
                })

                document.getElementById('removeBtn').addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    socket.emit('removeUser', {
                        meetingId: room,
                        waiterId: sessionStorage.getItem('currentWaiter')
                    })
                })

                socket.on('meetingEnded', data => {
                    h.flushData();
                    notyf.success(data.message);
                    window.location.href = `${window.location.origin}/conference`
                })

                socket.on('exception', ex => {
                    document.querySelector('.room-comm').hidden = true;
                    document.querySelector('.footer').hidden = true;
                    document.getElementById('lnks').attributes.removeNamedItem('hidden');
                    document.querySelector('.cont').attributes.removeNamedItem('hidden');
                    document.getElementById("errMsg").innerHTML = ex.message;
                    document.getElementById('items').click();
                })

                socket.on('count', (data) => {
                    if (data.count && data.users) {
                        if (data.isNew) {
                            document.getElementById("showb").attributes.removeNamedItem('hidden');

                        }

                        populateParticipantsList(data);

                        if(scheduleMeetingData) {
                            if(scheduleMeetingData.muteParticipantOnEntry && !isNewMeeting) {
                                if(!!document.querySelector('.mute-remote-mic')) {
                                    document.getElementById('mute-remote').click()
                                }
                            }
                        }

                    }
                })

                socket.on('userLeft', (data) => {
                    notyf.success(`${data.name.toUpperCase()} has left the meeting.`);

                    const container = document.querySelector('#part-area');
                    removeAllChildNodes(container)

                    if (data.users.length <= 1) {
                        document.getElementById('showb').innerHTML = 'Mute All';
                    }

                    populateParticipantsList(data);


                });


                socket.on('new user', (data) => {
                    socket.emit('newUserStart', { to: data.socketId, sender: socketId });
                    pc.push(data.socketId);
                    init(true, data.socketId);

                    notyf.success(`${data.user.toUpperCase()} joined the meeting.`);
                    const container = document.querySelector('#part-area');
                    removeAllChildNodes(container)

                    populateParticipantsList(data);


                    setTimeout(() => {
                        if(scheduleMeetingData && (isNewMeeting && scheduleMeetingData.muteParticipantOnEntry)) {
                            if (!document.getElementsByClassName('remote-video')[0]) {
                                return;
                            }
                            h.muteParticipants();
                        }
                    }, 5000)

                });

                socket.on('newUserStart', (data) => {
                    pc.push(data.sender);
                    init(false, data.sender);
                });


                socket.on('ice candidates', async (data) => {
                    return data.candidate ? await pc[data.sender].addIceCandidate(new RTCIceCandidate(data.candidate)) : '';
                });


                socket.on('sdp', async (data) => {
                    if (data.description.type === 'offer') {

                        const d = data.description;
                        if (d) {
                            await pc[data.sender].setRemoteDescription(new RTCSessionDescription(data.description))
                        }
                        //data.description ? await pc[data.sender].setRemoteDescription( new RTCSessionDescription( data.description ) ) : '';

                        h.getUserFullMedia().then(async (stream) => {
                            if (!document.getElementById('local').srcObject) {
                                h.setLocalStream(stream);
                            }

                            //save my stream
                            myStream = stream;

                            stream.getTracks().forEach((track) => {
                                pc[data.sender].addTrack(track, stream);
                            });

                            let answer = await pc[data.sender].createAnswer();

                            await pc[data.sender].setLocalDescription(answer);

                            socket.emit('sdp', { description: pc[data.sender].localDescription, to: data.sender, sender: socketId });
                        }).catch((e) => {
                            console.error(e);
                        });
                    }

                    else if (data.description.type === 'answer') {
                        await pc[data.sender].setRemoteDescription(new RTCSessionDescription(data.description));
                    }

                });


                socket.on('chat', (data) => {
                    h.addChat(data, 'remote');
                });
            });


            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            ;


            function getAndSetUserStream() {
                h.getUserFullMedia().then((stream) => {
                    //save my stream
                    myStream = stream;
                    h.setLocalStream(stream);

                    if(isNewMeeting) {
                        if(scheduleMeetingData && scheduleMeetingData.recordMeeting) {
                            if (myStream && myStream.getTracks().length) {
                                startRecording(myStream);
                            }
                            else {
                                h.getUserFullMedia().then((videoStream) => {
                                    startRecording(videoStream);
                                }).catch(() => { });
                            }
                        }
                    }

                }).catch((e) => {
                    console.error(`stream error: ${e}`);
                });
            }

            function getAndSetUserStreamWithVideoOff() {
                h.getUserFullMediaWithVideoOff().then((stream) => {
                    //save my stream
                    myStream = stream;

                    h.setLocalStream(stream);
                }).catch((e) => {
                    console.error(`stream error: ${e}`);
                });
            }


            function populateParticipantsList(participants) {
                document.getElementsByClassName("badgePart")[0].setAttribute("data-count", participants.count);

                document.getElementById("partCount").innerHTML = `(${participants.count})`;

                for (const d of participants.users) {

                    //create necessary element for the UI
                    const div1 = document.createElement('div');
                    const div2 = document.createElement('div');
                    const p = document.createElement('p');
                    const span = document.createElement('span');
                    const hr = document.createElement('hr');

                    //give each element the needed class attribute
                    div1.id = "participants";
                    div2.style.display = "flex";
                    div2.style.justifyContent = "space-between";
                    span.id = "mute-one"
                    span.className = "btn btn-primary";

                    //append element to the UI
                    document.getElementById("part-area").append(div1);
                    div1.append(div2);
                    div1.append(hr);
                    div2.append(p);
                    // div2.append(span);

                    //bind values to the element

                    p.innerHTML = d.name ? `${d.name.toUpperCase()}` : `${d.toUpperCase()}`;
                    span.innerHTML = "Mute"

                }

            }


            function sendMsg(msg) {
                let data = {
                    room: room,
                    msg: msg,
                    sender: username
                };

                //emit chat message
                socket.emit('chat', data);

                //add localchat
                h.addChat(data, 'local');
            }



            function init(createOffer, partnerName) {
                pc[partnerName] = new RTCPeerConnection(h.getIceServer());

                if (screen && screen.getTracks().length) {
                    screen.getTracks().forEach((track) => {
                        pc[partnerName].addTrack(track, screen);//should trigger negotiationneeded event
                    });
                }

                else if (myStream) {
                    myStream.getTracks().forEach((track) => {
                        pc[partnerName].addTrack(track, myStream);//should trigger negotiationneeded event
                    });
                }

                else {
                    h.getUserFullMedia().then((stream) => {
                        //save my stream
                        myStream = stream;

                        stream.getTracks().forEach((track) => {
                            pc[partnerName].addTrack(track, stream);//should trigger negotiationneeded event
                        });

                        h.setLocalStream(stream);
                    }).catch((e) => {
                        console.error(`stream error: ${e}`);
                    });
                }



                //create offer
                if (createOffer) {
                    pc[partnerName].onnegotiationneeded = async () => {
                        let offer = await pc[partnerName].createOffer();

                        await pc[partnerName].setLocalDescription(offer);

                        socket.emit('sdp', { description: pc[partnerName].localDescription, to: partnerName, sender: socketId });
                    };
                }



                //send ice candidate to partnerNames
                pc[partnerName].onicecandidate = ({ candidate }) => {
                    socket.emit('ice candidates', { candidate: candidate, to: partnerName, sender: socketId });
                };



                //add
                pc[partnerName].ontrack = (e) => {
                    let str = e.streams[0];
                    if (document.getElementById(`${partnerName}-video`)) {
                        document.getElementById(`${partnerName}-video`).srcObject = str;
                    }

                    else {
                        //video elem
                        let newVid = document.createElement('video');
                        newVid.id = `${partnerName}-video`;
                        newVid.srcObject = str;
                        newVid.autoplay = true;
                        newVid.className = 'remote-video';

                        //username display
                        // let userNameDiv = document.createElement('div');
                        // userNameDiv.className = 'remote-video-user';
                        // userNameDiv.innerHTML = `${sessionStorage.getItem('username')}`;

                        //video controls elements
                        let controlDiv = document.createElement('div');
                        controlDiv.className = 'remote-video-controls';
                        controlDiv.innerHTML = `<i id="mute-remote" style="cursor: pointer;" className="fa fa-microphone text-white pr-3 mute-remote-mic" title="Mute"></i>
                            <i style="cursor: pointer;" className="fa fa-expand text-white expand-remote-video" title="Expand"></i>`;

                        //create a new div for card
                        let cardDiv = document.createElement('div');
                        cardDiv.className = 'card card-sm';
                        cardDiv.id = partnerName;
                        cardDiv.appendChild(newVid);
                        //cardDiv.appendChild(userNameDiv);
                        cardDiv.appendChild(controlDiv);

                        //put div in main-section elem
                        document.getElementById('videos').appendChild(cardDiv);

                        h.adjustVideoElemSize();
                    }
                };



                pc[partnerName].onconnectionstatechange = (d) => {
                    switch (pc[partnerName].iceConnectionState) {
                        case 'disconnected':
                        //socket.emit( 'userLeft', partnerName );
                        case 'failed':
                            h.closeVideo(partnerName);
                            //socket.emit( 'userLeft', partnerName );                        
                            break;

                        case 'closed':
                            h.closeVideo(partnerName);
                            break;
                    }
                };



                pc[partnerName].onsignalingstatechange = (d) => {
                    switch (pc[partnerName].signalingState) {
                        case 'closed':
                            console.log("Signalling state is 'closed'");
                            h.closeVideo(partnerName);
                            break;
                    }
                };
            }



            function shareScreen() {
                h.shareScreen().then((stream) => {
                    h.toggleShareIcons(true);

                    //disable the video toggle btns while sharing screen. This is to ensure clicking on the btn does not interfere with the screen sharing
                    //It will be enabled was user stopped sharing screen
                    h.toggleVideoBtnDisabled(true);

                    //save my screen stream
                    screen = stream;

                    //share the new stream with all partners
                    broadcastNewTracks(stream, 'video', false);

                    //When the stop sharing button shown by the browser is clicked
                    screen.getVideoTracks()[0].addEventListener('ended', () => {
                        stopSharingScreen();
                    });
                }).catch((e) => {
                    console.error(e);
                });
            }


            function stopSharingScreen() {
                //enable video toggle btn
                h.toggleVideoBtnDisabled(false);

                return new Promise((res, rej) => {
                    const s = screen.getTracks().length;
                    if (s) {
                        screen.getTracks().forEach(track => track.stop())
                    }
                    //screen.getTracks().length ? screen.getTracks().forEach( track => track.stop() ) : '';

                    res();
                }).then(() => {
                    h.toggleShareIcons(false);
                    broadcastNewTracks(myStream, 'video');
                }).catch((e) => {
                    console.error(e);
                });
            }



            function broadcastNewTracks(stream, type, mirrorMode = true) {
                h.setLocalStream(stream, mirrorMode);

                let track = type == 'audio' ? stream.getAudioTracks()[0] : stream.getVideoTracks()[0];

                for (let p in pc) {
                    let pName = pc[p];

                    if (typeof pc[pName] == 'object') {
                        h.replaceTrack(track, pc[pName]);
                    }
                }
            }


            function toggleRecordingIcons(isRecording) {
                let e = document.getElementById('record');

                if (isRecording) {
                    e.setAttribute('title', 'Stop recording');
                    e.children[0].classList.add('text-danger');
                    e.children[0].classList.remove('text-white');
                }

                else {
                    e.setAttribute('title', 'Record');
                    e.children[0].classList.add('text-white');
                    e.children[0].classList.remove('text-danger');
                }
            }


            function startRecording(stream) {
                mediaRecorder = new MediaRecorder(stream, {
                    mimeType: 'video/webm;codecs=vp9'
                });

                mediaRecorder.start(1000);
                toggleRecordingIcons(true);

                mediaRecorder.ondataavailable = function (e) {
                    recordedStream.push(e.data);
                };

                mediaRecorder.onstop = function () {
                    toggleRecordingIcons(false);

                    h.saveRecordedStream(recordedStream, username);

                    setTimeout(() => {
                        recordedStream = [];
                    }, 3000);
                };

                mediaRecorder.onerror = function (e) {
                    console.error(e);
                };
            }


            //Chat textarea
            document.getElementById('chat-input').addEventListener('keypress', (e) => {
                if (e.which === 13 && (e.target.value.trim())) {
                    e.preventDefault();

                    sendMsg(e.target.value);

                    setTimeout(() => {
                        e.target.value = '';
                    }, 50);
                }
            });

            //send button 
            document.getElementById('send-btn').addEventListener('click', (e) => {
                let msg = document.getElementById('chat-input').value;
                if (!msg) {
                    return;
                }

                e.preventDefault();

                sendMsg(msg);

                setTimeout(() => {
                    document.getElementById('chat-input').value = '';
                }, 50);

            });


            //When the video icon is clicked
            document.getElementById('toggle-video').addEventListener('click', (e) => {
                e.preventDefault();

                let elem = document.getElementById('toggle-video');

                if (myStream.getVideoTracks()[0].enabled) {
                    e.target.classList.remove('fa-video');
                    e.target.classList.add('fa-video-slash');
                    elem.setAttribute('title', 'Show Video');

                    myStream.getVideoTracks()[0].enabled = false;
                }

                else {
                    e.target.classList.remove('fa-video-slash');
                    e.target.classList.add('fa-video');
                    elem.setAttribute('title', 'Hide Video');

                    myStream.getVideoTracks()[0].enabled = true;
                }

                broadcastNewTracks(myStream, 'video');


            });


            document.getElementById('showb').addEventListener('click', (e) => {
                if (!document.getElementsByClassName('remote-video')[0]) {
                    return;
                }
                if (document.getElementsByClassName('remote-video')[0].muted) {
                    h.unMuteParticipants(e);
                } else {
                    h.muteParticipants(e);
                }
            })

            //When the mute icon is clicked
            document.getElementById('toggle-mute').addEventListener('click', (e) => {
                e.preventDefault();

                let elem = document.getElementById('toggle-mute');

                if (myStream.getAudioTracks()[0].enabled) {
                    e.target.classList.remove('fa-microphone-alt');
                    e.target.classList.add('fa-microphone-alt-slash');
                    elem.setAttribute('title', 'Unmute');

                    myStream.getAudioTracks()[0].enabled = false;
                }

                else {
                    e.target.classList.remove('fa-microphone-alt-slash');
                    e.target.classList.add('fa-microphone-alt');
                    elem.setAttribute('title', 'Mute');

                    myStream.getAudioTracks()[0].enabled = true;
                }

                broadcastNewTracks(myStream, 'audio');
            });


            //When user clicks the 'Share screen' button
            document.getElementById('share-screen').addEventListener('click', (e) => {
                e.preventDefault();

                if (screen && screen.getVideoTracks().length && screen.getVideoTracks()[0].readyState != 'ended') {
                    stopSharingScreen();
                }

                else {
                    shareScreen();
                }
            });


            //When record button is clicked
            document.getElementById('record').addEventListener('click', (e) => {
                /**
                 * Ask user what they want to record.
                 * Get the stream based on selection and start recording
                 */
                if (!mediaRecorder || mediaRecorder.state == 'inactive') {
                    h.toggleModal('recording-options-modal', true);
                }

                else if (mediaRecorder.state == 'paused') {
                    mediaRecorder.resume();
                }

                else if (mediaRecorder.state == 'recording') {
                    mediaRecorder.stop();
                }
            });


            //When user choose to record screen
            document.getElementById('record-screen').addEventListener('click', () => {
                h.toggleModal('recording-options-modal', false);

                if (screen && screen.getVideoTracks().length) {
                    startRecording(screen);
                }

                else {
                    h.shareScreen().then((screenStream) => {
                        startRecording(screenStream);
                    }).catch(() => { });
                }
            });


            //When user choose to record own video
            document.getElementById('record-video').addEventListener('click', () => {
                h.toggleModal('recording-options-modal', false);

                if (myStream && myStream.getTracks().length) {
                    startRecording(myStream);
                }

                else {
                    h.getUserFullMedia().then((videoStream) => {
                        startRecording(videoStream);
                    }).catch(() => { });
                }
            });

            document.getElementById('copy-url').addEventListener('click', e => {
                let r = document.createRange();
                r.selectNode(document.getElementById('sample'));
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(r);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
                document.getElementById('cop').textContent = 'Copied!'

                setTimeout(() => {
                    document.getElementById('cl').click();
                    document.getElementById('cop').textContent = 'Copy'
                }, 3000);
            })

            sessionStorage.removeItem('meetinglink');
        }

    }
}


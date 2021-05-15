import { h } from './helpers';
import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { tokenPlugin, API_ROOT } from '../../../agent';


const superagent = superagentPromise(_superagent, global.Promise);


export const UiEvents = {

    onUiEventsLoaded: () => {
        //When the chat icon is clicked
        document.querySelector('#toggle-chat-pane').addEventListener('click', (e) => {

            let chatElem = document.querySelector('#chat-pane');
            let mainSecElem = document.querySelector('#main-section');

            document.getElementById('hidepart').click();

            if (chatElem.classList.contains('chat-opened')) {
                chatElem.setAttribute('hidden', true);
                mainSecElem.classList.remove('col-md-9');
                mainSecElem.classList.add('col-md-12');
                chatElem.classList.remove('chat-opened');
            }

            else {
                chatElem.attributes.removeNamedItem('hidden');
                mainSecElem.classList.remove('col-md-12');
                mainSecElem.classList.add('col-md-9');
                chatElem.classList.add('chat-opened');
            }


            //remove the 'New' badge on chat icon (if any) once chat is opened.
            setTimeout(() => {
                if (document.querySelector('#chat-pane').classList.contains('chat-opened')) {
                    h.toggleChatNotificationBadge();
                }
            }, 300);
        });

        //When the chat icon is clicked
        document.querySelector('#toggle-part-pane').addEventListener('click', (e) => {

            document.getElementById('hide').click();


            let partElem = document.querySelector('#part-pane');
            let mainSecElem = document.querySelector('#main-section');

            if (partElem.classList.contains('chat-opened')) {
                partElem.setAttribute('hidden', true);
                mainSecElem.classList.remove('col-md-9');
                mainSecElem.classList.add('col-md-12');
                partElem.classList.remove('chat-opened');
            }

            else {
                partElem.attributes.removeNamedItem('hidden');
                mainSecElem.classList.remove('col-md-12');
                mainSecElem.classList.add('col-md-9');
                partElem.classList.add('chat-opened');
            }

        });


        document.getElementById('hide').addEventListener('click', () => {

            let chatElem = document.querySelector('#chat-pane');
            let mainSecElem = document.querySelector('#main-section');

            chatElem.setAttribute('hidden', true);
            mainSecElem.classList.remove('col-md-9');
            mainSecElem.classList.add('col-md-12');

            mainSecElem.classList.remove('col-md-9');
            mainSecElem.classList.add('col-md-12');
            chatElem.classList.remove('chat-opened');
        })


        document.getElementById('hidepart').addEventListener('click', () => {

            let chatElem = document.querySelector('#part-pane');
            let mainSecElem = document.querySelector('#main-section');

            chatElem.setAttribute('hidden', true);
            mainSecElem.classList.remove('col-md-9');
            mainSecElem.classList.add('col-md-12');

            mainSecElem.classList.remove('col-md-9');
            mainSecElem.classList.add('col-md-12');
            chatElem.classList.remove('chat-opened');
        })

        //When the video frame is clicked. This will enable picture-in-picture
        document.getElementById('local').addEventListener('click', () => {
            if (!document.pictureInPictureElement) {
                document.getElementById('local').requestPictureInPicture()
                    .catch(error => {
                        // Video failed to enter Picture-in-Picture mode.
                        console.error(error);
                    });
            }

            else {
                document.exitPictureInPicture()
                    .catch(error => {
                        // Video failed to leave Picture-in-Picture mode.
                        console.error(error);
                    });
            }
        });



        //When the 'Create room" is button is clicked
        document.getElementById('create-room').addEventListener('click', (e) => {
            e.preventDefault();

            let roomName = document.querySelector('#room-name').value;
            let yourName = document.querySelector('#your-name').value;


            roomName = roomName.replace(/[.*'#_!@%^&+-?^${}()|[\]\\]/g, '').trim().split(' ').join('');
            // if(!roomName.match(/^[a-zA-Z0-9]*$/))
            // {
            //     return document.querySelector( '#err-msg' ).innerHTML = "Room name cannot contain special characters.";
            // }

            sessionStorage.setItem('isNew', JSON.stringify(true));


            if (roomName && yourName) {
                //remove error message, if any
                document.querySelector('#err-msg').innerHTML = "";

                //save the user's name in sessionStorage
                sessionStorage.setItem('username', yourName);

                //create room link
                let roomLink = `${window.location.href}/?id=${roomName.trim().replace(' ', '_')}_${h.generateRandomString()}`;


                window.location.href = roomLink;

                //empty the values
                document.querySelector('#room-name').value = '';
                document.querySelector('#your-name').value = '';
            }

            else {
                document.querySelector('#err-msg').innerHTML = "All fields are required";
            }
        });


        //When the 'Enter room' button is clicked.
        document.getElementById('enter-room').addEventListener('click', async (e) => {
            e.preventDefault();

            const meetingId = h.getQString(window.location.href, 'meetingID');
            if (meetingId) {
                const { body } = await superagent.get(`${API_ROOT}/meeting/${h.getQString(window.location.href, 'id')}`).use(tokenPlugin);
                body.isNewMeeting = false;
                sessionStorage.setItem("meetingData", JSON.stringify(body));
            }

            sessionStorage.setItem('isNew', JSON.stringify(false));
            sessionStorage.setItem('isNewMeeting', JSON.stringify(false));


            let isMeetingLinkExist = document.querySelector('#meeting-link').getAttribute('hidden');
            let name = document.querySelector('#username').value;

            if (name && !isMeetingLinkExist) {
                let meetingLink = document.querySelector('#meeting-link').value.split('=')[1];
                if (meetingLink) {
                    sessionStorage.setItem('meetinglink', meetingLink);
                } else {
                    document.querySelector('#err-msg-username').innerHTML = "Please enter the correct meeting link";
                    return;
                }
                //remove error message, if any
                document.querySelector('#err-msg-username').innerHTML = "";

                //save the user's name in sessionStorage
                sessionStorage.setItem('username', name);

                //reload room
                window.location.reload();
            }
            else {
                if (!name && isMeetingLinkExist != null) {
                    document.querySelector('#err-msg-username').innerHTML = "Please enter your name";
                } else {
                    document.querySelector('#err-msg-username').innerHTML = "All fields are required";
                }
            }
        });



        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('expand-remote-video')) {
                h.maximiseStream(e);
            }

            else if (e.target && e.target.classList.contains('mute-remote-mic')) {
                h.singleStreamToggleMute(e);
            }
        });


        document.getElementById('closeModal').addEventListener('click', () => {
            h.toggleModal('recording-options-modal', false);
        });


        document.getElementById('join-meeting').addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelector('.cont').hidden = true;
            document.querySelector('#room-create').hidden = true;
            document.querySelector('#username-set').attributes.removeNamedItem('hidden');


        });

        document.getElementById('get-started').addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelector('.cont').hidden = true;
            document.querySelector('#room-create').attributes.removeNamedItem('hidden');

        });

    }
}
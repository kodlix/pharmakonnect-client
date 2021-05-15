import React, { useEffect } from 'react';

const PWAInstall = ({ currentUser }) => {
    useEffect(() => {
        const divInstall = document.getElementById('installContainer');
        const butInstall = document.getElementById('butInstall');

        window.addEventListener('beforeinstallprompt', (event) => {
            console.log('👍', 'beforeinstallprompt', event);
            // Stash the event so it can be triggered later.
            window.deferredPrompt = event;
            // Remove the 'hidden' class from the install button container
            divInstall.classList.toggle('hidden', false);
        });

        butInstall.addEventListener('click', () => {
            console.log('👍', 'butInstall-clicked');
            const promptEvent = window.deferredPrompt;
            if (!promptEvent) {
                // The deferred prompt isn't available.
                return;
            }
            // Show the install prompt.
            promptEvent.prompt();
            // Log the result
            promptEvent.userChoice.then((result) => {
                console.log('👍', 'userChoice', result);
                // Reset the deferred prompt variable, since
                // prompt() can only be called once.
                window.deferredPrompt = null;
                // Hide the install button.
                divInstall.classList.toggle('hidden', true);
            });
        });
    }, []);
    return (
        <div id="installContainer" className="hidden">
            <div className="label">
                Hi {currentUser.username}, play your games faster with our free app.
            </div>
            <button id="butInstall" type="button">
                Install
          </button>
        </div>
    )
}

export default PWAInstall;
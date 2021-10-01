//Form
let hash = window.location.hash;
if (hash === '#submitted') {
    document.querySelector('.submitted').classList.remove('hidden');
}

//Modal
document.addEventListener('DOMContentLoaded', async () => {
    try {
        MicroModal.init({
            awaitCloseAnimation: true,
            disableFocus: true,
        });
    } catch (e) {
        console.log('micromodal error: ', e);
    }
});

function sendEmail() {
    window.location = 'mailto:eloiperezag@gmail.com';
}

function toClipboard() {
    navigator.clipboard.writeText('eloiperezag@gmail.com')
}
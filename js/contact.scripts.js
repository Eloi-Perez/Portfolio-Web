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
    window.open('mailto:Eloi%20Perez%20Aguilar<eloiperezag@gmail.com>', '_blank');
}

function toClipboard() {
    navigator.clipboard.writeText('eloiperezag@gmail.com')
}

const emailLink = document.querySelector('#email-link');
emailLink.addEventListener('contextmenu', event => {
    event.preventDefault();
    MicroModal.show('modal-email', { disableFocus: true });
});
let hash = window.location.hash;
if (hash === '#submitted') {
    console.log(hash);
    document.querySelector('.submitted').classList.remove = 'hidden';
}
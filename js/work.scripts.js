//Hover API
const link_to_api = document.querySelectorAll('.link_to_api');
const link_to_client = document.querySelector('#link_to_client');
const film_api = document.querySelector('#Film_API');
const film_client = document.querySelectorAll('.Film_Client');
const toggleHoverClient = () => film_client.forEach(el => el.classList.toggle('hover_link'));
const toggleHoverAPI = () => film_api.classList.toggle('hover_link');
link_to_api.forEach(el => el.addEventListener('mouseover', toggleHoverAPI));
link_to_api.forEach(el => el.addEventListener('mouseout', toggleHoverAPI));
link_to_client.addEventListener('mouseover', toggleHoverClient);
link_to_client.addEventListener('mouseout', toggleHoverClient);


//Modal
document.addEventListener("DOMContentLoaded", async () => {
    try {
        MicroModal.init({
            awaitCloseAnimation: true,
        });
    } catch (e) {
        console.log("micromodal error: ", e);
    }
});

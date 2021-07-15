// Work page
const link_to_api = document.querySelector('#link_to_api');
const link_to_client = document.querySelector('#link_to_client');
const film_api = document.querySelector('#Film_API');
const film_client = document.querySelector('#Film_Client');
const toggleHoverClient = () => film_client.classList.toggle('hover_link');
const toggleHoverAPI = () => film_api.classList.toggle('hover_link');
link_to_api.addEventListener('mouseover', toggleHoverAPI);
link_to_api.addEventListener('mouseout', toggleHoverAPI);
link_to_client.addEventListener('mouseover', toggleHoverClient);
link_to_client.addEventListener('mouseout', toggleHoverClient);
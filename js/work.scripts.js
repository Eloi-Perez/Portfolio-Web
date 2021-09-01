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
            awaitCloseAnimation: true, // set to false, to remove close animation
            onShow: modal => {
                console.log("micromodal open");
                addModalContentHeight('short');
                /**************************
                  For full screen scrolling modal, 
                  uncomment line below & comment line above
                 **************************/
                //addModalContentHeight('tall');
            },
            onClose: modal => {
                console.log("micromodal close");
            }
        });
    } catch (e) {
        console.log("micromodal error: ", e);
    }
});

// function addModalContentHeight(type) {
//     var type = (arguments[0] != null) ? arguments[0] : 'short';
//     var modalContainer = document.querySelector("#modal-container");
//     var modalHeader = document.querySelector("#modal-header");
//     var modalContentContent = document.querySelector("#modal-content-content");
//     var modalContent = document.querySelector("#modal-content");
//     var modalFooter = document.querySelector("#modal-footer");

//     var modalIsDefined =
//         modalContainer.length &&
//         modalHeader.length &&
//         modalContent.length &&
//         modalFooter.length;

//     if (modalIsDefined) {
//         var modalContainerHeight = modalContainer.outerHeight();
//         var modalHeaderHeight = modalHeader.outerHeight();
//         var modalFooterHeight = modalFooter.outerHeight();

//         console.log("modalContainerHeight: ", modalContainerHeight);
//         console.log("modalHeaderHeight: ", modalHeaderHeight);
//         console.log("modalFooterHeight: ", modalFooterHeight);

//         var offset = 80;

//         var height = modalContainerHeight - (modalHeaderHeight + modalFooterHeight + offset);

//         console.log('height: ', height);

//         if (!isNaN(height)) {
//             height = height > 0 ? height : 20;
//             if (type == 'short') {
//                 modalContent.css({ 'height': height + 'px' });
//             }
//             else {
//                 modalContainer.css({ 'height': '100%', 'overflow-y': 'hidden', 'margin-top': '40px' });
//                 modalContentContent.css({ 'height': '100%', 'overflow-y': 'auto' });
//                 modalContent.css({ 'overflow-y': 'visible' });
//                 modalFooter.css({ 'margin-bottom': '120px' });
//             }
//             setTimeout(function () {
//                 modalContent.css({ 'display': 'block' });
//                 var modalContentDOM = document.querySelector('#modal-content');
//                 modalContentDOM.scrollTop = 0;
//             });
//         }

//     }

// }

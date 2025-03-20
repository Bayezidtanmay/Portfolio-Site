function showSidebar() {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex'
}

function hideSidebar() {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'none'
}

window.onload = function() {
    const modal = document.getElementById('modalbox');
    const showModalButton = document.querySelector('.show-modal');
    const closeButton = modal.querySelector('.modalclose');
    const body = document.body;


    modal.classList.add('visible');
    body.style.overflow = 'hidden'; 


    showModalButton.addEventListener('click', function(event) {
        event.preventDefault();
        modal.classList.toggle('visible');
        if (modal.classList.contains('visible')) {
            body.style.overflow = 'hidden'; 
        } else {
            body.style.overflow = ''; 
        }
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        modal.classList.remove('visible');
        body.style.overflow = '';  
    });
};


window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) { // Show button after scrolling down 100px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

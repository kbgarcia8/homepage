const links = document.querySelectorAll('.navbar-menu a');

function activateLink(e) {
    links.forEach(link => link.classList.remove('visited'));
    e.target.classList.add('visited');
}

links.forEach(link => {
    link.addEventListener('click', activateLink);
});
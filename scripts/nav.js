const menuIcon = document.querySelector('.nav-icon');

menuIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active-nav');
    const icon = menuIcon.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
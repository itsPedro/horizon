const navContent = document.querySelector('.navbar');
class navFactory {
    constructor(){
        this.createNav();
    }
    
    createNav() {
        const link = 'https://itspedro.github.io/horizon/';
        navContent.innerHTML = `
            <a href="${link}/index.html">
                <img src="${link}assets/Horizon-logo.png" alt="Horizon Logo" class="logo">
            </a>
            <div class="nav-icon"><i class="fa-solid fa-bars"></i></div>
            
            <div class="nav-links">
                <ul>
                <li><a class="nav-link" href="${link}index.html"> INICIO</li></a>
                <li><a class="nav-link" href="${link}index.html#sobre">SOBRE</li></a>
                    <li><a class="nav-link" href="${link}index.html#diferenciais">DIFERENCIAIS</li></a>
                    <li><a class="nav-link" href="${link}index.html#ensinos">ENSINOS</li></a>
                    <li><a class="nav-link" href="${link}index.html#unidades">UNIDADES</li></a>
                    <li><a class="nav-link" href="${link}pages/blog.html">BLOG</li></a>
                    <li><a class="nav-link" href="${link}pages/help.html">DÚVIDAS</li></a>
                </ul>
                <span class="social-links-nav">
                    <a href="https://facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                </span>
            </div>
            
            `;
            this.menuIcon();
    }

    menuIcon() {
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
    }

}
new navFactory();
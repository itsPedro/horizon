const navContent = document.querySelector('.navbar');
class navFactory {
    constructor(){
        this.createNav();
    }
    
    createNav() {
        navContent.innerHTML = `
            <a href="../index.html">
                <img src="../assets/Horizon-logo.png" alt="Horizon Logo" class="logo">
            </a>
            <div class="nav-icon"><i class="fa-solid fa-bars"></i></div>
            
            <div class="nav-links">
                <ul>
                <li><a class="nav-link" href="../index.html"> Inicio</li></a>
                <li><a class="nav-link" href="../index.html#ensinos">Ensinos</li></a>
                    <li><a class="nav-link" href="../index.html#diferenciais">Diferenciais</li></a>
                    <li><a class="nav-link" href="../index.html#ensinos">Ensinos</li></a>
                    <li><a class="nav-link" href="../index.html#unidades">Unidades</li></a>
                    <li><a class="nav-link" href="../pages/blog.html">Blog</li></a>
                    <li><a class="nav-link" href="../pages/help.html">Dúvidas</li></a>
                </ul>
                <span class="social-links-nav">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
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
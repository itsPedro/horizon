const footer = document.querySelector('.footer');

class footerFactory {
    constructor() {
        this.createFooter();
    }
    
    createFooter() {
        const link = 'https://itspedro.github.io/horizon/';
        footer.innerHTML = `
            <div class="footer-cols">
            <div class="empresa footer-col">
                <img src="${link}assets/Horizon-logo-footer.png" alt="Horizon Logo" class="logo">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
            </div>
            <div class="help footer-col">
                <h3>Suporte</h3>
                <ul>
                    <li><a href="${link}pages/help.html">FAQ</a></li>
                    <li><a href="${link}blog.html">Blog</a></li>
                    <li><a href="${link}index.html#unidades">Unidades</a></li>
                </ul>
            </div>
            <div class="legal footer-col">
                <h3>legal</h3>
                <ul>
                    <li><a href="${link}pages/privacy.html">Política de Privacidade</a></li>
                    <li><a href="${link}pages/terms.html">Termos de Uso</a></li>
                </ul>
            </div>
            <div class="contact footer-col">
                <h3>Entre em contato conosco</h3>
                <p>Telefone: (11) 99999-9999</p>
                <p>Email: contato@horizon.com.br</p>
                <div class="social-links-footer">
                    <a href="https://facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>© 2023 Horizon. Todos os direitos reservados.</p>
        </div>      
        `;
    }
}

new footerFactory();
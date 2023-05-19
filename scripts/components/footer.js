const footer = document.querySelector('.footer');

class footerFactory {
    constructor() {
        this.createFooter();
    }

    createFooter() {
        footer.innerHTML = `
            <div class="footer-cols">
            <img src="../assets/Horizon-logo-footer.png" alt="Horizon Logo" class="logo">  
            <div class="help footer-col">
                <h2>Alguma dúvida?</h2>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="https://itspedro.github.io/horizon/index.html#unidades">Unidades</a></li>
                </ul>
            </div>
            <div class="contact footer-col">
                <h2>Entre em contato conosco</h2>
                <p>Telefone: (11) 99999-9999</p>
                <p>Email: contato@horizon.com.br</p>
                <div class="social-links-footer">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
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
const headerIMG = document.querySelector('.header');
const menuIcon = document.querySelector('.nav-icon');

class headerSlider {
    
    #currentImgIndex = 0;
    buttons;

    constructor(link){
        this.link = link;
        this.createSlider();
    };

    createSlider() {
        this.createImg();
        this.createBtn();
        this.activeBtn();
        this.autoSlider();
    };

    createImg(){
        headerIMG.style.backgroundImage = `url(${this.link[this.#currentImgIndex]})`;
    };

    createBtn(){
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('btns-slider-header');
        headerIMG.appendChild(this.buttonContainer);
        this.buttons = this.link.map((btn , index) =>{
            btn = document.createElement('button');
            btn.classList.add('btn-slider-header');
            btn.innerHTML = '<i class="fa-solid fa-circle-dot"></i>';
            this.buttonContainer.appendChild(btn);
            btn.addEventListener('click', () => {
                this.#currentImgIndex = index;
                this.createImg();
                this.activeBtn();
            });
            return btn;
        });
    };

    activeBtn(){
        this.buttons.forEach((btn, index) => {
            index === this.#currentImgIndex ? btn.classList.add('active-img') : btn.classList.remove('active-img');
        });
    };

    autoSlider(){
        setInterval(() => {
            this.#currentImgIndex = (this.#currentImgIndex + 1) % this.link.length;
            this.createImg();
            this.activeBtn();
        }, 3000);
    }

};

const headerImagens = [
    new headerSlider([
        './assets/content-images/header1.jpg',
        './assets/content-images/header2.jpg',
        './assets/content-images/header3.jpg'
    ]),
];

menuIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active-nav');
})
class mainDif {
    constructor(icone, texto) {
        this.icone = icone;
        this.texto = texto;
    }

    createDiv() {
        const div = document.createElement('div');
        div.classList.add('diferenciais-item');
        div.innerHTML = `
        <div class="diferenciais-icone">
            <i class="fa-solid ${this.icone} fa-2xl"></i>
        </div>
        <div class="diferenciais-texto">
            <h3>${this.texto}</h3>
        </div>
        `;
        return div;
    }

    displayDiff() {
        const main = document.querySelector('.main-diferenciais');
        main.appendChild(this.createDiv());
    }
}

const diferenciais = [
    new mainDif('fa-volleyball', 'Esportes'),
    new mainDif('fa-guitar', 'Músicas'),
    new mainDif('fa-palette', 'Arte'),
];

for (dif of diferenciais) {
    dif.displayDiff();
};
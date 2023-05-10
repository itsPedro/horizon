const headerIMG = document.querySelector('.header');
const menuIcon = document.querySelector('.nav-icon');

class headerSlider {

    #currentImgIndex = 0;
    buttons;

    constructor(link) {
        this.link = link;
        this.createSlider();
    };

    createSlider() {
        this.createImg();
        this.createBtn();
        this.activeBtn();
        this.autoSlider();
    };

    createImg() {
        headerIMG.style.backgroundImage = `url(${this.link[this.#currentImgIndex]})`;
    };

    createBtn() {
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('btns-slider-header');
        headerIMG.appendChild(this.buttonContainer);
        this.buttons = this.link.map((btn, index) => {
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

    activeBtn() {
        this.buttons.forEach((btn, index) => {
            index === this.#currentImgIndex ? btn.classList.add('active-img') : btn.classList.remove('active-img');
        });
    };

    autoSlider() {
        setInterval(() => {
            this.#currentImgIndex = (this.#currentImgIndex + 1) % this.link.length;
            this.createImg();
            this.activeBtn();
        }, 5000);
    }

};

const headerImagens = [
    new headerSlider([
        './assets/content-images/header1.jpg',
        './assets/content-images/header2.jpg'
    ]),
];

menuIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active-nav');
});

// class unitImgs {

//     #currentImgIndex = 0;
//     buttons;

//     constructor(url) {
//         this.url = url;
//         this.drawnIMG();
//     }

//     drawnIMG() {
//         this.url.map((img, index) => {
//             this.#currentImgIndex = index;
//             img = document.createElement('img');
//             img.classList.add('unit-img');
//             img.src = this.url[index];
//             document.querySelector('.unit-imgs').appendChild(img);
//         });
//     }
// }

// let allIMG = new unitImgs([
//     "https://placehold.co/600x400?text=Serviço+1&font=roboto",
//     "https://placehold.co/600x400?text=Serviço+2&font=roboto",
//     "https://placehold.co/600x400?text=Serviço+3&font=roboto",
// ]);

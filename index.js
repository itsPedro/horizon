const headerIMG = document.querySelector('.header');
const menuIcon = document.querySelector('.nav-icon');
const unitContent = document.querySelector('.main-unidades');
const currentImage = document.querySelector('.current-image');
const prevImage = document.querySelector('.prev-image');
const nextImage = document.querySelector('.next-image');
const sliderButton = document.querySelector(".sliderButton");

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

class unitImgs {

    #currentImgIndex = 0;
    buttons;

    constructor(images) {
        this.images = images;
        this.createSlider();
    }

    createSlider() {
        this.drawnIMG();
        this.createBtn();
        this.activeBtn();
    };


    drawnIMG() {


        currentImage.innerHTML = "";
        nextImage.innerHTML = "";
        prevImage.innerHTML = "";
        const contImg = currentImage.appendChild(document.createElement("div"));
        const nextImg = nextImage.appendChild(document.createElement("div"));
        const prevImg = prevImage.appendChild(document.createElement("div"));
        nextImg.classList.add('unit-img');
        contImg.classList.add('unit-img');
        prevImg.classList.add('unit-img');

        const imgElement = document.createElement("img");
        imgElement.alt = "Slider Image";

        const infoElement = document.createElement("div");
        infoElement.classList.add("unit-info");

        const h2Element = document.createElement("h2");
        const pElement = document.createElement("p");


    
        this.images.forEach((img, index) => {

            if (index === this.#currentImgIndex) {
                contImg.classList.add('on');
                imgElement.src = img.url;
                h2Element.textContent = img.cidade;
                pElement.textContent = `${img.rua},  ${img.telefone}`;
                contImg.appendChild(imgElement);
                contImg.appendChild(infoElement);
                infoElement.appendChild(h2Element);
                infoElement.appendChild(pElement);
            }
            // } else if ((index < this.images.length) && (index === this.#currentImgIndex + 1)) {
            //     nextImg.classList.add('border');
            //     imgElement.src = img.url;
            //     h2Element.textContent = img.cidade;
            //     pElement.textContent = img.rua;
            //     nextImg.appendChild(imgElement);
            //     nextImg.appendChild(infoElement);
            //     infoElement.appendChild(h2Element);
            //     infoElement.appendChild(pElement);
            // } else if ((index !== 0) && (index === this.#currentImgIndex - 1)) {
            //     prevImg.classList.add('border');
            //     imgElement.src = img.url;
            //     h2Element.textContent = img.cidade;
            //     pElement.textContent = img.rua;
            //     prevImg.appendChild(imgElement);
            //     prevImg.appendChild(infoElement);
            //     infoElement.appendChild(h2Element);
            //     infoElement.appendChild(pElement);
            // }

        });
    }


    createBtn() {
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('btns-slider-units');
        unitContent.appendChild(this.buttonContainer);
        this.buttons = this.images.map((btn, index) => {
            btn = document.createElement('button');
            btn.classList.add('btn-slider-header');
            btn.innerHTML = '<i class="fa-solid fa-circle-dot"></i>';
            this.buttonContainer.appendChild(btn);
            btn.addEventListener('click', () => {
                this.#currentImgIndex = index;
                this.drawnIMG();
                this.activeBtn();
            });
            return btn;
        });
    }

    activeBtn() {
        this.buttons.forEach((btn, index) => {
            index === this.#currentImgIndex ? btn.classList.add('active-img') : btn.classList.remove('active-img');
        });
    }


}

let allIMG = new unitImgs([
    {
        url: "./assets/content-images/unit-1.jpg",
        cidade: "Cidade1",
        rua: "Rua1",
        telefone: "Telefone1"
    },
    {
        url: "./assets/content-images/unit-2.jpg",
        cidade: "Cidade2",
        rua: "Rua2",
        telefone: "Telefone2"
    },
    {
        url: "./assets/content-images/unit-3.jpg",
        cidade: "Cidade3",
        rua: "Rua3",
        telefone: "Telefone3"
    },
]);

import { getSliderList } from "../../utils/misc.js";

const headerIMG = document.querySelector('.header');
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
            btn.innerHTML = `<input type="radio" name="header-btn" id="header-radio${index}">`;
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
        this.buttons.forEach((_, index) => {
            const radioInput = document.getElementById(`header-radio${index}`);
            radioInput.classList.add('radio-slider');
            radioInput.checked = (index === this.#currentImgIndex);
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
        './assets/content-images/index/header1.jpg',
        './assets/content-images/index/header2.jpg'
    ]),
];


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
        this.autoSlider();
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

        this.images.map((img, index) => {

            const imgElement = document.createElement("img");
            imgElement.alt = "Slider Image";

            const infoElement = document.createElement("div");
            infoElement.classList.add("unit-info");

            const h2Element = document.createElement("h2");
            const pElement = document.createElement("p");

            if (index === this.#currentImgIndex) {
                contImg.classList.add('on');
                imgElement.src = img.url;
                h2Element.textContent = img.cidade;
                pElement.textContent = `${img.rua},  ${img.telefone}`;
                contImg.appendChild(imgElement);
                contImg.appendChild(infoElement);
                infoElement.appendChild(h2Element);
                infoElement.appendChild(pElement);

            } else if ((index === this.#currentImgIndex + 1) ||
                (this.#currentImgIndex === this.images.length - 1 && index === 0)
            ) {
                nextImg.classList.add('border');
                imgElement.src = img.url;
                nextImg.appendChild(imgElement);

            } else if ((index === this.#currentImgIndex - 1) ||
                (this.#currentImgIndex === 0 && index === this.images.length - 1)
            ) {
                prevImg.classList.add('border');
                imgElement.src = img.url;
                prevImg.appendChild(imgElement);
            }

        });
    }

    createBtn() {
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('btns-slider-units');
        unitContent.appendChild(this.buttonContainer);
        this.buttons = this.images.map((btn, index) => {
            btn = document.createElement('button');
            btn.classList.add('btn-slider-header');
            btn.innerHTML = `<input type="radio" name="slider-btn" id="slider-radio${index}">`;
            this.buttonContainer.appendChild(btn);
            btn.addEventListener('click', () => {
                this.#currentImgIndex = index;
                this.drawnIMG();
                this.activeBtn();
            });
            return btn;
        });
        document.querySelector("#btn-next").addEventListener('click', () => {
            this.#currentImgIndex = (this.#currentImgIndex + 1) % this.images.length;
            this.drawnIMG();
            this.activeBtn();
        });
        document.querySelector("#btn-prev").addEventListener('click', () => {
            this.#currentImgIndex = this.#currentImgIndex !== 0 ? (this.#currentImgIndex - 1) % this.images.length : this.images.length - 1;
            this.drawnIMG();
            this.activeBtn();
        });

    }

    activeBtn() {
        this.buttons.forEach((_, index) => {
            const radioInput = document.getElementById(`slider-radio${index}`);
            radioInput.classList.add('radio-slider');
            radioInput.checked = (index === this.#currentImgIndex);
        });
    }

    autoSlider() {
        setInterval(() => {
            this.#currentImgIndex = (this.#currentImgIndex + 1) % this.images.length;
            this.drawnIMG();
            this.activeBtn();
        }, 8000);
    }


}

const allIMG = await getSliderList();
new unitImgs(allIMG);
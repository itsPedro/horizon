import { getPostById, getSliderList, getDifferentialsList, getEnsinosList } from "../utils/misc.js";
class headerSlider {
    
    #currentImgIndex = 0;
    buttons;
    headerIMG = document.querySelector('.header');

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
        this.headerIMG.style.backgroundImage = `url(${this.link[this.#currentImgIndex]})`;
    };

    createBtn() {
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('radios-slider');
        this.headerIMG.appendChild(this.buttonContainer);
        this.buttons = this.link.map((btn, index) => {
            btn = document.createElement('div');
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

new headerSlider([
        './assets/content-images/index/header1.jpg',
        './assets/content-images/index/header2.jpg'
]);

document.querySelector('.btn-sobre').addEventListener('click', () => {
    window.location.href = `/horizon/pages/post.html?id=0`
});

class differentialsContent {
    
    
    constructor(differentials) {
        this.differentials = differentials;
        this.createDifferentials();
    }
    
    createDifferentials() {
        const diferenciaisContent = document.querySelector('.diferenciais-content');

        diferenciaisContent.innerHTML = this.differentials.reduce((acc, cur) => {
            return acc += `
            
            <div class="card">
                <i class="fa-solid fa-${cur.icon}"></i>
                <p class="info">${cur.info}</p>
                <p class="description">
                    ${cur.description}
                </p>
            </div>
            
            `;
        }, '');
    }
};

const diferenciais = await getDifferentialsList();
new differentialsContent(diferenciais);


class ensinosContent {
    
        constructor(ensinos) {
            this.ensinos = ensinos;
            this.createEnsinos();
        }

        postRedirect(id) {
            const btnEnsinos = document.getElementById(id);
            btnEnsinos.addEventListener('click', () => {
                window.location.href = `/horizon/pages/post.html?id=${id}`;
            });
        }

    
        createEnsinos() {
            const ensinosContent = document.querySelector('.ensinos-content');
            
            this.ensinos.forEach(async (ensino) => {
                const ensinoPost = await getPostById(ensino.postID);
                ensinosContent.innerHTML += `
                <div class="ensino">
                    <span>${ensino.span}</span>
                    <h2>${ensinoPost.title}</h2>
                    <div class="ensino-img-content">
                        <button class="btn btn-ensinos" id="${ensinoPost.id}" >Saiba mais</button>
                        <img src="${ensinoPost.url}" alt="${ensinoPost.title}">
                    </div>
                </div>
                `;
                this.postRedirect(ensinoPost.id);
            });
        }
};

const ensinos = await getEnsinosList();
new ensinosContent(ensinos);

class unitImgs {

    #currentImgIndex = 0;
    buttons;
    unitContent = document.querySelector('.main-unidades');
    currentImage = document.querySelector('.current-image');
    prevImage = document.querySelector('.prev-image');
    nextImage = document.querySelector('.next-image');

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

        this.currentImage.innerHTML = "";
        this.nextImage.innerHTML = "";
        this.prevImage.innerHTML = "";
        const contImg = this.currentImage.appendChild(document.createElement("div"));
        const nextImg = this.nextImage.appendChild(document.createElement("div"));
        const prevImg = this.prevImage.appendChild(document.createElement("div"));
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
        this.buttonContainer.classList.add('radios-slider');
        this.unitContent.appendChild(this.buttonContainer);
        this.buttons = this.images.map((btn, index) => {
            btn = document.createElement('div');
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

class formHandler {
    constructor() {
        this.form = document.querySelector('.matricula-form');
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const check = this.checkTel(data);
        if (check) {
            console.log(data);
        } else {
            alert("Telefone inválido");
        }
        this.form.reset();
    }

    checkTel(data) {
        const regex = /^\(?\d{2}\)?[-.\s]?\9\d{4}[-.\s]?\d{4}$/;
        if (regex.test(data.telefone)) {
            return true;
        }
        return false;
    }

}

new formHandler();

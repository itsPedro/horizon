const headerIMG = document.querySelector('.header');
const menuIcon = document.querySelector('.nav-icon');
const unitContent = document.querySelector('.main-unidades');
const imgContent = document.querySelector('.unit-imgs');

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

//     constructor(images) {
//         this.images = images;
//         this.createSlider();
//     }

//     createSlider() {
//         this.drawnIMG();
//         this.createBtn();
//         this.activeBtn();
//     };


//     drawnIMG() {

//         imgContent.innerHTML = this.images.map((img, index) => {
//             if (index === this.#currentImgIndex) {
//                 return `
//                 <div class="unit-img on">
//                     <img src="${img.url}">
//                     <div class="unit-info">
//                         <h2>${img.cidade}</h2>
//                         <p>${img.rua}</p>
//                         <p>${img.telefone}</p>
//                     </div>
//                 </div>
//                 `
//             } else {
//                 return `
//                 <div class="unit-img border">
//                 <img src="${img.url}">
//                 <div class="unit-info">
//                   <h3>${img.cidade}</h3>
//                   <p>${img.rua}</p>
//                   <p>${img.telefone}</p>
//                 </div>
//                 `
//             }

//         });
//     }


//     createBtn() {
//         this.buttonContainer = document.createElement('div');
//         this.buttonContainer.classList.add('btns-slider-units');
//         unitContent.appendChild(this.buttonContainer);
//         this.buttons = this.images.map((btn, index) => {
//             btn = document.createElement('button');
//             btn.classList.add('btn-slider-header');
//             btn.innerHTML = '<i class="fa-solid fa-circle-dot"></i>';
//             this.buttonContainer.appendChild(btn);
//             btn.addEventListener('click', () => {
//                 this.#currentImgIndex = index;
//                 this.createSlider();
//             });
//             return btn;
//         });
//     }

//     activeBtn() {
//         this.buttons.forEach((btn, index) => {
//             index === this.#currentImgIndex ? btn.classList.add('active-img') : btn.classList.remove('active-img');
//         });
//     }


// }

// let allIMG = new unitImgs([
//     {
//         url: "./assets/content-images/unit-1.jpg",
//         cidade: "Cidade",
//         rua: "Rua",
//         telefone: "Telefone"
//     },
//     {
//         url: "./assets/content-images/unit-2.jpg",
//         cidade: "Cidade",
//         rua: "Rua",
//         telefone: "Telefone"
//     },
//     {
//         url: "./assets/content-images/unit-3.jpg",
//         cidade: "Cidade",
//         rua: "Rua",
//         telefone: "Telefone"
//     },
// ]);

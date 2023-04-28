const headerIMG = document.querySelector('.header');
const headerBTN1 = document.querySelector('.btn-slider-header-1');
const headerBTN2 = document.querySelector('.btn-slider-header-2');
const menuIcon = document.querySelector('.nav-icon');


setInterval(() =>{
    if(headerIMG.classList.contains('2')) {
        headerIMG.classList.remove('2');
        headerIMG.style.backgroundImage = "url('./assets/content-images/header1.jpg')";
        headerIMG.classList.add('1');
        checkCurImg();
    } else {        
        headerIMG.classList.remove('1');
        headerIMG.style.backgroundImage = "url('./assets/content-images/header2.jpg')";
        headerIMG.classList.add('2');
        checkCurImg();
    }
}, 5000)

headerBTN1.addEventListener('click', () => {
    headerIMG.classList.remove('2');
    headerIMG.style.backgroundImage = "url('./assets/content-images/header1.jpg')";
    headerIMG.classList.add('1');
    checkCurImg();
});

headerBTN2.addEventListener('click', () => {
    headerIMG.classList.remove('1');
    headerIMG.style.backgroundImage = "url('./assets/content-images/header2.jpg')";
    headerIMG.classList.add('2');
    checkCurImg();

});

function checkCurImg() {
    if (headerIMG.classList.contains('1')) {
        headerBTN2.classList.remove('active-img');
        return headerBTN1.classList.add('active-img');
    }
    headerBTN1.classList.remove('active-img');
    headerBTN2.classList.add('active-img');
}

menuIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active-nav');
})
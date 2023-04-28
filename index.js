const headerIMG = document.querySelector('.header');

setInterval(() =>{
    if(headerIMG.classList.contains('2')) {
        headerIMG.classList.remove('2');
        headerIMG.style.backgroundImage = "url('../assets/content-images/header1.jpg')";
        headerIMG.classList.add('1');
    } else {        
        headerIMG.classList.remove('1');
        headerIMG.style.backgroundImage = "url('../assets/content-images/header2.jpg')";
        headerIMG.classList.add('2');
    }
}, 5000);
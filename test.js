const images = document.querySelectorAll('.image img')
const close = document.querySelector('.close')
const pew = document.querySelector('.prew')
const next = document.querySelector('.next')
const gallery = document.querySelector('.gallery')
const avt = document.querySelector('.gallery__inner img')
console.log(avt);
console.log(next);
let curruntIndex = 0;
for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', () => {
        curruntIndex = i;
        console.log('currentIndex : ',curruntIndex);
        console.log(i);
        avt.src = images[i].src
        gallery.classList.add('show')
        if(curruntIndex === images.length - 1){
            next.classList.add('hide')
        }else {
            next.classList.remove('hide')
        }
        if(curruntIndex === 0){
            pew.classList.add('hide')
        }else {
            pew.classList.remove('hide')
        }
        
    })
}
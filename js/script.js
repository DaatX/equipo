let imgcaja = document.querySelectorAll('.imgcaja');
let contenidocaja = document.querySelectorAll('.contenidocaja');

for (let i = 0; 1 < imgcaja.length; i++) {
    imgcaja[i].addEventListener('mouseover', function() {
        for (let i = 0; i < contenidocaja.length; i++) {
            contenidocaja[i].className = 'contenidocaja';
        }
        document.getElementById(this.dataset.id).className = 'contenidocaja active';

        for (let i = 0; i < imgcaja.length; i++) {
            imgcaja[i].className = 'imgcaja';
        }
        this.className = 'imgcaja active';
    })
}
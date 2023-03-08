
const boxes = document.querySelectorAll('section');

const red = document.querySelector('.rg-red');
const green = document.querySelector('.rg-green');
const blue = document.querySelector('.rg-blue');

const lblRed = document.querySelector('label.red');
const lblGreen = document.querySelector('label.green');
const lblBlue = document.querySelector('label.blue');

const lblRgbAtual = document.querySelector('.rgbAtual');

const paragrafoClip = document.querySelector('.p-actionClip');


function mudarBackground(){
    paragrafoClip.classList.remove('ativo'); 


    document.body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value}`;

    lblRed.innerText = red.value;
    lblGreen.innerText = green.value;
    lblBlue.innerText = blue.value;

    lblRgbAtual.innerText = `rgb(${red.value}, ${green.value}, ${blue.value})`;

    boxes.forEach((b)=>{
        red.value <= 10 && green.value <= 10 && blue.value <= 10 ? b.style.color = '#fff' : b.style.color = '#000';
    });
}

window.addEventListener('change', mudarBackground);
mudarBackground();

//BIBLIOTECA CLIPBOARD.JS https://clipboardjs.com/ 
const clip = new ClipboardJS('.section-clip');

clip.on('success', function(e) {
    paragrafoClip.classList.add('ativo'); 
});

clip.on('error', function(e) {
    console.log('Não copiado');
});
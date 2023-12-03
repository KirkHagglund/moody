const Button = document.getElementById('play');
const video = document.getElementById('bday');
const header = document.querySelector('h1');

Button.addEventListener('click', () => {
Button.classList.add('hide');
header.classList.add('hide');
video.classList.remove('hide');
let iframe = video.contentWindow;
iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});
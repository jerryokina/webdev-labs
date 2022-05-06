let textFontSize = 20;
let headersize = 32


const makeBigger = () => {
   // alert('make bigger!');
   textFontSize +=5
   headersize +=5
   document.querySelector("div.content").style.fontSize = `${textFontSize}px`
   document.querySelector("h1").style.fontSize = `${headersize}px`
   
};

const makeSmaller = () => {
   // alert('make smaller!');
   textFontSize -=5
   headersize -=5
   document.querySelector("div.content").style.fontSize = `${textFontSize}px`
   document.querySelector("h1").style.fontSize = `${headersize}px`

};

// let textFontSize = 16;

// Inc = document.querySelector(".div.content", "h1")
// Inc.addEventListener('click', () => {
//    textFontSize +=5
//    text.style.fontSize = `${textFontSize}px`

// });

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);


/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/




const deefault = () => {
   document.querySelector("body").className = ""
};

const ocean = () => {
   document.querySelector("body").className = "ocean"
};

const desert = () => {
   document.querySelector("body").className = "desert"
};

const contrast = () => {
   document.querySelector("body").className = "high-contrast"
};

document.querySelector("#default").addEventListener('click', deefault);
document.querySelector("#ocean").addEventListener('click', ocean);
document.querySelector("#desert").addEventListener('click', desert);
document.querySelector("#high-contrast").addEventListener('click', contrast);


var body = document.querySelector('body');
var toggle = document.querySelector('.change');
var dark = false;


//FUNCTION
function darkMode() {
    //Changes the value of 'dark' from false to true
    dark = true;
    //Add 'dark' class to the element in the var body
    body.classList.add('dark');
    //Save in local storage the value for dark mode on
    localStorage.setItem('mode','dark');
    document.querySelector(".change").innerHTML = "<img id='darkicon' src='./assets/darkmode.png'>";
}

function lightMode() {
    //Changes the value of 'dark' from true to false
    dark = false;
    //Remove 'dark' class from the element in the var body
    body.classList.remove('dark');
    //Save in local storage the value for dark mode on
    localStorage.setItem('mode','dark');
    document.querySelector(".change").innerHTML = "<img id='darkicon' src='./assets/lightmode.png'>";
}

//MAIN

//Check stored values
if(localStorage.getItem('mode') == 'dark') {
    darkMode();
}

//Add 'dark' class when users click on the change button.
toggle.addEventListener('click', function() {
    if (dark === false) {
        darkMode();
    } else if (dark === true) {
        lightMode();
    }
});
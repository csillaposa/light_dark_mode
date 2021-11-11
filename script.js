const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode Styles

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    console.log(toggleIcon.children);
}

// Switch Theme Dynamically

/* If we open the console and open the event: 
    target: input
    checked property is true
    event.target.checked returns a boolean => if we click the switch: true - false */

function switchTheme(event) {
    if (event.target.checked) {
        //https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        //lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
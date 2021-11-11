const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Dynamically

/* If we open the console and open the event: 
    target: input
    checked property is true
    event.target.checked returns a boolean => if we click the switch: true - false */

function switchTheme(event) {
    if (event.target.checked) {
        //https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
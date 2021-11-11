const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Dynamically

/* If we open the console and open the event: 
    target: input
    checked property is true
    event.target.checked returns a boolean => if we click the switch: true - false */

function switchTheme(event) {
    console.log(event.target.checked);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
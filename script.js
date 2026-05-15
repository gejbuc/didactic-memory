// DOM Elements
const button = document.getElementById('button');
const message = document.getElementById('message');

// State
let clickCount = 0;

// Event Listeners
button.addEventListener('click', handleButtonClick);

// Event Handlers
function handleButtonClick() {
    clickCount++;
    message.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}`;
}

// Initialization
function init() {
    console.log('App initialized');
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

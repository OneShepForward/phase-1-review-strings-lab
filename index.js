// Write your code in this file!
const currentUser = 'Nick';

const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//const shortGreeting = `Welcome, ${currentUser[0]}!`;
//const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;


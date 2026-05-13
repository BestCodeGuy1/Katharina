/*
  Katharina Project - Main JavaScript File
  Created: 2026-05-13
  Author: BestCodeGuy1
  Description: This file contains all the JavaScript functionality for the Katharina project.
  It handles user interactions and dynamic content updates.
*/

// Wait for the DOM to fully load before executing script
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to DOM elements
    const interactiveBtn = document.getElementById('interactiveBtn');
    const messageDisplay = document.getElementById('message');
    
    // Counter variable to track button clicks
    let clickCount = 0;
    
    // Array of fun messages to display on button click
    const messages = [
        'Hello! You clicked me! 🎉',
        'Nice! Keep clicking! 👍',
        'You\'re on a roll! 🚀',
        'This is fun! 😄',
        'You\'re doing great! ⭐',
        'Katharina says hi! 👋'
    ];
    
    // Event listener for the interactive button
    interactiveBtn.addEventListener('click', function() {
        // Increment the click counter
        clickCount++;
        
        // Calculate which message to display (cycles through array)
        const messageIndex = (clickCount - 1) % messages.length;
        
        // Display the message
        messageDisplay.textContent = messages[messageIndex] + ' (Clicks: ' + clickCount + ')';
        
        // Add a visual effect on click
        interactiveBtn.style.transform = 'scale(0.95)';
        
        // Reset the button scale after animation
        setTimeout(function() {
            interactiveBtn.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Optional: Log to console when page loads
    console.log('Katharina project loaded successfully! 🎉');
});

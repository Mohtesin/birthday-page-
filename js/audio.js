const audio = new Audio('assets/audio/birthday-song.mp3');

function playBirthdaySong() {
    audio.loop = true; // Loop the audio
    audio.play(); // Play the audio
}

function stopBirthdaySong() {
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Reset the audio to the beginning
}

// Export functions for use in other scripts
export { playBirthdaySong, stopBirthdaySong };
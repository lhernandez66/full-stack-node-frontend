// We are going to make an event listener.. it will trigger when the DOM is loaded
addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("https://full-stack-node-backend.glitch.me/api/songs");
    const songs = await response.json();

    let html = "";
    for (let song of songs) {
        html += `<li>${song.title} - ${song.artist}</li>`;
    }

    document.querySelector("#addedsongs").innerHTML = html;
});

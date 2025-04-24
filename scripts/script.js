// We are going to make an event listener.. it will trigger when the DOM is loaded
addEventListener("DOMContentLoaded", async function () {
    //const response = await fetch("http://localhost:3000/api/songs");
    const response = await fetch("https://full-stack-node-backend.glitch.me/api/songs");

    const songs = await response.json();

    let html = "";
    for (let song of songs) {
        let songID = song._id
        html += `<li>${song.title} - ${song.artist}</li> - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a> </li>`
    }

    document.querySelector("#list_of_songs").innerHTML = html;
});

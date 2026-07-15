window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("daily-crumbo")
    .innerText = "🦆 Duck";

});


const messages = [

    "That's SO crumbo!",

    "fuck you you suck that sucks fuck you fuck you",

    "Certified Crumbo.",

    "The duck has approved.",

    "Maximum Crumbo achieved."

];


let score = 48903;


const audio =
document.getElementById("audio-player");



function playCrumbo(){

    let randomMessage =
    messages[Math.floor(Math.random()*messages.length)];


    document.getElementById("crumbo-message")
    .innerText = randomMessage;


    document.getElementById("crumbo-loader")
    .style.display = "flex";


    setTimeout(()=>{


        document.getElementById("crumbo-loader")
        .style.display = "none";


        document.getElementById("player")
        .style.display = "block";


        audio.play();


        score += 10;


        document.querySelector(".score")
        .innerText =
        "⭐ Crumbo Score: " + score;


    },1800);


}



function toggleSong(){

    if(audio.paused){

        audio.play();

    }

    else{

        audio.pause();

    }

}



audio.addEventListener(
"timeupdate",
()=>{


    let percent =
    (audio.currentTime/audio.duration)*100;


    document.getElementById("progress")
    .style.width =
    percent + "%";


});





// -------- NAVIGATION --------


function hidePages(){

    document.getElementById("home-page")
    .style.display = "none";


    document.getElementById("profile")
    .style.display = "none";


    document.getElementById("search-page")
    .style.display = "none";


    document.getElementById("notifications")
    .style.display = "none";

}



function showHome(){

    hidePages();

    document.getElementById("home-page")
    .style.display = "block";

    setActive("home-tab");

}



function showProfile(){

    hidePages();

    document.getElementById("profile")
    .style.display = "block";

    setActive("profile-tab");

}



function showSearch(){

    hidePages();

    document.getElementById("search-page")
    .style.display = "block";

    setActive("search-tab");

}



function showLibrary(){

    hidePages();

    alert(
    "Your Library:\n\n37 playlists\n8,419 songs\n12 downloaded albums"
    );

    setActive("library-tab");

}



function showNotifications(){

    hidePages();

    document.getElementById("notifications")
    .style.display = "block";

}



function setActive(tab){

    document.querySelectorAll("nav span")
    .forEach(item=>{

        item.classList.remove("active");

    });


    document.getElementById(tab)
    .classList.add("active");

}





// -------- PWA SUPPORT --------


if ("serviceWorker" in navigator){

    navigator.serviceWorker.register("sw.js");

}
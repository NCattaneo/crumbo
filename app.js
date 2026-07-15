function loadLibrary(){


let recent =
document.getElementById("recent-songs");


let recommended =
document.getElementById("recommended-songs");



crumboSongs.slice(0,5)
.forEach(song=>{


let item =
document.createElement("div");


item.className =
"history-card";


item.innerHTML = `

<h3>
${song.title}
</h3>

<p>
${song.artist}
</p>

<p>
▶ ${song.plays} plays
</p>

`;


item.onclick = () => {

    playSong(song);

};



recent.appendChild(item);


});




crumboSongs.slice(3,8)
.forEach(song=>{


let item =
document.createElement("div");


item.className =
"history-card";


item.innerHTML = `

<h3>
${song.title}
</h3>

<p>
${song.artist}
</p>

`;

item.onclick = () => {

    playSong(song);

};



recommended.appendChild(item);


});


}





const messages = [

    "That's SO crumbo!",

    "fuck you you suck that sucks fuck you fuck you",

    "Certified Crumbo.",

    "The duck has approved.",

    "Maximum Crumbo achieved."

];


let score = 48903;

function updateCrumboLevel(){

    let level =
    document.getElementById("crumbo-level");


    if(score < 10000){

        level.innerText =
        "Baby Crumb 🥚";

    }

    else if(score < 30000){

        level.innerText =
        "Crumb Apprentice 🧑‍🍳";

    }

    else if(score < 70000){

        level.innerText =
        "Supreme Crumber 👑";

    }

    else{

        level.innerText =
        "Duck Council Member 🦆";

    }

}


let audio;


window.addEventListener("DOMContentLoaded", () => {

    audio = document.getElementById("audio-player");


    document.getElementById("daily-crumbo")
    .innerText = "🦆 Duck";


    loadLibrary();



    audio.addEventListener(
    "timeupdate",
    ()=>{


        if(audio.duration){

            let percent =
            (audio.currentTime/audio.duration)*100;


            document.getElementById("progress")
            .style.width =
            percent + "%";

        }

    });


});

function playSong(song){

 audio.src = song.audio;
 audio.load();

document.getElementById("player-title")
.innerText =
song.title;


document.getElementById("player-artist")
.innerText =
song.artist;



document.getElementById("player-art")
.className =
"album " + song.cover;

let randomMessage =
messages[Math.floor(Math.random()*messages.length)];


document.getElementById("crumbo-message")
.innerText =
randomMessage;


document.getElementById("crumbo-loader")
.style.display =
"flex";



setTimeout(()=>{


document.getElementById("crumbo-loader")
.style.display =
"none";


document.getElementById("player")
.style.display =
"block";



audio.play();


let button =
document.querySelector(".mini-player button");

button.innerText = "⏸";



score += 10;


document.getElementById("crumbo-score")
.innerText =
score;


updateCrumboLevel();



},1800);


}

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


document.getElementById("crumbo-score")
.innerText = score;


updateCrumboLevel();


        


    },1800);


}



function toggleSong(){

    let button =
    document.querySelector(".mini-player button");


    if(audio.paused){

        audio.play();

        button.innerText = "⏸";

    }

    else{

        audio.pause();

        button.innerText = "▶";

    }

}

audio.addEventListener("play", ()=>{

    let button =
    document.querySelector(".mini-player button");

    if(button){
        button.innerText = "⏸";
    }

});


audio.addEventListener("pause", ()=>{

    let button =
    document.querySelector(".mini-player button");

    if(button){
        button.innerText = "▶";
    }

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
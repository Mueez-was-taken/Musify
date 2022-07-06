console.log("Welcome To Musify!!!");
// Initiliazing Variables
let songIndex = 0;
let audioElement = new Audio("Assets/Music/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let seekbar = document.getElementById("seekbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Haule Haule - Sukhwinder Singh",
    filePath: "Assets/Music/1.mp3",
    coverPath: "Assets/covers/1.jpg",
  },
  {
    songName: "Dil kehraha hy dil say - Adnan Sami",
    filePath: "Assets/Music/2.mp3",
    coverPath: "Assets/covers/2.jpg",
  },
  {
    songName: "Banjara - muhammad Irfan",
    filePath: "Assets/Music/3.mp3",
    coverPath: "Assets/covers/3.jpg",
  },
  {
    songName: "Cigarette Daydreams - Cage The Elephant",
    filePath: "Assets/Music/4.mp3",
    coverPath: "Assets/covers/4.jpg",
  },
  {
    songName: "Darmiyan - Shafqat Amanat Ali",
    filePath: "Assets/Music/5.mp3",
    coverPath: "Assets/covers/5.jpg",
  },
  {
    songName: "Dil ki lagi - Nazia Hassan",
    filePath: "Assets/Music/6.mp3",
    coverPath: "Assets/covers/6.jpg",
  },
  {
    songName: "Best Part - Daniel Caesar",
    filePath: "Assets/Music/7.mp3",
    coverPath: "Assets/covers/7.jpg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("timestamp")[0].innerText = songs[i].songName;
});
// audioElement.play();

// Handeling Pause Play
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement <= 0) {
    audioElement.play();
    document.getElementById("masterPlay").src = "/Assets/buttons/pause.svg";
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    document.getElementById("masterPlay").src = "/Assets/buttons/play.svg";
    gif.style.opacity = 0;
  }
});

// Listening to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  seekbar.value = progress;
});
seekbar.addEventListener("change", () => {
  audioElement.currentTime = (seekbar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play-circle");
    }
  );
};
// Mini Song Player
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      gif.style.opacity = 1;
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause");
      audioElement.src = `Assets/Music/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      document.getElementById("masterPlay").src = "/Assets/buttons/pause.svg";
    });
  }
);
// Previous Next
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `Assets/Music/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  document.getElementById("masterPlay").src = "/Assets/buttons/pause.svg";
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `Assets/Music/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  document.getElementById("masterPlay").src = "/Assets/buttons/pause.svg";
});

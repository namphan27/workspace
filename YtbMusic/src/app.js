import "./assets/main.css";
import Footer from "./components/footer";
import Header from "./components/header";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const App = async () => {
  return `
    ${await Header()}
    <main id="js-body"></main>
    ${await Footer()}
  `;
};
// export const initApp = () => {
//   const sidebar = document.getElementById("sidebar");
//   const openMenu = document.getElementById("openMenu");
//   const playBtn = document.querySelector(".js-play");
//   const stepBtn = document.querySelector(".js-step");
//   const nextBtn = document.querySelector(".js-next");
//   const volumeBtn = document.querySelector(".js-volume");
//   const repeatBtn = document.querySelector(".js-repeat");
//   const shuffleBtn = document.querySelector(".js-shuffle");
//   const range = document.querySelector(".js-range");
//   const time = document.querySelector(".js-time");

//   if (sidebar && openMenu) {
//     openMenu.addEventListener("click", () => {
//       sidebar.classList.toggle("-translate-x-full");
//     });
//   }

//   const audio = new Audio();
//   let currentIndex = 0;

//   const formatTime = (seconds) => {
//     const m = Math.floor(seconds / 60);
//     const s = Math.floor(seconds % 60);
//     return `${m}:${s < 10 ? "0" + s : s}`;
//   };

//   const updateTime = () => {
//     if (time && audio.duration) {
//       time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
//     }
//   };

//   const playTrack = (index) => {
//     currentIndex = index;
//     audio.src = tracks[currentIndex];
//     audio.play();
//   };

  
//   audio.addEventListener("ended", () => {
//     currentIndex = (currentIndex + 1) % tracks.length;
//     playTrack(currentIndex);
//   });

//   audio.addEventListener("loadedmetadata", updateTime);

//   if (playBtn) {
//     playBtn.addEventListener("click", () => {
//       if (!audio.src) audio.src = tracks[currentIndex];
//       if (audio.paused) {
//         audio.play();
//         playBtn.innerHTML = `<i class="fa-solid fa-pause fa-2x"></i>`;
//       } else {
//         audio.pause();
//         playBtn.innerHTML = `<i class="fa-solid fa-play fa-2x"></i>`;
//       }
//     });
//   }

//   if (stepBtn) {
//     stepBtn.addEventListener("click", () => {
//       currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
//       playTrack(currentIndex);
//     });
//   }

//   if (nextBtn) {
//     nextBtn.addEventListener("click", () => {
//       currentIndex = (currentIndex + 1) % tracks.length;
//       playTrack(currentIndex);
//     });
//   }

//   if (volumeBtn) {
//     volumeBtn.addEventListener("click", () => {
//       audio.muted = !audio.muted;
//       volumeBtn.classList.toggle("text-red-500");
//     });
//   }

//   if (repeatBtn) {
//     repeatBtn.addEventListener("click", () => {
//       audio.loop = !audio.loop;
//       repeatBtn.classList.toggle("text-red-500");
//     });
//   }

//   if (shuffleBtn) {
//     shuffleBtn.addEventListener("click", randomTracks);
//   }

//   if (range) {
//     audio.ontimeupdate = () => {
//       if (audio.duration) range.value = (audio.currentTime / audio.duration) * 100;
//       updateTime();
//     };
//     range.oninput = () => {
//       if (audio.duration) audio.currentTime = (range.value / 100) * audio.duration;
//     };
//   }

//   function randomTracks() {
//     const r = Math.floor(Math.random() * tracks.length);
//     audio.src = tracks[r];
//     audio.play();
//   }
// };


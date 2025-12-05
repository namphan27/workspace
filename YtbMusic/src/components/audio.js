export const initApp = () => {
  const sidebar = document.getElementById("sidebar");
  const openMenu = document.getElementById("openMenu");
  const playBtn = document.querySelector(".js-play");
  const stepBtn = document.querySelector(".js-step");
  const nextBtn = document.querySelector(".js-next");
  const volumeBtn = document.querySelector(".js-volume");
  const repeatBtn = document.querySelector(".js-repeat");
  const shuffleBtn = document.querySelector(".js-shuffle");
  const range = document.querySelector(".js-range");
  const time = document.querySelector(".js-time");

  if (sidebar && openMenu) {
    openMenu.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });
  }

  const audio = new Audio();
  let trackList = [];
  let currentIndex = 0;

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  const updateTime = () => {
    if (time && audio.duration) {
      time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
    if (range && audio.duration) {
      range.value = (audio.currentTime / audio.duration) * 100;
    }
  };

  const playTrack = (index) => {
    if (!trackList.length) return;
    currentIndex = index;
    audio.src = trackList[currentIndex];
    audio.play();
  };

  const playAudioUrl = (url) => {
    let idx = trackList.indexOf(url);
    if (idx === -1) trackList.push(url);
    currentIndex = trackList.indexOf(url);
    audio.src = url;
    audio.play();
  };

  const playNext = () => {
    if (!trackList.length) return;
    currentIndex = (currentIndex + 1) % trackList.length;
    playTrack(currentIndex);
  };

  const playPrev = () => {
    if (!trackList.length) return;
    currentIndex = (currentIndex - 1 + trackList.length) % trackList.length;
    playTrack(currentIndex);
  };

  const playRandomTrack = () => {
    if (!trackList.length) return;
    let random;
    do {
      random = Math.floor(Math.random() * trackList.length);
    } while (random === currentIndex && trackList.length > 1);
    playTrack(random);
  };

  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("ended", playNext);
  audio.addEventListener("loadedmetadata", updateTime);

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (!audio.src && trackList.length) audio.src = trackList[currentIndex];
      if (audio.paused) {
        audio.play();
        playBtn.innerHTML = `<i class="fa-solid fa-pause fa-2x"></i>`;
      } else {
        audio.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-play fa-2x"></i>`;
      }
    });
  }

  if (stepBtn) stepBtn.addEventListener("click", playPrev);
  if (nextBtn) nextBtn.addEventListener("click", playNext);
  if (shuffleBtn) shuffleBtn.addEventListener("click", playRandomTrack);

  if (volumeBtn) {
    volumeBtn.addEventListener("click", () => {
      audio.muted = !audio.muted;
      volumeBtn.classList.toggle("text-red-500");
    });
  }

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      audio.loop = !audio.loop;
      repeatBtn.classList.toggle("text-red-500");
    });
  }

  if (range) {
    range.addEventListener("input", () => {
      if (audio.duration) {
        audio.currentTime = (range.value / 100) * audio.duration;
      }
    });
  }

  const setTrackList = (tracks) => {
    trackList = tracks;
    currentIndex = 0;
  };

  return {
    audio,
    playAudioUrl,
    playNext,
    playPrev,
    playRandomTrack,
    setTrackList,
  };
};

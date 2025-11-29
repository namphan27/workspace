import { initApp } from "../components/audio";
import { playListDetails } from "../components/list";

export const todayListMusic = async (slug) => {
    const data = await playListDetails(slug)
    console.log(data.tracks);
    
    const musicHTML = (data.tracks).map((detail, index) => `
        <li class="flex items-center gap-4 group cursor-pointer hover:bg-gray-800 rounded-md p-2" data-audio="${detail.audioUrl}" data-type="${detail.audioType}" data-title="${detail.title}" data-artist="${detail.artist}">
        <span class="text-white">${index + 1}</span>
          <img src="${detail.thumbnails}" class="w-12 h-12 rounded-sm object-cover">
          </img>
          <div class="flex flex-col flex-1 min-w-0">
            <span class="text-white font-bold truncate">${detail.title}</span>
            <span class="text-gray-400 truncate">${detail.artists}</span>
          </div>
          <span class="text-gray-400">${Math.floor(detail.duration / 60)}:${String(detail.duration % 60).padStart(2,"0")}</span>
        </li>
        `).join("")
        return `
        <div class="flex max-w-[80%] w-full gap-12 mx-auto mt-[7%]">
    <div class="flex flex-col items-center space-y-8 min-w-[320px]">
      <div class="relative w-72 h-72 rounded-lg cursor-pointer  overflow-hidden shadow-lg ">
        <img src="${data.thumbnails}" class="w-full h-full object-cover bg-orange-600">
        </img>
        <button class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black bg-opacity-40 rounded-full p-[14px] text-white hover:bg-opacity-70 transition hover:bg-gray-500 cursor-pointer">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <div class="text-center">
        <h1 class="text-3xl text-white font-extrabold tracking-tight mb-1">${data.albumType}</h1>
        <p class="text-sm text-gray-400 font-semibold mb-4">YouTube Music</p>
        <p class="text-gray-400 mb-1">Danh sách phát · 2025</p>
        <p class="text-gray-400 mb-6">56 bài hát · 3 giờ, 55 phút</p>
        <p class="max-w-xs mx-auto text-gray-300 text-center text-sm">
          These songs don’t try to cheer you up, they fit perfectly to the well known feeling that...
        </p>
      </div>
      <button class="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:scale-110 transition cursor-pointer">
                  <i class="fa-solid fa-play"></i>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto max-h-[72vh] scrollbar-hide scroll-smooth 
                [&::-webkit-scrollbar]:h-3
                [&::-webkit-scrollbar-thumb]:bg-gray-500
                [&::-webkit-scrollbar-thumb]:rounded-full">
      <ul class="space-y-4 text-sm font-sans">
      ${musicHTML}
      </ul>
    </div>
  </div>
        `
}

export const initMusic = async (slug) => {
  const body = document.querySelector("#js-body");
  const footer = document.querySelector("footer");

  const html = await todayListMusic(slug);
  body.innerHTML = html;

  const { playAudioUrl } = initApp();

  // Gắn listener lên container cha, dùng event delegation
  body.addEventListener("click", (e) => {
    // Tìm li gần nhất có data-audio
    const li = e.target.closest("li[data-audio]");
    if (!li) return; // nếu không click vào track, bỏ qua

    footer.style.display = "flex";

    const audioUrl = li.dataset.audio;
    const title = li.dataset.title;
    const artist = li.dataset.artist;

    playAudioUrl(audioUrl);

    const trackTitleEl = footer.querySelector(".track-title");
    const trackArtistEl = footer.querySelector(".track-artist");

    if (trackTitleEl) trackTitleEl.textContent = title;
    if (trackArtistEl) trackArtistEl.textContent = artist;
  });
};

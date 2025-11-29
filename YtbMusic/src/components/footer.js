const Footer = () => {
  return `<footer class="fixed hidden bottom-0 left-0 right-0 bg-neutral-900 text-white px-4 py-3 flex items-center justify-between shadow-lg z-[99]">
<input type="range" class="js-range absolute top-0 left-0 w-full bg-gray-700 rounded-lg accent-red-600" value="0">
  <div class="flex items-center space-x-3 mt-2">
    <button class="js-step p-2 hover:bg-gray-600 rounded-full">
    <i class="fa-solid fa-backward-step"></i>
    </button>
    <button class="js-play p-2 hover:bg-gray-600 rounded-full">
    <i class="fa-solid fa-pause fa-2x"></i>
    </button>
    <button class="js-next p-2 hover:bg-gray-600 rounded-full">
      <i class="fa-solid fa-forward-step"></i>
    </button>

    <span class="js-time text-sm opacity-70">0:00 / 0:00</span>
  </div>

  <div class="flex items-center space-x-3 max-w-[45%] truncate">
    <div class="p-2 bg-gray-800 rounderd">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
    </div>
    <div class="truncate">
      <p class="track-title font-medium truncate">
      </p>
      <p class="track-artist text-xs opacity-70 truncate"></p>
    </div>
    <button class="p-2 hover:bg-gray-600 rounded-full">
      <i class=fa-regular fa-thumbs-up rotate-180"></i>
    </button>
    <button class="p-2 hover:bg-gray-600 rounded-full">
      <i class="fa-regular fa-thumbs-up "></i>
    </button>
    <button class="p-2 hover:bg-gray-600 rounded-full" >
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </button>
  </div>

  <div class="flex items-center space-x-4">
    <button class="p-2 hover:bg-gray-600 rounded-full">
      <i class="js-volume fa-solid fa-volume-high"></i>
    </button>
    <button class="js-repeat p-2 hover:bg-gray-600 rounded-full">
      <i class="fa-solid fa-repeat"></i>
    </button>
    <button class="js-shuffle p-2 hover:bg-gray-600 rounded-full">
      <i class="fa-solid fa-shuffle"></i>
    </button>
    <button class="p-2 hover:bg-gray-600 rounded-full">
      <i class="fa-solid fa-caret-up fa-2x"></i>
    </button>
  </div>

</footer>`;
};
export default Footer;

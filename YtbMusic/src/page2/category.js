import { getCategoriesDetail, getLineAlbums, getLinePlaylist, getLinesDetail, getLineSongs, getLineVideos } from "../components/list";
export const CategoryDetail = async (slug) => {
  const data = await getCategoriesDetail(slug)
  if (!data) return `<p class="text-white p-8">Error....</p>`;
  const subcategoriesHTML = (data.subcategories)
    .map(sub => `
      <div class="flex-shrink-0 w-59">
    <div class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${sub.thumbnailUrl}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </div>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${sub.name}</p>
      <p class="w-full text-gray-400 text-sm truncate">${sub.description}</p>
    </div>
  </div>
`
    )
    .join("");

  return `
    <div class="bg-black mt-[5%] text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl text-white font-bold">${data.name}</h2>
    <div class="flex items-center space-x-4">
      <button class="text-sm font-semibold text-white hover:text-white transition-colors border border-gray-500 p-3 rounded-full hover:bg-gray-800">Phát tất cả</button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>

  <div class="p-4">
    <div class="flex gap-5 overflow-x-scroll hover:overflow-x-scroll scrollbar-hide scroll-smooth 
                [&::-webkit-scrollbar]:h-3
                [&::-webkit-scrollbar-thumb]:bg-gray-500
                [&::-webkit-scrollbar-thumb]:rounded-full">
                ${subcategoriesHTML}
    </div>
  </div>
</div>
  `;
};

export const LinesDetail = async (slug) => {
  const data = await getLinesDetail(slug);
  console.log(data);

  if (!data) {
    return `<p class="text-white p-8">Error....</p>`;
  }

  return `
    <div class="bg-black mt-[5%] text-white block p-6 md:p-10 overflow-x-auto w-[90%] m-auto">

      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl text-white font-bold">${data.name}</h2>
      </div>

      <div class="p-4">
        <div class="flex gap-5">
          
          <a href="/explore/lines/${slug}/songs" class="flex-shrink-0 w-59">
            <div class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
              <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
                <img src="${data.thumbnailUrl}" class="w-full h-full object-cover">
                <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <i class="fa-solid fa-play fa-3x text-white"></i>
                </div>
              </div>
            </div>

            <div class="w-[220px]">
              <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${data.name}</p>
              <p class="w-full text-gray-400 text-sm truncate">${data.description}</p>
            </div>
          </a>

        </div>
      </div>

    </div>
  `;
};

export const LineSongs = async (slug) => {
  const data = await getLineSongs(slug)
  console.log(data);
  const subItem = (data.items).map(sub => `
      <div class="flex-shrink-0 w-59">
    <div class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${sub.thumb}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </div>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${sub.name}</p>
      <p class="w-full text-gray-400 text-sm truncate">View: ${sub.views}</p>
    </div>
  </div>
`
    )
    .join("");
  if (!data) {
    return `<p class="text-white p-8">Error....</p>`;
  }

  return `
    <div class="bg-black mt-[5%] text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl text-white font-bold">Danh sách bài hát theo dòng</h2>
    <div class="flex items-center space-x-4">
      <button class="text-sm font-semibold text-white hover:text-white transition-colors border border-gray-500 p-3 rounded-full hover:bg-gray-800">Phát tất cả</button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>

  <div class="p-4">
    <div class="flex gap-5 overflow-x-scroll hover:overflow-x-scroll scrollbar-hide scroll-smooth 
                [&::-webkit-scrollbar]:h-3
                [&::-webkit-scrollbar-thumb]:bg-gray-500
                [&::-webkit-scrollbar-thumb]:rounded-full">
                ${subItem}
    </div>
  </div>
</div>
  `;
}

export const LinePlaylist = async (slug) => {
  const data = await getLinePlaylist(slug)
  console.log(data);
  
  const subItem = (data.items).map(sub => `
      <div class="flex-shrink-0 w-59">
    <div class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${sub.thumb}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </div>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${sub.name}</p>
      <p class="w-full text-gray-400 text-sm truncate">${sub.artists}</p>
    </div>
  </div>
`
    )
    .join("");
  if (!data) {
    return `<p class="text-white p-8">Error....</p>`;
  }

  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl text-white font-bold">Danh sách bài hát nổi bật theo dòng</h2>
    <div class="flex items-center space-x-4">
      <button class="text-sm font-semibold text-white hover:text-white transition-colors border border-gray-500 p-3 rounded-full hover:bg-gray-800">Phát tất cả</button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>

  <div class="p-4">
    <div class="flex gap-5 overflow-x-scroll hover:overflow-x-scroll scrollbar-hide scroll-smooth 
                [&::-webkit-scrollbar]:h-3
                [&::-webkit-scrollbar-thumb]:bg-gray-500
                [&::-webkit-scrollbar-thumb]:rounded-full">
                ${subItem}
    </div>
  </div>
</div>
  `;
}

export const LineAlbums = async (slug) => {
  const data = await getLineAlbums(slug)
  console.log(data);
  
  const subItem = (data.items).map(sub => `
      <div class="flex-shrink-0 w-59">
    <div class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${sub.thumb}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </div>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${sub.name}</p>
      <p class="w-full text-gray-400 text-sm truncate">${sub.albumType}</p>
    </div>
  </div>
`
    )
    .join("");
  if (!data) {
    return `<p class="text-white p-8">Error....</p>`;
  }

  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl text-white font-bold">Danh sách Album theo dòng nhạc</h2>
    <div class="flex items-center space-x-4">
      <button class="text-sm font-semibold text-white hover:text-white transition-colors border border-gray-500 p-3 rounded-full hover:bg-gray-800">Phát tất cả</button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>

  <div class="p-4">
    <div class="flex gap-5 overflow-x-scroll hover:overflow-x-scroll scrollbar-hide scroll-smooth 
                [&::-webkit-scrollbar]:h-3
                [&::-webkit-scrollbar-thumb]:bg-gray-500
                [&::-webkit-scrollbar-thumb]:rounded-full">
                ${subItem}
    </div>
  </div>
</div>
  `;
}

export const LineVideos = async (slug) => {
  const data = await getLineVideos(slug)
  console.log(data);
  
  const subItem = (data.items).map(sub => `
      <div class="flex-shrink-0 w-59">
    <div class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${sub.thumb}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </div>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${sub.name}</p>
      <p class="w-full text-gray-400 text-sm truncate">${sub.views} lượt xem</p>
    </div>
  </div>
`
    )
    .join("");
  if (!data) {
    return `<p class="text-white p-8">Error....</p>`;
  }

  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl text-white font-bold">Danh sách video cho dòng nhạc</h2>
    <div class="flex items-center space-x-4">
      <button class="text-sm font-semibold text-white hover:text-white transition-colors border border-gray-500 p-3 rounded-full hover:bg-gray-800">Phát tất cả</button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="p-[10px] rounded-[99px] border border-gray-700 hover:border-white transition-colors">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>

  <div class="p-4">
    <div class="flex gap-5 overflow-x-scroll hover:overflow-x-scroll scrollbar-hide scroll-smooth 
                [&::-webkit-scrollbar]:h-3
                [&::-webkit-scrollbar-thumb]:bg-gray-500
                [&::-webkit-scrollbar-thumb]:rounded-full">
                ${subItem}
    </div>
  </div>
</div>
  `;
}
// export const 
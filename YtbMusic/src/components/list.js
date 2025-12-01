import { axiosInstance } from "../utils/axios";
// Explore
export const getSongs = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu List:", error);
  }
};
export const topMusic = async () => {
  return `
  <div class="w-[80%] bg-black py-10 mt-[5%] mb-[0] mx-auto">
  <div class="w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

    <a href="/explore/new-releases" class="flex items-center w-full h-[80px] gap-3 bg-zinc-800 hover:bg-zinc-700 transition rounded-xl px-5 py-4 cursor-pointer">
      <i class="fa-solid fa-gear text-gray-300 text-xl"></i>
      <span class="text-white font-semibold">Bản phát hành mới</span>
    </a>

    <a href="/charts/videos" class="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition rounded-xl px-5 py-4 cursor-pointer">
      <i class="fa-solid fa-chart-line text-gray-300 text-xl"></i>
      <span class="text-white font-semibold">Bảng xếp hạng</span>
    </a>

    <a href="/explore/meta" class="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition rounded-xl px-5 py-4 cursor-pointer">
      <i class="fa-regular fa-face-smile text-gray-300 text-xl"></i>
      <span class="text-white font-semibold">Tâm trạng và thể loại</span>
    </a>

  </div>
</div>
  `
}
export const getCategoriesDetail = async (slug) => {
  try {
    const response = await axiosInstance.get(`/categories/${slug}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLines = async () => {
  try {
    const response = await axiosInstance.get("/lines?limit=20");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLinesDetail = async (slug) => {
  try {
    const response = await axiosInstance.get(`/lines/${slug}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getLineSongs = async (slug) => {
  try {
    const response = await axiosInstance.get(`/lines/${slug}/songs`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getLinePlaylist = async (slug) => {
  try {
    const response = await axiosInstance.get(`/lines/${slug}/playlists`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getLineAlbums = async (slug) => {
  try {
    const response = await axiosInstance.get(`/lines/${slug}/albums`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getLineVideos = async (slug) => {
  try {
    const response = await axiosInstance.get(`/lines/${slug}/videos`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const List = async () => {
  const data = await getSongs();
  const itemsHTML = (data.items).map(song =>
    `<a href="/explore/categories/${song.slug}" class="js-category-item relative flex items-center space-x-2 p-1 pl-2 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer bg-gray-800" data-slug="${song.slug}">
        <div class="absolute left-0 top-0 h-full w-2 rounded-l-md" style="background-color: ${song.color}"></div>
        <div class="flex-1 ml-[20px]">
          <p class="font-semibold text-white text-xs truncate">${song.name}</p>
          <p class="text-[10px] text-gray-400 max-w-[90%] truncate">${song.description}</p>
        </div>
      </a>`
  ).join("")
  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto max-w-[80%] w-[90%] m-auto">
      <h2 class="ml-[5%] text-3xl font-bold mb-6">Tâm trạng và thể loại</h2>
      <div class="grid grid-cols-4 gap-5 max-w-[90%] mx-auto">
        ${itemsHTML}
      </div>
    </div>
  `;
};


export const Lines = async () => {
  const data = await getLines();
  const itemsHTML = (data.items).map(song => 
    `<a href="/explore/lines/${song.slug}" class="js-category-item relative flex items-center space-x-2 p-1 pl-2 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer bg-gray-800" data-slug="${song.slug}">
        <div class="absolute left-0 top-0 h-full w-2 rounded-l-md" style="background-color: ${song.color}"></div>
        <div class="flex-1 ml-[20px]">
          <p class="font-semibold text-white text-xs truncate">${song.name}</p>
          <p class="text-[10px] text-gray-400 max-w-[90%] truncate">${song.description}</p>
        </div>
      </a>`
  ).join("");
  return `
    <div class="bg-black max-w-[80%] text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
      <h2 class="ml-[5%] text-3xl font-bold mb-6">Dòng nhạc</h2>
      <div class="grid grid-cols-4 gap-5 max-w-[90%] mx-auto">
        ${itemsHTML}
      </div>
    </div>
  `;
};

// Home
export const getMoods = async () => {
  try {
    const response = await axiosInstance.get("/moods");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu List:", error);
  }
};

export const Moods = async () => {
  const data = await getMoods();
  const moods = data.items;
  const moodTags = moods
    .map(
      (mood) => `
    <a href="/moods/${mood.slug}" class="bg-gray-600 p-2 rounded-[10px] hover:bg-gray-400 select-none text-white cursor-pointer">
      ${mood.name}
    </a>
  `
    )
    .join(" ");

  return `
    <div class="flex gap-3 pl-[9%] pt-[4%] mt-[4%]">
      ${moodTags}
    </div>
  `;
};

export const getListMusic = async () => {
  try {
    const response = await axiosInstance.get("./quick-picks");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu List:", error);
  }
};

export const listMusic = async () => {
  const data = await getListMusic();
  const musics = data
    .map(
      (item) => `
    <div class="flex items-center space-x-4 p-2 mx-1 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer bg-gray-800">

      <div class="w-16 h-16 flex-shrink-0 bg-cover bg-center rounded-md overflow-hidden"
           style="background-image: url(${item.thumbnail});">
        <div class="flex items-center justify-center w-full h-full bg-black/30">
        </div>
      </div>

      <div>
        <p class="font-semibold text-base truncate">${item.title}</p>
        <p class="text-sm text-gray-400 truncate">${item.artists}</p>
      </div>

    </div>
  `
    )
    .join("");

  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold">Chọn nhanh đài phát</h2>
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
        <div class="p-4 mb-2">
            <div>
                <div class="flex flex-col grid grid-cols-4 gap-5 ">
                  ${musics}
                </div>
            </div>
        </div>
    </div>
  `;
};

export const todaysHits = async () => {
  try {
    const response = await axiosInstance.get("/home/todays-hits");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu List:", error);
  }
};

export const todaylist = async () => {
  const data = await todaysHits();
  const hits = data
    .map(
      (hit) => `
  <div class="flex-shrink-0 w-59">
    <a href="/playlists/details/${hit.slug}" class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${hit.thumbnails}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </a>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${hit.type}</p>
      <p class="w-full text-gray-400 text-sm truncate">${hit.title}</p>
    </div>
  </div>
`
    )
    .join("");
  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">Today's hits</h2>
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
                ${hits}
    </div>
  </div>
</div>
    `;
};

export const playListDetails = async (slug) => {
  try {
    const response = await axiosInstance.get(`/playlists/details/${slug}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
} 

export const showListMusic = async () => {
  const listMusic = await todaysHits()
  const slugs = listMusic.map(album => album.slug)
  const details = await Promise.all(slugs.map(slug => musicDetails(slug)));
}




export const albumsForYou = async () => {
  try {
    const response = await axiosInstance.get("/home/albums-for-you");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu List:", error);
  }
};
export const albumDetails = async (slug) => {
  try {
    const response = await axiosInstance.get(`/albums/details/${slug}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const showAlbums = async () => {
  const albums = await albumsForYou()
  const slugs = albums.map(album => album.slug)
  const details = await Promise.all(slugs.map(slug => albumDetails(slug)));
}

export const albums = async () => {
  const data = await albumsForYou();
  const hits = data
    .map(
      (hit) => `
  <a href="/albums/details/${hit.slug}" class="flex-shrink-0 w-59">
    <div class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${hit.thumbnails}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </div>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${hit.type}</p>
      <p class="w-full text-gray-400 text-sm truncate">${hit.title}</p>
    </div>
  </a>
`
    )
    .join("");
  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">Albums</h2>
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
                ${hits}
    </div>
  </div>
</div>
    `;
};

const loading = (() => {
  let loader;

  const show = () => {
    if (!loader) {
      loader = document.createElement("div");
      loader.className =
        "fixed inset-0 flex items-center justify-center bg-black/50 z-50";
      loader.innerHTML = `
        <div class="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      `;
      document.body.appendChild(loader);
    }
    loader.style.display = "flex";
  };

  const hide = () => {
    if (loader) loader.style.display = "none";
  };

  return { show, hide };
})();

export const country = async () => {
  try {
    loading.show();
    const response = await axiosInstance.get(
      "/playlists/by-country?country={code}&limit={n}"
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu List:", error);
  } finally {
    loading.hide();
  }
};

export const countries = async () => {
  const data = await country();
  const hits = data
    .map(
      (hit) => `
  <div class="flex-shrink-0 w-59">
    <div class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${hit.thumbnails}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </div>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${hit.type}</p>
      <p class="w-full text-gray-400 text-sm truncate">${hit.title}</p>
    </div>
  </div>
`
    )
    .join("");
  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto mb-[5%]">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">Vietnam Music</h2>
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
                ${hits}
    </div>
  </div>
</div>
    `;
};

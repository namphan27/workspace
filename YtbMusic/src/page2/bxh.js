import { axiosInstance } from "../utils/axios"

export const chartVideos = async () => {
    const videos1 = await newVideoMusic()
    const videos2 = await chartArtist()
    const videos3 = await chartArtistCountry()
    return `
    ${videos1}
    ${videos2}
    ${videos3}
    `
}
export const topVideosMusic = async () => {
    try {
        const response = await axiosInstance.get("/charts/videos")
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const topArtist = async () => {
    try {
        const response = await axiosInstance.get("/charts/top-artists")
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const chartCountry = async () => {
    try {
        const response = await axiosInstance.get("/charts/countries")
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const newVideoMusic = async () => {
    const data = await topVideosMusic()
    const hits = (data.items)
    .map(
      (hit) => `
  <div class="flex-shrink-0 w-[300px]">
    <a href="#" class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${hit.thumb}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </a>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">Rank ${hit.rank}: ${hit.title}</p>
      <p class="w-full text-gray-400 text-sm truncate">${hit.artists}</p>
    </div>
  </div>
`
    )
    .join("");
  return `
    <div class="bg-black mt-[5%] text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">Bảng xếp hạng video</h2>
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
    
}

export const chartArtist = async () => {
    const data = await topArtist()
    const hits = (data.items)
    .map(
      (hit) => `
  <div class="flex-shrink-0 w-[300px]">
    <a href="#" class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${hit.thumb}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </a>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">Rank ${hit.rank}: ${hit.name
}</p>
      <p class="w-full text-gray-400 text-sm truncate">${hit.totalViews} Lượt xem</p>
    </div>
  </div>
`
    )
    .join("");
  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">Nghệ sĩ hàng đầu</h2>
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
    
}

export const chartArtistCountry = async () => {
    const data = await chartCountry()
    const hits = (data.countries)
    .map(
      (hit) => `
  <div class="flex-shrink-0 w-[300px]">
    <a href="#" class="relative rounded-lg overflow-hidden mb-2 shadow-lg group">
      <div class="w-full h-48 bg-gray-800 bg-center hover:bg-gray-500 cursor-pointer relative">
        <img src="${hit.thumb}" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play fa-3x text-white"></i>
        </div>
      </div>
    </a>

    <div class="w-[220px]">
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${hit.name
}</p>
      <p class="w-full text-gray-400 text-sm truncate">${hit.code}</p>
    </div>
  </div>
`
    )
    .join("");
  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">Country</h2>
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
    
}
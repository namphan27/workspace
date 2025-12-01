import { axiosInstance } from "../utils/axios";

export const getMoodSlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/moods/${slug}`)
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu List:", error);
  }
};

export const MoodsSlug = async (slug) => {
  const data = await getMoodSlug(slug);
  console.log(data);
  
  return `
    <div class="bg-black mt-[5%] text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
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
                  <div class="flex items-center space-x-4 p-2 mx-1 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer bg-gray-800">

      <div class="w-16 h-16 flex-shrink-0 bg-cover bg-center rounded-md overflow-hidden"
           style="background-image: url(${data.hero.thumbnail});">
        <div class="flex items-center justify-center w-full h-full bg-black/30">
        </div>
      </div>

      <div>
        <p class="font-semibold text-base truncate">${data.hero.title}</p>
        <p class="text-sm text-gray-400 truncate">${data.hero.subtitle}</p>
      </div>

    </div>
                </div>
            </div>
        </div>
    </div>
  `;
};

export const MoodsList = async (slug) => {
  const data = await getMoodSlug(slug);
  const hits = (data.sections[0].items)
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
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${hit.description
}</p>
      <p class="w-full text-gray-400 text-sm truncate">${hit.title}</p>
    </div>
  </div>
`
    )
    .join("");
  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">Featured</h2>
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

export const MoodsList2 = async (slug) => {
  const data = await getMoodSlug(slug);
  const hits = (data.sections[1].items)
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
      <p class="w-full text-white font-medium text-base leading-tight whitespace-normal">${hit.description
}</p>
      <p class="w-full text-gray-400 text-sm truncate">${hit.title}</p>
    </div>
  </div>
`
    )
    .join("");
  return `
    <div class="bg-black text-white p-6 md:p-10 overflow-x-auto w-[90%] m-auto">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-3xl font-bold">More-pick</h2>
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
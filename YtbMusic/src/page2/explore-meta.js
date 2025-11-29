import { axiosInstance } from "../utils/axios"

export const MetaDetails = async () => {
    const list = await MetaList()
    const line = await MetaLine()
    return `
    ${list}
    ${line}
    `
}
export const exploreMeta = async () => {
    try {
        const response = await axiosInstance.get("/explore/meta")
        return response.data
    } catch (error) {
        console.log(error);
    }
} 

export const MetaList = async () => {
  const data = await exploreMeta();
  console.log(data);
  
  const itemsHTML = (data.categories).map(song =>
    `<a href="/explore/categories/${song.slug}" class="js-category-item relative flex items-center space-x-2 p-1 pl-2 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer bg-gray-800" data-slug="${song.slug}">
        <div class="absolute left-0 top-0 h-full w-2 rounded-l-md" style="background-color: ${song.color}"></div>
        <div class="flex-1 ml-[20px]">
          <p class="font-semibold text-white text-xs truncate">${song.name}</p>
          <p class="text-[10px] text-gray-400 max-w-[90%] truncate">${song.description}</p>
        </div>
      </a>`
  ).join("")
  return `
    <div class="bg-black mt-[5%] text-white p-6 md:p-10 overflow-x-auto max-w-[80%] w-[90%] m-auto">
      <h2 class="ml-[5%] text-3xl font-bold mb-6">Tâm trạng và thể loại</h2>
      <div class="grid grid-cols-4 gap-5 max-w-[90%] mx-auto">
        ${itemsHTML}
      </div>
    </div>
  `;
};

export const MetaLine = async () => {
  const data = await exploreMeta();
  console.log(data);
  
  const itemsHTML = (data.lines).map(song =>
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
      <h2 class="ml-[5%] text-3xl font-bold mb-6">Dòng nhạc</h2>
      <div class="grid grid-cols-4 gap-5 max-w-[90%] mx-auto">
        ${itemsHTML}
      </div>
    </div>
  `;
};
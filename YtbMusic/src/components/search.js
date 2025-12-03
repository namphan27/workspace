import { Search } from "./header";
export const initSearchPage = async () => {
  const params = new URLSearchParams(window.location.search);
  const keyword = params.get("q");
  if (!keyword) return;

  const data = await Search({ q: keyword, limit: 20, page: 1 });
  renderSearchResults(data.results);
};


export const renderSearchResults = (items) => {
  const container = document.querySelector(".js-search-results");
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="search-item mt-[2%] ml-[5%] p-4 border-b border-gray-600">
      <h3 class="text-white">${item.title}</h3>
      <p class="text-gray-400">${item.artist || ''}</p>
    </div>
  `).join("");
};
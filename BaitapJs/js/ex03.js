const BASE_URL = "https://dummyjson.com";
const querry = {};
const renderPosts = (posts) => {
  const postListEl = document.querySelector(".js-post-list");
  const html = posts
    .map(
      (post) => `<div class="border border-gray-400 p-3 mb-3">
           <h2 class="text-2xl font-medium mb-3">
             ${post.title}
           </h2>
           <p>
             ${post.body}
         </p>
         <div class="flex mt-2 justify-between items-center">
            <button
              class="js-view border border-gray-400 px-3 py-2 rounded-full cursor-pointer hover:bg-[green] hover:text-white"
            >
              Xem chi tiết
            </button>
            <div class="flex gap-2">
              <span class="cursor-pointer">Sửa</span>
              <span class="cursor-pointer text-red-600">Xóa</span>
            </div>
          </div>
        </div>`
    )
    .join("");
  postListEl.innerHTML = html;
};
const setLoading = (status = true) => {
  const loadingEL = document.querySelector(".js-loading");
  loadingEL.innerHTML = status
    ? `<span class="text-3xl block text-center mb-2">Loading.....</span>`
    : "";
};
const renderError = (message) => {
  const postListEl = document.querySelector(".js-post-list");
  postListEl.innerHTML = `<span class="text-3xl block text-center text-red-600 underline">${message}</span>`;
};
const debounce = (callback, timeout = 500) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            callback(...args)
        }, timeout);
    }
}
const fetchPosts = async () => {
  try {
    setLoading();
    let url = `${BASE_URL}/posts`
    if (querry.search) {
        url = `${BASE_URL}/posts/search?q=${querry.search}`
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const { posts } = await response.json();
    renderPosts(posts);
  } catch {
    renderError("Erorr... 404");
  } finally {
    setLoading(false);
  }
};
const addSearchEvent = () => {
  const searchEl = document.querySelector(".js-search");
  searchEl.addEventListener("input", debounce((e) => {
    const value = e.target.value;
    querry.search = value
    fetchPosts()
  }));
};

fetchPosts();
addSearchEvent();

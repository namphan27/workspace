import { axiosInstance } from "../utils/axios";

const Header = () => {
  let currentUser = null;
    try {
      const userFromStorage = localStorage.getItem("currentUser");
    if (userFromStorage) {
      currentUser = JSON.parse(userFromStorage);
    } 
    } catch (error) {
      console.log(error);
      currentUser = null
    }
  let userSection = "";
  if (currentUser && currentUser.name) {
    userSection = `
      <div class="flex items-center gap-4">
        <a href="#" class="text-white text-xl"><i class="fa-solid fa-tv"></i></a>
        <span class="text-white">Xin chào ${currentUser.name}</span>
        <i id="profile-user" class="fa-solid fa-user text-white cursor-pointer"></i>
        <button id="logout-btn" class="text-white p-1 cursor-pointer">Đăng xuất</button>
      </div>
    `;
  } else {
    userSection = `
      <div class="flex items-center gap-4">
        <a href="#" class="text-white text-xl"><i class="fa-solid fa-tv"></i></a>
        <div class="js-login p-2 bg-white text-black rounded-full">
          <a href="/login">Đăng nhập</a>
        </div>
      </div>
    `;
  }

  return `
  <header class="flex fixed items-center justify-between px-9 py-5 bg-black w-full top-0 left-0 z-[99] border-b border-b-gray-500">
    <div class="flex items-center gap-3">
      <button class="text-white text-2xl cursor-pointer" id="openMenu">
        <i class="fa-solid fa-bars"></i>
      </button>
      <a href="/" class="mx-[20px]">
        <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt="Logo" class="h-8">
      </a>
    </div>

    <div class="flex-1 mx-6 ml-[20px]">
      <div class="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-[10px] px-4 py-2 w-[25%]">
        <span class="text-gray-300 mr-2"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input 
          type="text" 
          placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ, podcast"
          class="js-search w-full bg-transparent outline-none text-gray-200 placeholder-gray-400"
        >
      </div>
    </div>

    ${userSection}
  </header>

  <aside class="bg-black mt-5 flex flex-col justify-start gap-6 fixed top-14 left-0 p-2 w-25 h-full">
  <a href="/" class="flex flex-col gap-2 items-center p-[20px] w-full hover:bg-gray-700 rounded">
    <i class="fa-solid fa-house fa-lg text-white mb-1"></i>
    <span class="text-[10px] text-white">Trang chủ</span>
  </a>

  <a href="/explore" class="flex flex-col gap-2 items-center py-[20px] w-full hover:bg-gray-700 rounded">
    <i class="fa-solid fa-compass fa-lg text-white mb-1"></i>
    <span class="text-[10px] text-white">Khám phá</span>
  </a>

  <a href="/library" class="flex flex-col gap-4 justify-center items-center p-[20px] w-full hover:bg-gray-700 rounded">
    <i class="fa-solid fa-bookmark fa-lg text-white mb-1"></i>
    <span class="text-[10px] text-white">Thư viện</span>
  </a>

  <a href="#" class="flex flex-col gap-2 items-center p-[20px] w-full hover:bg-gray-700 rounded">
    <i class="fa-solid fa-record-vinyl fa-lg text-white mb-1"></i>
    <span class="text-[10px] text-white">Nâng cấp</span>
  </a>
</aside>
<aside id="sidebar" 
  class="fixed top-14 left-0 w-48 h-full mt-8 bg-black p-2 flex flex-col gap-6 transform -translate-x-full transition-transform duration-300 z-50 border-r border-r-gray-500">

  <a href="/" class="flex gap-3 ml-1 items-center p-3 w-full hover:bg-gray-700 rounded">
    <i class="fa-solid fa-house fa-lg text-white mb-1"></i>
    <span class="text-[15px] text-white">Trang chủ</span>
  </a>

  <a href="/explore" class="flex gap-3 ml-1 items-center p-3 w-full hover:bg-gray-700 rounded">
    <i class="fa-solid fa-compass fa-lg text-white mb-1"></i>
    <span class="text-[15px] text-white">Khám phá</span>
  </a>

  <a href="/library" class="flex gap-3 ml-1 items-center p-3 w-full hover:bg-gray-700 rounded">
    <i class="fa-solid fa-bookmark fa-lg text-white mb-1"></i>
    <span class="text-[15px] text-white">Thư viện</span>
  </a>

  <a href="#" class="flex gap-3 ml-1 items-center p-3 w-full hover:bg-gray-700 rounded border-b border-b-gray-600">
    <i class="fa-solid fa-record-vinyl fa-lg text-white mb-1"></i>
    <span class="text-[15px] text-white">Nâng cấp</span>
  </a>

  <a href="/login" class="flex hidden gap-3 items-center bg-gray-600 p-2 w-full hover:bg-gray-700 rounded-full">
    <i class="fa-solid fa-user text-white"></i>
    <span class="js-login text-[15px] text-white">Đăng nhập</span>
  </a>

  <div id="sidebar-profile" class=" flex gap-3 items-center bg-gray-600 p-2 w-full rounded-full hover:bg-gray-700 cursor-pointer">
  <i class="fa-solid fa-plus text-white"></i>
  <span id="sidebar-name" class="text-[15px] text-white">Danh sách phát mới</span>
</div>
</aside>`;
};
export default Header;

export const authMe = async () => {
  try {
    const response = await axiosInstance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    // localStorage.removeItem("access_token")
    // localStorage.removeItem("refresh_token")
    // window.location.href = "/login"
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await axiosInstance.post(
      "./auth/refresh-token",
      {
        refreshToken: refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};


// export const initProfileModal = () => {
//   const profileUser = document.getElementById("profile-user");
//   if (!profileUser) return;

//   let modal = document.querySelector("#profile-modal");
//   if (!modal) {
//     modal = document.createElement("div");
//     modal.id = "profile-modal";
//     modal.className = "hidden fixed top-20 right-10 w-64 bg-black text-white p-4 rounded shadow-lg z-50";
//     modal.innerHTML = `
//       <h3 class="text-lg font-bold mb-2">Thông tin cá nhân</h3>
//       <ul class="text-sm">
//         <li class="py-1 px-2 hover:bg-gray-700 rounded cursor-pointer">Hồ sơ của tôi</li>
//         <li id="change-password-btn" class="py-1 px-2 hover:bg-gray-700 rounded cursor-pointer">Đổi mật khẩu</li>
//         <li id="logout-btn" class="py-1 px-2 hover:bg-gray-700 rounded cursor-pointer">Đăng xuất</li>
//       </ul>
//     `;
//     document.body.appendChild(modal);
//   }

//   profileUser.addEventListener("click", () => {
//     modal.classList.toggle("hidden");
//   });

//   document.addEventListener("click", (e) => {
//     if (!modal.contains(e.target) && e.target !== profileUser) {
//       modal.classList.add("hidden");
//     }
//   });
// };


export const Search = async ({ q, limit = 20, page = 1 }) => {
  if (!q) return { total: 0, results: [] };

  try {
    const response = await axiosInstance.get(`/search`, {
      params: { q, limit, page }
    });
    return response.data; 
  } catch (error) {
    console.error(error);
    return { total: 0, results: [] };
  }
};

export const addSearchEvent = () => {
  const searchEl = document.querySelector(".js-search")
  searchEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.trim();
      if (value) {
        window.location.href = `/search?q=${encodeURIComponent(value)}`;
      }
    }
  });
}
export const initMenuToggle = () => {
  const openMenuBtn = document.getElementById("openMenu");
  const sidebar = document.getElementById("sidebar");
  if (!openMenuBtn || !sidebar) return;

  openMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full"); 
  });
};

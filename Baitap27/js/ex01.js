const BASE_URL = `https://dummyjson.com`;
const query = {};

const renderPosts = (posts) => {
  const postListEl = document.querySelector(".js-post-list");
  const html = posts
    .map(
      (post) => `
      <div class="border border-gray-400 p-3 mb-3" data-id="${post.id}">
        <h2 class="text-2xl font-medium mb-3">${post.title}</h2>
        <p>${post.body}</p>
        <div class="flex mt-2 justify-between items-center">
          <button
            class="js-view border border-gray-400 px-3 py-2 rounded-full cursor-pointer hover:bg-[green] hover:text-white"
          >
            Xem chi tiết
          </button>
          <div class="flex gap-2">
            <span class="js-edit cursor-pointer text-blue-600 hover:underline">Sửa</span>
            <span class="js-delete cursor-pointer text-red-600 hover:underline">Xóa</span>
          </div>
        </div>
      </div>`
    )
    .join("");
  postListEl.innerHTML = html;

  const viewBtnList = postListEl.querySelectorAll(".js-view");
  viewBtnList.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const postEl = e.target.closest("[data-id]");
      const id = postEl.dataset.id;
      try {
        const res = await fetch(`${BASE_URL}/posts/${id}`);
        const post = await res.json();
        openModal(() => ({
          modalTitle: post.title,
          modalContent: `<p>${post.body}</p>`,
        }));
      } catch {
        openModal(() => ({
          modalTitle: "Lỗi",
          modalContent: "Không thể tải chi tiết bài viết.",
        }));
      }
    });
  });

  const editBtnList = postListEl.querySelectorAll(".js-edit");
  editBtnList.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const postEl = e.target.closest("[data-id]");
      const id = postEl.dataset.id;
      const res = await fetch(`${BASE_URL}/posts/${id}`);
      const post = await res.json();
      openModal(() => ({
        modalTitle: "Sửa bài viết",
        modalContent: `
          <form class="js-edit-form space-y-3">
            <input type="text" name="title" value="${post.title}" class="w-full border border-gray-400 px-3 py-2 rounded" />
            <textarea name="body" class="w-full border border-gray-400 px-3 py-2 rounded h-32">${post.body}</textarea>
            <div class="flex justify-end gap-3">
              <button type="submit" class="border border-gray-500 bg-[green] text-white px-4 py-2 rounded">Lưu</button>
              <button type="button" class="js-cancel border border-gray-500 px-4 py-2 rounded">Hủy</button>
            </div>
          </form>
        `,
      }));

      const form = document.querySelector(".js-edit-form");
      const cancelBtn = form.querySelector(".js-cancel");

      form.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const title = form.title.value.trim();
        const body = form.body.value.trim();
        if (!title || !body) {
          alert("Vui lòng nhập đầy đủ thông tin");
          return;
        }
        try {
          await fetch(`${BASE_URL}/posts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body }),
          });
          closeModal();
          fetchPosts();
        } catch {
          alert("Cập nhật thất bại");
        }
      });

      cancelBtn.addEventListener("click", closeModal);
    });
  });

  const deleteBtnList = postListEl.querySelectorAll(".js-delete");
  deleteBtnList.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const postEl = e.target.closest("[data-id]");
      const id = postEl.dataset.id;
      if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
        try {
          await fetch(`${BASE_URL}/posts/${id}`, {
            method: "DELETE",
          });
          fetchPosts();
        } catch {
          alert("Xóa thất bại");
        }
      }
    });
  });
};

const setLoading = (status = true) => {
  const loadingEl = document.querySelector(".js-loading");
  loadingEl.innerHTML = status
    ? `<span class="text-3xl block text-center">Loading...</span>`
    : "";
};

const renderError = (message) => {
  const postListEl = document.querySelector(".js-post-list");
  postListEl.innerHTML = `<span class="text-3xl block text-center text-red-600 underline">${message}</span>`;
};

const fetchPosts = async () => {
  try {
    setLoading();
    let url = `${BASE_URL}/posts`;
    if (query.search) {
      url = `${BASE_URL}/posts/search?q=${query.search}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch /posts");
    }
    const { posts } = await response.json();
    renderPosts(posts);
  } catch (err) {
    console.error(err);
    renderError(`Đã có lỗi khi tải dữ liệu`);
  } finally {
    setLoading(false);
  }
};

const debounce = (callback, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

const addSearchEvent = () => {
  const searchEl = document.querySelector(".js-search");
  searchEl.addEventListener(
    "input",
    debounce((e) => {
      const value = e.target.value;
      query.search = value;
      fetchPosts();
    })
  );
};

const openModal = (callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const modalEl = document.querySelector(".js-modal");
  const modalTitle = modalEl.querySelector(".js-modal-title");
  const modalConent = modalEl.querySelector(".js-modal-content");
  modalEl.classList.remove("hidden");
  const option = callback();
  modalTitle.innerText = option.modalTitle;
  modalConent.innerHTML = option.modalContent;
};

const closeModal = () => {
  const modalEl = document.querySelector(".js-modal");
  const modalTitle = modalEl.querySelector(".js-modal-title");
  const modalConent = modalEl.querySelector(".js-modal-content");
  modalEl.classList.add("hidden");
  modalTitle.innerText = "";
  modalConent.innerText = "";
};

const addEventCloseModal = () => {
  const overlay = document.querySelector(".js-overlay");
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
      closeModal();
    }
  });
};

addEventCloseModal();
fetchPosts();
addSearchEvent();

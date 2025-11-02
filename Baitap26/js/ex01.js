
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("down")) {
    const li = e.target.parentElement;
    const nextElement = li.nextElementSibling;
    if (!nextElement) {
      return;
    }
    ul.insertBefore(nextElement, li);
  }

  if (e.target.classList.contains("up")) {
    const li = e.target.parentElement;
    const prevElement = li.previousElementSibling;
    if (!prevElement) {
      return;
    }
    ul.insertBefore(li, prevElement);
  }

  if (e.target.nodeName === "LI") {
    e.stopPropagation();
    removeSelected();
    e.target.classList.add("selected");
    const item = e.target;
    document.onkeyup = (e) => {
      handleDuplicate(e, item);
    };
  }
});
const removeSelected = () => {
  const itemSelected = document.querySelector("ul li.selected");
  if (itemSelected) {
    itemSelected.classList.remove("selected");
  }
};
const handleDuplicate = (e, item) => {
  if (e.altKey && e.shiftKey) {
    if (e.key === "ArrowDown") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("selected");
      const nextElement = item.nextElementSibling;
      if (nextElement) {
        ul.insertBefore(itemClone, nextElement);
      } else {
        ul.append(itemClone);
      }
    }
    if (e.key === "ArrowUp") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("selected");
      ul.insertBefore(itemClone, item);
    }
  }
};
document.addEventListener("click", removeSelected);
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(e.clientX, e.clientY);
});



const contextMenu = document.createElement("div");
contextMenu.classList.add("context-menu");
contextMenu.innerHTML = `
<div class="rename">Đổi tên</div>
<div class="delete">Xóa</div>
`;
document.body.append(contextMenu);
let currentItem = null;

ul.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(e.target);

  const li = e.target.closest("li");
  if (!li) return;
  currentItem = li;

  contextMenu.style.display = "flex";
  contextMenu.style.left = e.clientX + "px";
  contextMenu.style.top = e.clientY + "px";
});

document.addEventListener("click", () => {
  contextMenu.style.display = "none";
});

contextMenu.addEventListener("click", (e) => {
  if (!currentItem) return;
  if (e.target.classList.contains("rename")) {
    const newName = prompt(
      "Nhập tên mới",
      currentItem.firstChild.textContent.trim()
    );
    if (newName) {
      currentItem.childNodes[0].textContent = newName + " ";
    }
  }

  if (e.target.classList.contains("delete")) {
    currentItem.remove();
  }
  contextMenu.style.display = "none";
});



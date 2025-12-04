import { App } from "./app.js";
import { addSearchEvent, initMenuToggle } from "./components/header.js";
import { LogOutAccount } from "./components/login.js";
import initRouter from "./router/router.js";

const render = async () => {
  const root = document.querySelector("#root");
  root.innerHTML = await App();
  initMenuToggle();
  addSearchEvent();
  LogOutAccount();
};

const run = async () => {
  await render();

  await initRouter();
};

run();

import { App } from "./app.js";
import { LogOutAccount } from "./components/login.js";
import initRouter from "./router/router.js";

const render = async () => {
  const root = document.querySelector("#root")
  root.innerHTML = await App();
  LogOutAccount()
};

await render();

await initRouter()
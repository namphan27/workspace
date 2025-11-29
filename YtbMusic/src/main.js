import { App } from "./app.js";
import initRouter from "./router/router.js";

const render = async () => {
  const root = document.querySelector("#root")
  root.innerHTML = await App();
};

await render();

await initRouter()
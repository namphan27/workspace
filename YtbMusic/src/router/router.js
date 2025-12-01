import Navigo from "navigo";
import { Explore } from "../page/explore";
import { Home } from "../page/home";
import { handleLogin, Login } from "../components/login";
import { handleRegister, Register } from "../components/register";
import { CategoryDetail, LineAlbums, LinePlaylist, LinesDetail, LineSongs, LineVideos } from "../page2/category";
import { albumsMusic, init } from "../page2/albums";
import { showAlbums, showListMusic } from "../components/list";
import { authMe } from "../components/header";
import { initMusic, todayListMusic } from "../page2/today-hit";
import { Library } from "../page/library";
import { exploreMusic } from "../page2/new-music";
import { chartVideos } from "../page2/bxh";
import { MetaDetails } from "../page2/explore-meta";
import { MoodsList, MoodsList2, MoodsSlug } from "../page2/moods";
const router = new Navigo("/", { hash: true });
const initRouter = async () => {
  const page = document.querySelector("#js-body");
  const homePage = await Home();
  const explorePage = await Explore();
  const loginEl = await Login();
  const registerEl = await Register();
  const currentUser = await authMe();
  const libraryPage = await Library()
  const newMusicPage = await exploreMusic()
  const chartVideoPage = await chartVideos()
  const metaPage = await MetaDetails()
  // ở dây nếu nó thông tin người dùng thì bạn sẽ lưu vào localStorage
  // sau đó ở header bạn check nếu có thông tin thì thay bằng tên người dùng
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  router
    .on("/", () => {
      page.innerHTML = homePage;
    })
    .on("/explore", () => {
      page.innerHTML = explorePage;
    })
    .on("/library", () => {
      page.innerHTML = libraryPage;
    })
    .on("/login", async () => {
      page.innerHTML = loginEl;
      await handleLogin();
    })
    .on("/register", async () => {
      page.innerHTML = registerEl;
      await handleRegister();
    })
    .on("/explore/new-releases", () => {
      page.innerHTML = newMusicPage
    })
    .on("/explore/meta", () => {
      page.innerHTML = metaPage
    })
    .on("/charts/videos", () => {
      page.innerHTML = chartVideoPage
    })
    .on("/explore/categories/:slug", async (params) => {
      const slug = params.data.slug;
      const html = await CategoryDetail(slug);
      page.innerHTML = html;
    })
    .on("/moods/:slug", async (params) => {
      const slug = params.data.slug;
      const html = await MoodsSlug(slug)
      const htmlDetails = await MoodsList(slug)
      const htmlDetails2 = await MoodsList2(slug)
      page.innerHTML = html + htmlDetails + htmlDetails2;
    })
    .on("/explore/lines/:slug", async (params) => {
      const slug = params.data.slug;
      const html = await LinesDetail(slug);
      page.innerHTML = html;
    })
    .on("/explore/lines/:slug/songs", async (params) => {
      const slug = params.data.slug;
      const html = await LineSongs(slug);
      const htmlDetails = await LinePlaylist(slug)
      const htmlAlbums = await LineAlbums(slug)
      const htmlVideos = await LineVideos(slug)
      page.innerHTML = html + htmlDetails + htmlAlbums + htmlVideos;
    })
    .on("/albums/details/:slug", async (params) => {
      const slug = params.data.slug;
      await init(slug);
      const htmlDetails = await showAlbums();
      const html = await albumsMusic(slug);
      page.innerHTML = html + htmlDetails;
    })
    .on("/playlists/details/:slug", async (params) => {
      const slug = params.data.slug;
      await initMusic(slug)
      const htmlDetails = await showListMusic();
      const html = await todayListMusic(slug);
      page.innerHTML = html + htmlDetails;
    })
    .resolve();
};
export default initRouter;

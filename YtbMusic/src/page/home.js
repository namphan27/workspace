import { Moods, todaylist, albums, countries } from "../components/list"
import { listMusic } from "../components/list"
export const Home = async () => {
    const mood = await Moods()
    const musics = await listMusic()
    const today = await todaylist()
    const album = await albums()
    const listCoutry = await countries()
    return `
    <div class="space-y-10">
      ${mood}
      ${musics}
      ${today}
      ${album}
      ${listCoutry}
    </div>
    `
}
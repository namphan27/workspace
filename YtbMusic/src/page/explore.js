import { List, Lines, topMusic } from "../components/list";

export const Explore = async () => {
  const listHTML = await List();
  const linesHTML = await Lines();
  const topMusicHTML = await topMusic()
  return `
    <div class="space-y-10">
      ${topMusicHTML}
      ${listHTML}
      ${linesHTML}
    </div>
  `;
};

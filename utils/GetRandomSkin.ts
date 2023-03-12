export default function getRandomSkinImg(champion: string): string {
    const randomNumber = Math.floor(Math.random() * 3);
    const formattedString = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${randomNumber}.jpg`;
    return formattedString;
}
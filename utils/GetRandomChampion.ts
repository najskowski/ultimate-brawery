import { champions } from "@/public/champions"

export default function getRandomChampion(): string {
    const randomIndex = Math.floor(Math.random() * champions.length);
    return ""
}
const MyhticItems = {
    "6600": "Goredrinker",
    "6630": "Stridebreaker",
    "6653": "Trinity Force",
    "6691": "Divine Sunderer",
    "6632": "Frostfire Gauntlet",
    "6662": "Turbo Chemtank",
    "6671": "Moonstone Renewer",
    "6656": "Duskblade of Draktharr",
    "6692": "Eclipse",
    "6660": "Prowler's Claw",
    "6693": "Kraken Slayer",
    "6631": "Galeforce",
    "6672": "Imperial Mandate",
    "6664": "Shurelya's Battlesong",
    "6655": "Night Harvester",
    "6694": "Luden's Tempest",
    "6665": "Everfrost",
    "6673": "Riftmaker",
    "6633": "Hextech Rocketbelt",
    "6650": "Locket of the Iron Solari",
    "7025": "Heartsteel",
    "7027": "Radiant Virtue",
    "7026": "Jak'Sho, The Protean",
    "7028": "Rod of Ages"

}

const getRandomItem = (list: string[]): string => {
    var item = list[Math.floor(Math.random() * list.length)];
    return item;
}

export { MyhticItems, getRandomItem }
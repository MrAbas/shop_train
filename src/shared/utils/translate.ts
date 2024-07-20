export function translate(color: string): string {
  switch (color) {
    case "Пурпурный":
      return "Purple";
    case "Жёлтый":
      return "Yellow";
    case "Оранжевый":
      return "Orange";
    case "Чёрный":
      return "Black";
    case "Белый":
      return "White";

    case "Футболки":
      return "t-shirts";
    case "Лонг-сливы":
      return "long-sleeves";
    case "Худи":
      return "hoodie";
    case "Верхняя одежда":
      return "outerwear";

    case "cloth":
      return "Одежда";
    case "accessories":
      return "Аксессуары";
    case "souvenirs":
      return "Сувениры";
    case "office":
      return "Канцелярия";

    case "black":
      return "Чёрный";
    case "purpure":
      return "Пурпурный";
    case "orange":
      return "Оранжевый";
    case "yellow":
      return "Жёлтый";
    case "white":
      return "Белый";
    default:
      return "Unknown word";
  }
}

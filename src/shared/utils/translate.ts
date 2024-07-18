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
    default:
      return "Unknown word";
  }
}

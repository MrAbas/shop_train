export function translateColor(color: string): string {
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
    default:
      return "Unknown color";
  }
}

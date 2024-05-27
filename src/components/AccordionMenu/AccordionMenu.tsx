import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./AccordionMenu.module.scss";

export default function AccordionMenu() {
  const accordionNames = ["Одежда", "Аксессуары", "Сувениры", "Канцелярия", "Весь каталог"];
  /* const accordionItems = {
    Одежда: ["Футболки", "Лонг-сливы", "Худи", "Верхняя одежда"],
    Аксессуары: ["Сумки", "Головные уборы", "Зонты"],
    Сувениры: ["Бизнес-сувениры", "Промо-сувениры"],
    Канцелярия: ["Тетради", "Ручки"],
  }; TODO спросить про ссылки */

  return (
    <div className={styles.wrapperAccordion}>
      {accordionNames.map((accordionName, index) => (
        <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }} key={`${accordionName + index}`}>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography sx={{ color: "rgb(119, 124, 133)" }}>{accordionName}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingLeft: "32px" }}>
            <Typography sx={{ color: "rgb(232, 233, 234)" }}>Футболки</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

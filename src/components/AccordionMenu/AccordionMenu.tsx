import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./AccordionMenu.module.scss";

export default function AccordionMenu({ accordionData }) {
  return (
    <div className={styles.wrapperAccordion}>
      {accordionData.map((accordionName) => (
        <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }} key={`${accordionName.id}`}>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography sx={{ color: "rgb(119, 124, 133)" }}>{accordionName.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingLeft: "32px" }}>
            <Typography sx={{ color: "rgb(232, 233, 234)" }}>Футболки</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

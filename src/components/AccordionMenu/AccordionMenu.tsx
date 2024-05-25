import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./AccordionMenu.module.scss";

export default function AccordionMenu() {
  return (
    <div className={styles.wrapperAccordion}>
      <Accordion sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography sx={{ color: "rgb(119, 124, 133)" }}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "rgb(232, 233, 234)" }}>Футболки</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import { Accordion } from "react-bootstrap";
const GardenAccordion = ({ event, active, onClick, title, description }) => {
  return (
    <div className="accordion-card mb-15">
      <div className="accordion-header">
        <Accordion.Toggle
          as="h6"
          eventKey={event}
          aria-expanded={active === event ? "true" : "false"}
          onClick={() => onClick()}
          className="accordion-title"
        >
          {title}
        </Accordion.Toggle>
      </div>
      <Accordion.Collapse eventKey={event}>
        <div className="accordion-body">
          <p>{description}</p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default GardenAccordion;

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function PlanTabs({ children }) {
  return (
    <Tabs
      defaultActiveKey="stellar"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      {children}
    </Tabs>
  );
}

export default PlanTabs;

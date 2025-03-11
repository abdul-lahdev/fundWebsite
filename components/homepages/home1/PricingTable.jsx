import Table from "react-bootstrap/Table";

function PricingTable({ children }) {
  return (
    <Table striped bordered hover>
      {children}
    </Table>
  );
}

export default PricingTable;

import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <Container>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button varient="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div style={{ 
       display:"grid",
       gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",
       gap:"1rem",
       alignItems: "flex-start"
       }}>
        <BudgetCard name={"name"} amount={101} max={100}/>
        <BudgetCard name={"name"} amount={400} max={1050}/>
      </div>
    </Container>

  );
}

export default App;

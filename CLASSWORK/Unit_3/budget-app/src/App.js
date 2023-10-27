import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  return (
    < >
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className="me-auto">Budgets</h1>
      <Button variant="primary"onClick={()=> {setShowAddBudgetModal(true)}}>Add Budget</Button>
      <Button variant="outline-primary">Add expense</Button>
      </Stack>
      <div style={{display:"grid", 
      gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", 
      gap:"1rem",
      alignItems: "flex-start"  
      }}>
        <BudgetCard name="Tfl" amount={210} max={200}/>
        <BudgetCard name="food" amount={10} max={200}/>
      </div>
    </Container>
    <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    </>
  );
}

export default App;

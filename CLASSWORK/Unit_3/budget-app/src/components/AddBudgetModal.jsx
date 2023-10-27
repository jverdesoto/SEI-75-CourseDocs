import { Modal, Form, Button} from 'react-bootstrap'
// import { useContext, useRef } from 'react'
import { useBudgets } from '../contexts/BudgetContext'



export default function AddBudgetModal({show, handleClose}) {
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()
    function handleSubmit(e) {
      e.preventDefault()
      addBudget({
        name: nameRef.current.value,
        max: parseFloat(maxRef.current.value)
      })
      handleClose()
    }
  return (
   <Modal show={show} onHide={handleClose}>
    <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
            <Modal.Title>
                New Budget
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId='name' className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' required ref={nameRef}></Form.Control>
            </Form.Group>
            <Form.Group controlId='name' className='mb-3'>
                <Form.Label>Max Budget</Form.Label>
                <Form.Control type='number' min={0} step={0.01} required ref={maxRef}></Form.Control>
            </Form.Group>
            <div className='d-flex justify-content-end'>
                <Button variant='primary' type='submit'>Add</Button>
            </div>
        </Modal.Body>
    </Form>
   </Modal>
  )
}

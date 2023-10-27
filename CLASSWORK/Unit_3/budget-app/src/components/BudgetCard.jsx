import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import { currencyFormatter } from "../utils/utils"

export default function BudgetCard({name, amount, max, gray}) {
    const classNames = []

    if(amount > max) classNames.push('bg-danger', 'bg-opacity-10')
    else if ( gray ) classNames.push('bg-light')

    function getBarVariant(amount, max) {
        const relation = amount / max
        if ( relation < 0.5 ) return 'primary'
        if ( relation < 0.75 ) return 'warning'
        return 'danger'
    }
  return (
    <Card className={classNames.join(' ')}> 
    {/* .join, joins the classnames into a single string so that it can be read */}
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div className="me-2">{ name }</div>
            <div className="d-flex align-items-baseline">
                { currencyFormatter.format(amount) } 
                <span className="text-muted fs-6 ms-1">/ { currencyFormatter.format(max) }</span>
                </div>
            </Card.Title>
            <ProgressBar
            className="rouded-pill"
            variant={getBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
            />
            <Stack direction="horizontal" gap="2" className="mt-4">
                <Button variant="outline-primary" className="ms-auto">
                    Add Expenses
                    </Button>
                    <Button variant="outline-secondary">
                        View Expenses
                    </Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}

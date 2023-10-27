import React, { useContext} from "react";
import { v4 as uuid} from  "uuid"; // v4 is version for uuid
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = 'Uncategorised'

export function useBudgets() {
    return useContext(BudgetContext)
}
// store data we need to be accessed by the rest of the app
// the children is everything that lives in the tag?
export const BudgetProvider = (({ children }) => {
    // return useContext
    const [budgets, setBudgets] = useLocalStorage('budgets', [])
    const [expenses, setExpenses] = useLocalStorage('expenses', [])

function getBudgetExpenses(budgetId){
    return expenses.filter(expenses => expenses.budgetId === budgetId)
}

function addExpense({ description, amount, budgetId}) {
    return setExpenses(prevExpenses => {
        return [...prevExpenses, { id: uuid(), description, amount, budgetId }]
    })
}

function addBudget({ name, max }) {
    setBudgets(prevBudgets => {
        if ( prevBudgets.find(budget => budget.name === name)) {
            return prevBudgets
        }
        return [...prevBudgets, { id: uuid(), name, max }]
    })
}

function deleteExpense({ id }) {
    setExpenses(prevExpenses => {
        return prevExpenses.filter(expense => expense.id !== id)
    })
}
      

function deleteBudget({ id }){
    setBudgets(prevBudgets => {
        return prevBudgets.filter(budget => budget.id !== id)
    })
}

return (
    <BudgetContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteExpense,
        deleteBudget
    }}>
        {children}
    </BudgetContext.Provider>
)
})
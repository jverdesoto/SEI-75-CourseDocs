import React, { useContext } from "react";
import { v4 as uuid } from "uuid"; 
import useLocalStorage from "../hooks/useLocalStorage";
const BudgetContext = React.createContext()

/*  
we are just creating an object for our budget addexpense
{
    id,
    name,
    max
}
and for our expenses addbudget
{
    id,
    description,
    amount,
    budget id
}
*/
export function useBudgets() {
    return useContext(BudgetContext)
}
export const BudgetProvider = (({ children }) =>{
    const [budgets, setBudgets] = useLocalStorage('budgets', [])
    const [expenses, setExpenses] = useLocalStorage('expenses', [])

    function getBudgetExpenses(budgetId){
        return expenses.filter(expenses => expenses.budgetId === budgetId)
    }
    function addExpense({ description, amount, budgetId }) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuid(), description, amount, budgetId }]
        })
    }
    function addBudget({ name, max }) {
            setBudgets(prevBudget => {
                if(prevBudget.find(budget => budget.name === name)) {
                    return prevBudget
                }
                return [...prevBudget, {id: uuid(), name, max}]
            })
    }
    function deleteExpense({ id }) {
            setExpenses(prevExpenses => {
                return prevExpenses.filter(expense => expense.id !== id)
            })
    }
    function deleteBudget({ id }) {
            setBudgets(prevBudgets => {
                return prevBudgets.filter(budget => budget !== id)
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
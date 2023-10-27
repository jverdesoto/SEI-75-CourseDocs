import React, { useContext } from "react";
import { v4 as uuid } from "uuid"

const BudgetContext = React.creaateContext()

export const BudgetProvider =( ({ children }) =>{
    const budgets = []
    const expenses =[]

    function getBudgetExpenses(budgetId) {
        return ''
    }

    function addExpense({ description, amount, bugetId }) {
        return ''
    }

    function addBudget({ name, max }) {
        return ''
    }

    function deleteExpense({ id }) {
        return ''
    }

    function deleteBudget({ id }) {
        return ''
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
import React, { createContext, useState } from 'react';



export const GlobalContext = createContext(null);



export default function GlobalState({ children }) {

    const [formData, setFormData] = useState({
        amount: 0,
        type: 'expense',
        description: '',
    });
    const [value, setValue] = useState('expense');
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [allTransactions, setAllTransactions] = useState([]);

    function handleFormSubmit(currentFormData) {
        if(!currentFormData.description || !currentFormData.amount) return;

        setAllTransactions([
            ...allTransactions,
            {...currentFormData,id:Date.now()},
        ]);
        setFormData({
            amount: 0,
            type: 'expense',
            description: '',
        })
    }
    return (
        <GlobalContext.Provider value={{ formData, setFormData, value, setValue, totalIncome, setTotalIncome, totalExpense, setTotalExpense, allTransactions, setAllTransactions, handleFormSubmit }}>{children}</GlobalContext.Provider>
    );
}

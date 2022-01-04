import React from 'react'
import './AddExpense.css'
import TopFold from '../../components/topFold'
import AddForm from '../../components/add-form'

const AddExpense = () => {
    return (
        <div className='add-expense'>

            <TopFold/>
            <AddForm/>
        </div>
    )
}

export default AddExpense

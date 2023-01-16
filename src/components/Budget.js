import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
const Budget = () => {
    const {budget,dispatch} = useContext(AppContext);
    const {expenses,currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce ((total, item)=>{
        return (total += item.cost);
    },0);
    return (
        <div className='alert alert-secondary'>

        <span>Budget: {currency} 
        <input
						
                        required='required'
						type='number'
                        step = "10"
						id='budget'
						value={budget}
						style={{ marginLeft: '2rem' , size: 10,width:100}}
						onChange={(event) => {
                          if (event.target.value < totalExpenses)
                           {
                               alert("you can not reduce the budget lower than expenses");
                           }
                           else
                           {
                                    if(event.target.value>20000)
                                    {
                                        alert("The budget cannot exceed  20000  £");
                                    }
                                    else
                                    {
                                        dispatch({
                                            type: 'SET_BUDGET',
                                            payload: event.target.value,
                                        });
                                    }
                           }
                            
                        }}>
						</input>

        </span>
    </div>
    )
};
export default Budget;


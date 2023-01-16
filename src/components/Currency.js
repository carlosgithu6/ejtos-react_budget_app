import React,{useContext}  from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
 
    const {dispatch } = useContext(AppContext);
    
    return (
		<div className='alert alert-secondary'>
			<span> Currency:
            <select  id="CurrencyGroup" onChange={(event) => 
              {
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: event.target.value
                 });                
              }
              }
                >
				<option defaultValue value="£" name="pound">£ Pound</option>
	        	<option value="$" name="Dollar">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="R" name="Ruppee">R Ruppee</option>
	    	</select>
            </span>
		</div>
        );
};
export default Currency;

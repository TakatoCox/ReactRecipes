import React, {useContext, useState} from 'react';
import { RecipeContext } from './RecipeAllContext';

const IngredientForm = (props)=>{

const {addIng} = useContext(RecipeContext);

const[item, setItem]=useState('');
const[amount, setAmount]=useState('');


const handleSubmitIng = (e)=>{
    e.preventDefault();
    addIng(props.recId, item, amount);
    setItem('');
    setAmount('');
}

return (
        <form onSubmit={handleSubmitIng}>   
            <div className="form">
            <input type="text" placeholder="Ingredient" value={item} 
            onChange={e=>setItem(e.target.value)}/> :
            <input type="text" placeholder="Amount" value={amount}
            onChange={e=>setAmount(e.target.value)} />
            <input type="submit" value="Add+"/>
            </div>
        </form> 
        )
}

export default IngredientForm
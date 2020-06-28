import React, {useContext, useState} from 'react';
import { RecipeContext } from './RecipeAllContext';

const TitleForm = (props)=>{

const {addTitle} = useContext(RecipeContext);

const[title, setTitle]=useState('');

const handleSubmitTitle=(e)=>{
    e.preventDefault();
    addTitle(props.recId, title);
    setTitle('')
}

return (
        <form onSubmit={handleSubmitTitle}>   
            <div className="form">
            <input type="text" placeholder="title" value={title}
            onChange={e=>setTitle(e.target.value)} />
            <input type="submit" value="ADD+"/>
            </div>
        </form> 
        )
}

export default TitleForm
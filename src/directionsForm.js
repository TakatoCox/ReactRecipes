import React, {useContext, useState} from 'react';
import { RecipeContext } from './RecipeAllContext';

const DirectionsForm = (props)=>{

const {addDir} = useContext(RecipeContext);

const[dir, setDir]=useState('')

const handleSubmitDir = (e)=>{
    e.preventDefault();
    addDir(props.recId, dir);
    setDir('');
}

return (
        <form onSubmit={handleSubmitDir}>   
            <div className="form">
            <input  type="text" placeholder="Direction" value={dir} 
            onChange={e=>setDir(e.target.value)}/> :
            <input type="submit" value="Add+"/>
            </div>
        </form> 
        )
}

export default DirectionsForm
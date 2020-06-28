import React, {useContext} from 'react';
import { RecipeContext } from './RecipeAllContext';
import TitleForm from './titleForm';
import IngredientForm from './IngredientForm'
import DirectionsForm from './directionsForm';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const WholeCard = () => {
    //use context functions
    const {addCard, recipes, removeIng, removeDir, removeRecipe} = useContext(RecipeContext);

    return ( 
        <div className="cardContainer">
            {/*Card*/}
             {recipes.map(rec=>
                <div className="card" key={rec.id}>

                {/*Title*/}
                <h3 className="cardTitle">{rec.title}</h3>
                <TitleForm recId={rec.id}/>

                {/*Ingredients*/}
                <h4 className="ingTitle">Ingredients</h4>
                <ul className="ingredientsList">
                    {rec.ingredients.map(i=>
                        <li key={i.idIng} 
                        onClick={()=>{removeIng(i.idIng)}}
                        className="ingItem">
                        {i.ing} : {i.amount}
                        </li>)}
                </ul>
                <IngredientForm recId={rec.id}/>

                {/*Directions*/}
                <h4 className="dirTitle">Directions</h4>
                <ul className="directionsList">
                    {rec.directions.map(i=>
                        <li key={i.idDir} 
                        onClick={()=>{removeDir(i.idDir)}}
                        className="dirItem">
                        {i.dir}
                        </li>)}
                </ul>
                <DirectionsForm recId={rec.id}/>

                {/*Remove Entire Recipe*/}
                <DeleteOutlinedIcon color="secondary" onClick={()=>{removeRecipe(rec.id)}} className="deleteCard"/>                
            </div>
             )}

             {/*Add Recipe Card*/}
            <button className="addCard" onClick={addCard}>+</button>
        </div>
     );
}
 
export default WholeCard;
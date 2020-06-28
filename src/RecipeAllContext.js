import React, {useState, createContext, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
//All recipes state
    const [recipes, setRecipes]=useState(()=>{
        const localData = localStorage.getItem('recipes');
        return localData? JSON.parse(localData):[];
        });

//add card
    const addCard = () =>{setRecipes(
        [...recipes, {title:'', ingredients:[], directions:[], id:uuidv4()}]
        )}

//add title
    const addTitle=(cardId, title)=>{
        let tempRecipes = [...recipes].map(rec=>{
            if(rec.id===cardId)
            return({title: title, ingredients: [...rec.ingredients], directions:[...rec.directions], id:rec.id})
            else
            return({...rec})
        });
        setRecipes(tempRecipes);
    }
        
//add ingredient to state
    const addIng = (cardId, item, amount) =>{
        let tempRecipes = [...recipes].map(rec=>{
            if(rec.id===cardId)
                return({title: rec.title, ingredients: [...rec.ingredients,{ing:item,amount:amount,idIng:uuidv4()}], directions:[...rec.directions], id:rec.id})
            else 
                return ({...rec});
            });
        setRecipes(tempRecipes);
    }

//remove an ingredient from state
    const removeIng = (id) =>{
        let tempIng; //filter out the ingredient to be removed
        let tempRecipes = [...recipes].map(rec=>{
            tempIng = rec.ingredients.filter(ing=>ing.idIng!==id);
            return({title: rec.title, ingredients: tempIng, directions:[...rec.directions], id:rec.id})
            });
            setRecipes(tempRecipes);
    }

//add direction to state
    const addDir = (cardId, dir) =>{
        let tempRecipes = [...recipes].map(rec=>{
            if(rec.id===cardId)
                return({title: rec.title, ingredients: [...rec.ingredients], directions:[...rec.directions,{dir:dir,idDir:uuidv4()}], id:rec.id})
            else 
                return ({...rec});
            });
        setRecipes(tempRecipes);
    }

//remove a direction from state
    const removeDir = (id) =>{
        let tempDir;//filter out the direction to be removed
        let tempRecipes = [...recipes].map(rec=>{
            tempDir = rec.directions.filter(dir=>dir.idDir!==id);
            return({title: rec.title, ingredients: [...rec.ingredients], directions:tempDir, id:rec.id})
            });
            setRecipes(tempRecipes);
    }

//remove a recipe card from state
    const removeRecipe = (id) => {
        setRecipes(recipes.filter(rec=>rec.id!==id));
    }


//add to local storage
    useEffect(()=>{
        localStorage.setItem('recipes', JSON.stringify(recipes))
    },[recipes]);

    return ( 
        <RecipeContext.Provider value={{addCard, recipes,addTitle, addIng, removeIng, removeDir, addDir, removeRecipe}}>
            {props.children}
        </RecipeContext.Provider>
     );
}
 
export default RecipeContextProvider;
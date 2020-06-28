import React from 'react';
import RecipeContextProvider from './RecipeAllContext';
import WholeCard from './wholeCard';
import "./App.css"



function App() {
  return (
    <div className="App">
      <div className="header">
          <h1 className="headerTitle">My Recipes</h1>
      </div>
      <RecipeContextProvider>
      <WholeCard/>
      </RecipeContextProvider>
    </div>
  );
}

export default App;
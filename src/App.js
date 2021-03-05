import React, { useEffect, useState } from "react";
import Recipe from "./Recipes";
import{ useDispatch, useSelector } from 'react-redux'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Pic from "./burger.png";
import { listFood } from './action'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {


        



  const classes = useStyles();

  const APP_ID ="15c3a3ec";
  const APP_KEY = "d1abd6d091e5106805f2ea52f50c56e7";



  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]= useState(" ");
  const [query, setQuery]= useState('chicken');

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  useEffect( ()=>{

    


    const getRecipies= async()=>{
      const response= await fetch(url);
      const jsonData= await response.json();
      setRecipes(jsonData.hits);
      console.log(jsonData.hits);

    }
    getRecipies();

  }, [query]);

  const updateSearch= (e)=>{
    setSearch(e.target.value);
    //console.log(search);
  }

  const newSearch= (e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

 

  return (
    <div className={classes.root}>
      
    <div className="App">
      
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img className="toresize" src={Pic}></img>
    <a class="navbar-brand" href="#"><strong>Recipe App</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <form onSubmit={newSearch} class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search"  value={search} onChange={updateSearch} aria-label="Search"></input>
        <button class="btn btn-outline-success" type="search">Search</button>
      </form>
    </div>
  
  </div>
</nav>

     
       <div className="grid container">
      { recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} caution={recipe.recipe.cautions} calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
        
       
      ))}

      </div>
     
    </div>
   <div className="copy">&copy; Made By <strong>Sridhu</strong></div> 
    </div>
  );
}

export default App;



import { Route, Routes } from "react-router-dom"
import NavComponent from "./components/nav/NavComponent"
import RecipeComponent from "./pages/RecipePage/RecipesComponent"
import RecipeDetails from "./pages/RecipeDetailePage/RecipeDetails"
import Login from "./pages/LoginPage/Login"
import Register from "./pages/RegisterPage/Register"



function App() {


  return (
    <>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/recipe" element={<RecipeComponent/>}/>
        <Route path="/recipe/:id" element={ <RecipeDetails/>} />  
        <Route path="/register" element={<Register/>} />  

       </Routes>
    </>
  )
}

export default App

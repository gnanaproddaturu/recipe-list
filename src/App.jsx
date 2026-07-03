

import { Route, Routes } from "react-router-dom"
import NavComponent from "./components/nav/NavComponent"
import RecipeComponent from "./pages/RecipePage/RecipesComponent"
import RecipeDetails from "./pages/RecipeDetailePage/RecipeDetails"



function App() {


  return (
    <>
    {/* <h1>hello</h1> */}
       {/* <RecipeComponent/> */}
       <Routes>
        <Route path="/" element={<RecipeComponent/>}/>
        <Route path="/recipe/:id" element={<RecipeDetails/>} />

       </Routes>
    </>
  )
}

export default App

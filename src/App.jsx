

import { Route, Routes } from "react-router-dom"
import NavComponent from "./components/nav/NavComponent"
import RecipeComponent from "./pages/RecipePage/RecipesComponent"
import RecipeDetails from "./pages/RecipeDetailePage/RecipeDetails"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Login from "./pages/LoginPage/Login"



function App() {


  return (
    <>
    {/* <h1>hello</h1> */}
       {/* <RecipeComponent/> */}
       <Routes>
        <Route path="/" element={<RecipeComponent/>}/>
        <ProtectedRoute>
        <Route path="/recipe/:id" element={<RecipeDetails/>} />
        </ProtectedRoute>
        <Route path="/login" element={<Login/>}/>

       </Routes>
    </>
  )
}

export default App

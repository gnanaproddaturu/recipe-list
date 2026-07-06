import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./RecipeDetails.css";
import { IoArrowBack } from "react-icons/io5";



const RecipeDetails = () => {
    const [recipe, setRecipes] = useState(null)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const { data, status } = await axios.get(`https://dummyjson.com/recipes/${id}`)
                if (status == 200) {
                    setRecipes(data)
                }
            } catch (error) {
                console.log('something wrong', error)
            }

        }
        fetchRecipeDetails()
    }, [id])
    if (!recipe) {
        return <h1>loading.......!</h1>
    }
    console.log(recipe)
    return (
        <div className="recipe-details">

            <div className="recipe-image">
                <img src={recipe.image} alt={recipe.name} />
            </div>

            {<div className="recipe-list">


                <div className="recipe-tags">
                    <h1 className="recipe-name">{recipe.name}</h1>
                    <h4>🍽 {recipe.cuisine}</h4>
                    <h4>⭐ {recipe.rating}</h4>
                    <h4>⏱ {recipe.prepTimeMinutes} min</h4>
                    <h4>🔥 {recipe.difficulty}</h4>
                </div>

                <div>
                    <h2>Ingredients</h2>

                    <ul>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2>Instructions</h2>

                    <ol>
                        {recipe.instructions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>

                <div className="backTo-home">
                    {/* <IoArrowBack className="back-icon" /> */}
                    <Link to={"/"}>
                <button className="back-btn"> <IoArrowBack className="back-icon" />Back To Home</button>
                    </Link>
                </div>

            </div>}

        </div>
    );
}
export default RecipeDetails
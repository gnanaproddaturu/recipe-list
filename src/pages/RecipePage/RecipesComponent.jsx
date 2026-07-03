import axios from "axios"
import "./RecipesComponent.css";
import { use, useEffect, useState } from "react"
import NavComponent from "../../components/nav/NavComponent"
import CustomeButton from "../../components/CustomButton/CustomButton"
import CustomCard from "../../components/CustomCard/CustomCard"



const RecipeComponent = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [search ,setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [favorites, setFavorites] = useState(()=>{const saved = localStorage.getItem("favorites")
        return saved ? JSON.parse(saved) : []
     });
    console.log(recipes)
    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const { data, status } = await axios.get("https://dummyjson.com/recipes")

                const myData = data.recipes.map((item)=>({...item, cuisine : item.cuisine == "Pakistani" ? "Afghanistan" : item.cuisine }))
                if(status == 200){
                    setRecipes(myData)
                }
                
            } catch (error) {
                console.log('somthing going wrong',error)
            }
            finally{
                    setLoading(false)         
            }
        }
        fetchRecipeData()
    }, []);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500);
        return ()=>clearTimeout(timer)
    },[search])

    useEffect(()=>{
        localStorage.setItem("favorites" , JSON.stringify(favorites))
    },[favorites])

        const filteredRecipes = recipes.filter((item) => {
  
  const matchSearch = item.name
    .toLowerCase()
    .includes(debouncedSearch.toLowerCase());

  if (filter === "italian") {
    return matchSearch && item.cuisine === "Italian";
  }

  if (filter === "indian") {
    return matchSearch && item.cuisine === "Indian";
  }

  if (filter === "afghanistan") {
    return matchSearch && item.cuisine === "Afghanistan";
  }

  return matchSearch;
});

   const toggleFavorites=(item)=>{
    const exists = favorites.find((each)=>each.id === item.id)
    if(exists){
        setFavorites(favorites.filter((each)=>each.id !== item.id))
    }
    else{
        setFavorites([...favorites ,item])
    }

   }


    return (
       <>
        <NavComponent search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} favorites={favorites} />
        <div className="recipe-container">
            {loading ? (<h1>loading.....!</h1>) : (
                    
                filteredRecipes.map((item)=>{
                    const {id ,image, name,cuisine,rating,prepTimeMinutes,difficulty} = item
                    return(
                        <div key={id} >
                            <CustomCard img = {image} name ={name} cuisine={cuisine} rating={rating} prepTimeMinutes={prepTimeMinutes}
                             difficulty={difficulty} id={id}
                             item={item}
                             favorites={favorites}
                             toggleFavorites={toggleFavorites}
                             />
                        </div>
                    )
                })
            
            )}
        
        </div>
       </>
    )
}

export default RecipeComponent
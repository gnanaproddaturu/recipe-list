

import CustomeButton from "../CustomButton/CustomButton"
import CustomImage from "../imageComponent/CustomeImage"
import "./CustomCard.css"
import { FaHeart } from "react-icons/fa6";
import { Link, Links } from "react-router-dom";

const CustomCard = ({ img, name, cuisine, difficulty, prepTimeMinutes, rating,id,item,favorites,toggleFavorites }) => {
    const isFavorite = favorites.some((each)=>each.id == id)
    return (
        <div className="recipe-card">
            <div className="image-container">
                <CustomImage
                    image={img}
                    width="100%"
                    height={220}
                />
                <FaHeart className="heart-icon" color={isFavorite ? "red" :"gray"} onClick={()=>toggleFavorites(item)}/>
            </div>
            <div className="recipe-content">
                <span className="recipe-category">{cuisine}</span>
                <h2 className="recipe-title">{name}</h2>
                <div className="recipe-info">
                    <span>⭐ {rating}</span>
                    <span>⏱️ {prepTimeMinutes}M</span>
                    <span>🔥 {difficulty}</span>
                </div>
                <Link to = {`/recipe/${id}`}  >
                <button className="recipe-btn"  >
                    View Recipe
                </button>
                </Link>
            </div>
        </div>
    )
}

export default CustomCard
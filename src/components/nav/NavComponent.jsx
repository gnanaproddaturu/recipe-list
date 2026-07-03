import CustomImage from "../imageComponent/CustomeImage"
import image from "../../assets/logo.png"
import "./NavComponent.css"
import { FiSearch } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";

const NavComponent  =({search ,setSearch, filter,setFilter, favorites})=>{
         
    return(
        <div className="nav-div">
            <div>
                <CustomImage image={image} height={70} width={70} />
            </div>
            <div className="nav-serch">
                <FiSearch className="search-icon" />
                <input type="text" name="" id="" className="inp"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
                 <div>
        <select
          className="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Recipes</option>

          <optgroup label="Cuisine">
            <option value="italian">Italian</option>
            <option value="indian">Indian</option>
            <option value="afghanistan">Afghanistan</option>
          </optgroup>
        </select>
      </div>
     
            <div>
                <span>{favorites.length}</span>
                <FaHeart className="favorit " color={favorites.length>0 ? "red" : "gray"} />
            </div>
            <h3>login</h3>
        </div>
    )
}
export default NavComponent
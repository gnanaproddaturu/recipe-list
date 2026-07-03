
import"./CustomImage.css"

const CustomImage=({height , width , image })=>{



    return(
        <>
    <img src={image} alt="" height={height} width={width}  style={{ objectFit: "cover", borderRadius : 18 , }} />
        </>
    )
}

export default CustomImage
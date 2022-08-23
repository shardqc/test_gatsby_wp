import * as React from "react"
import { Container,Link } from "@chakra-ui/react";
import { Link as GatsbyLink,GatsbyImage,StaticImage } from "gatsby";
import testSlideshow  from "./Slideshows/testSlideshow";


const Slideshow = ({imageArray}) => {
    //const imageStartingUri = imageArray[0].uri
    let index = 0;
    //faire une liste de toutes les images
function setIndex(value){
    index = value
}



// handleFunction works for a single slideshow
const handlePrevious= ({index},{length}) =>{
    index === 0 ? setIndex(length-1) : setIndex(index - 1)
}
const handleNext = ({index},{length}) =>{
    index === length ? setIndex(0) : setIndex(index + 1)
}
    return(
    
    <Container>
    </Container>)
}


export default Slideshow;
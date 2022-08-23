import React from 'react'
import { Container,Link } from "@chakra-ui/react";
import addImageUriToSlideShow from  './utility'
import { Link as GatsbyLink,GatsbyImage,StaticImage, useStaticQuery,graphql } from "gatsby";

//devrait retourner les uri de mes photos mais 
export const queryTest =  graphql`
{

  allWpMediaItem(filter: {title: {regex: "/^photo/"}}) {
    nodes{
      uri
    }
  }
}
`




 const testSlideshow =queryTest; 
/*uriArray.forEach(element => {
    addImageUriToSlideShow(testSlideshow,element.uri);
    
});*/
//testSlideshow = GetDataImage;


export default testSlideshow;
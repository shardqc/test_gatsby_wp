import * as React from "react"
import { useStaticQuery,graphql,Link as GatsbyLink } from "gatsby"
import { Container,Stack,Heading,Text,Link, Box } from "@chakra-ui/react"
import Slideshow from "../components/slideshow"
import {testSlideshow,queryTest} from "../components/Slideshows/testSlideshow"

console.log(testSlideshow);
console.log(queryTest);
//console.log(getDataImage);
// markup
const IndexPage = () => {
const query = useStaticQuery( graphql`
{
  allWpPost {
    nodes {
      id
      title
      uri
      excerpt
    }
  }
  allWpMediaItem(filter: {title: {regex: "/^photo/"}}) {
    nodes{
      uri
    }
  }
}
`);
  const {allWpPost} = query;
  const{allWpMediaItem} = query;
  //console.log(query);
  console.log(allWpMediaItem.nodes[0].uri);
  //console.log(typeof(allWpMediaItem.nodes))

  return (
    
    <main >
      <title>Home Page</title>
      <h1>Photo gallery and blog</h1>
      <Stack spacing={8}>
        {allWpPost.nodes.map((post) =>(
        <Box key={post.id} p={5} shadow="md" borderWidth="1px">
          <Heading as={'h2'}>{post.title}</Heading>
          <Text mt={4}><span
            dangerouslySetInnerHTML={{__html:post.excerpt}}
            /></Text>
          <Link as={GatsbyLink} to={post.uri}>Read More {'>>>>'}</Link>

        </Box>

        ))

        }        
      </Stack>
      <Slideshow imageArray={allWpMediaItem}/>
     
    </main>
  )
}

export default IndexPage

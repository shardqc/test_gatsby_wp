import React from "react";
import { Container,Heading,Link,Text } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";


const WpPost = () => {
    return(
        <Container maxW="xl">
            <Heading as ={`h1`} m={4}>
                Blog Post Title
            </Heading>
            <Text mt = {4} mb={10}>
                Text of the post
            </Text>
            <Link as= {GatsbyLink} to='/'> {'>>Back to Home<<'} </Link>
        </Container>
    )
}


export default  WpPost;
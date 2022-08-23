exports.createPages = async({actions,graphql,reporter})=>{
    const result = await graphql(`
    {
        allWpPost {
          nodes {
            __typename
            id
            databaseId
            uri
          }
        }
      }
    `)
    if(result?.errors){
        reporter.error("There was an error fetching post",result.errors)
    }
    const {allWpPost} = result?.data;

    let template = require.resolve(`./src/template/WpPost.js`);
    allWpPost.nodes.map(post =>{
        actions.createPage({
            path: post.uri,
            component: template,
            context: post
        })
    })
}
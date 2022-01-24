import Article from "./Article.js"



function ArticleList({posts}) {
    const articlePosts = posts.map(post => {
        return <Article 
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
        /> 
    })

    return <main>
        {articlePosts} 
    </main>
    
    }   
               
              
        
 


    
        





export default ArticleList 
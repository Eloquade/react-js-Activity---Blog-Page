import React from "react";
import { useParams } from "react-router";
import articleContent from "./articlecontent";
import ArticleList from "../components/articleslist";

const Article = () => {
    const {name} = useParams();
    const article = articleContent.find(article => article.name === name);

    if(!article) return <h1> article does not exist</h1>

    const otherArticles = articleContent.filter(article => article.name !== name);
    return(
        <React.Fragment>
            <h1>{article.name}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}

            <ArticleList articles={otherArticles} />
        </React.Fragment>
    )
    
};

export default Article;
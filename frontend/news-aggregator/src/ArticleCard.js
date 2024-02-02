import React from 'react'
import "./FrontPage.css"
import Archive from "./Archive"
import ColoredLineThin from "./ColoredLineThin"

const ArticleCard = ({title, description, url, author, urlToImage}) => {


if (description)

    return (

    <div>
        

    <p><img className = 'photograph' src={urlToImage} alt = 'news'/></p>
    <span><h2><a href={url}>{title}</a></h2><h3 className='desc'>{description}</h3></span>
    <h4> by: {author}</h4>
    <Archive />
    <ColoredLineThin color = "gray" />  
    </div>
    
)

}
    


export default ArticleCard;
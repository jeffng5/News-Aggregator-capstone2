import React from 'react'
import "./FrontPage.css"
import Archive from "./Archive"

const ArticleCard = ({title, description, url, author, urlImage}) => {
    

if (description)
    return (
    <div>
    <Archive />
    <img src={urlImage} alt = 'news'/>
    <h4><a href={url}>{title}</a></h4>
    by: <h4>{author}</h4>
    Desc: <h4>{description}</h4>
    </div>
)
else {
    return (
        <div>
        <Archive />       
        {/* <img src={urlImage}/>
        <h4><a href={url}>{title}</a></h4>
        by: <h4>{author}</h4> */}
        </div>
    )

}
    }


export default ArticleCard;
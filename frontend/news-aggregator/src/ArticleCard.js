import React from 'react'

const ArticleCard = ({source, author, title, description, url, content}) => (
    <div>
    {source}
    {title}
    {author}
    {description}
    {url}
    {content}
    </div>
)



export default ArticleCard;
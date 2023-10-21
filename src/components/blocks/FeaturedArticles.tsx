import React from 'react'
import ArticleCard from '../cards/ArticleCard'
import { Article } from '@/models/articles'

async function fetchFeatured() {
    const response = await fetch('https://www.api.owenahub.com/api/guest/articles');
    const { data } = await response.json();
    return data;
}

export default async function FeaturedArticles() {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    const data = await fetchFeatured();
    return (
        <div className='animated-2 fadeIn'>
            {data.slice(0, 5).map((article: Article) => (
                <ArticleCard article={article} key={article.id} />
            ))}
        </div>
    )
}

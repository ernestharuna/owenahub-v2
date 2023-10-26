import Link from 'next/link'
import React from 'react'
import MiniArticleCard from '../cards/MiniArticleCard';
import { Article } from '@/models/articles';
import { guestArticles } from '@/utils/article';

async function fetchRecommendedArticles() {
    const articles = await guestArticles();
    return articles;
}

export default async function RecommendedArticles() {
    // await new Promise((resolve) => setTimeout(resolve, 4000))
    const data = await fetchRecommendedArticles();

    return (
        <>
            <div className='animated-2 fadeIn mb-3'>
                {data.slice(0, 5).map((article: Article) => (
                    <MiniArticleCard article={article} key={article.id} />
                ))}
            </div>

            <Link href={"/articles"} className='text-decoration-none'>
                <button className="btn btn-dark rounded rounded-0 w-100 text-uppercase fs-6 fw-light shadow">
                    Back to articles
                </button>
            </Link>
        </>
    )
}

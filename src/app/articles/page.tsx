import ArticleCard from '@/components/cards/ArticleCard'
import { Article } from '@/models/articles';
import React from 'react'
import Link from 'next/link';

async function fetchArticles() {
    const response = await fetch('https://www.api.owenahub.com/api/guest/articles');
    const { data } = await response.json();
    return data;
}

export default async function Page() {
    const articles = await fetchArticles()

    return (
        <>
            <div className='mb-4'>
                <h3 className='fw-bold'>Latest Articles</h3>
                <p className="m-0">
                    <Link href="/" className='text-decoration-none'>← Back Home</Link>
                </p>
            </div>

            <div className="animated-2 fadeIn">
                {articles.map((article: Article) => (
                    <ArticleCard article={article} key={article.id} />
                ))}
            </div>
        </>
    )
}

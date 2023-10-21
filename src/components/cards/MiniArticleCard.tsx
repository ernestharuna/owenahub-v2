import { ArticleCardProp } from '@/models/articleProp'
import Link from 'next/link'
import React from 'react'

export default function MiniArticleCard({ article }: ArticleCardProp) {
    return (
        <div>
            <Link href={`/articles/${article.id}`} className='bg-light d-block p-2 mb-1 border text-decoration-none'>
                <p className='m-0 fw-2'>
                    <i className="bi bi-chevron-double-right"></i> {article.title}
                </p>
                <small className="text-secondary lh-sm">
                    {article.description}
                </small>
            </Link>
        </div>
    )
}

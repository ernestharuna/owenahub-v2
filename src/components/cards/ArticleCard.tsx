import React from 'react'
import { ArticleCardProp } from '@/models/articleProp'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import ArticleCategory from '../blocks/ArticleCategory';

dayjs.extend(relativeTime);

export default function ArticleCard({ article }: ArticleCardProp) {
    return (
        <Link href={`/articles/${article.id}`} className='text-decoration-none'>
            <div className="card bg-fff my-2 border border-none">
                <div className="card-body py-1">
                    <ArticleCategory category={article.category} /> - {" "}
                    <small className="text-uppercase text-secondary fs-tiny">{dayjs(article.createdAt).format('MMMM D, YYYY')}</small>
                    <h4 className='fs-5 m-0 fw-medium'>
                        {article.title}
                    </h4>
                    <p className='m-0 text-secondary fst-italic'>
                        {article.description.length > 45 ? `${article.description.substring(0, 55)} ....` : article.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

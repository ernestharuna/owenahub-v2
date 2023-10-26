import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './page.module.scss';
import ArticleCategory from '@/components/blocks/ArticleCategory';
import { Metadata, ResolvingMetadata } from 'next';
import { guestArticle, guestArticles } from '@/utils/article';

dayjs.extend(relativeTime);

type Props = {
    params: { slug: number }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.slug
    const article = await guestArticle(id);
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: `${article[0].title} - OwenaHub`,
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}

async function fetchArticle(id: number) {
    const article = await guestArticle(id);
    return article;
}

export async function generateStaticParams() {
    const data = await guestArticles();
    return data.map((post: any) => ({
        slug: post.slug,
    }))
}

export default async function page({ params }: Props) {
    const article = await fetchArticle(params.slug);

    return (
        <>
            <div>
                <p className='fw-bolder text-danger m-0'>
                    <ArticleCategory category={article[0].category} />
                </p>
                <span className='fw-medium text-secondary'>
                    Published {dayjs(article[0].createdAt).fromNow()} by {" "}
                    <u>
                        {article[0].admin && <>{article[0].admin.firstName} {article[0].admin.lastName}</>}
                        {article[0].mentor && <>{article[0].mentor.firstName} {article[0].mentor.lastName}</>}
                        {article[0].user && <>{article[0].user.firstName} {article[0].user.lastName}</>}
                    </u>
                </span>
            </div>

            <div className='my-4'>
                <h2 className='fw-bold'>{article[0].title} </h2>
                <p className="bg-f2 p-2 border">
                    {article[0].description}
                </p>
            </div>

            <div className={styles.article_body}>
                <div dangerouslySetInnerHTML={{ __html: article[0].content }} />
            </div>
        </>
    )
}

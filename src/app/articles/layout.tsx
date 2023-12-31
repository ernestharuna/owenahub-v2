import React, { Suspense } from 'react';
import GuestNavigation from '@/components/blocks/GuestNavigation';
import RecommendedArticles from '@/components/blocks/RecommendedArticles';
import Fallback from '@/components/cards/Fallback';

export default function GuestArticleLayout({ children }: { children: React.ReactNode }) {
    return (
        <GuestNavigation>
            <section className='container my-5'>
                <div className='row mb-4'>
                    <div className='col-md-8 mb-4 px-lg-5'>
                        {children}
                    </div>

                    <aside className='col-md-4'>
                        <div>
                            <h4 className='fw-bold'>Our Categories</h4>
                            <div>
                                <p>Web Development <i className="bi bi-arrow-right-short"></i></p>
                                <p>Project Management <i className="bi bi-arrow-right-short"></i></p>
                                <p>Data Science <i className="bi bi-arrow-right-short"></i></p>
                                <p>Career Advice <i className="bi bi-arrow-right-short"></i></p>
                                <p>Software Engineering <i className="bi bi-arrow-right-short"></i></p>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h4 className='fw-bold'>Top Contributors</h4>

                            <p className="text-secondary">
                                There are no mentors available at the moment
                            </p>
                        </div>

                        <hr />

                        <div>
                            <h4 className='fw-bold'>Recommended Articles</h4>
                            <Suspense fallback={<Fallback />}>
                                <RecommendedArticles />
                            </Suspense>
                        </div>
                    </aside>
                </div>
            </section>
        </GuestNavigation>
    )
}

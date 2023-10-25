import GuestNavigation from '@/components/blocks/GuestNavigation'
import Image from 'next/image'
import image from '../../../public/images/about_img.png'
import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <GuestNavigation>
            <div className="bg-f2">
                <div className="w-64 py-5 text-center">
                    <h1 className='theme-text-color mb-4 fs-large fw-bold text-uppercase fs-5'>
                        About Us
                    </h1>
                    <span className="fs-3 lh-1 fw-light">
                        We provide a dynamic platform where passionate learners <br className="d-md-inline-block d-none" />
                        can seamlessly learn from experienced mentors
                    </span>
                </div>
            </div>

            <div className="container my-5 animated-2 fadeIn mx-auto text-center">
                <div className="w-64">
                    <div className='my-5 shadow d-inline-block'>
                        <Image src={image} alt='Owenahub' width={350} />
                    </div>

                    <div className='mt-3 w-64'>
                        <h3 className='fs-4 fw-medium'>The Struggle is Real</h3>
                        <p>
                            Starting a career in tech, can be daunting. <br />
                            It cost time and resources trying to find a field that fits you and your interest before settling for one.
                            <br />
                            <br />
                            <b>OwenaHub</b> makes it easier.
                        </p>

                        <h3 className='fs-4 fw-medium mt-5'> Get access to helpful resources </h3>
                        <p>
                            It&apos;s not impossible. What you need is proper mentorship,
                            <br />
                            and you will be unstopable.
                            <br />
                            <br />
                            OwenaHub serves as a bridge, connecting ambitious individuals like you with industry professionals <br className="d-md-inline-block d-none" />
                            who are passionate about sharing their knowledge and expertise.
                            <br />
                            <br />
                            We are dedicated to offering expert advice, guidance and mentorship to <br className="d-md-inline-block d-none" />
                            learners seeking to acquire new skills and start a successful career.
                            <br />
                            <br />
                            <Link href="/articles" className='text-decoration-none'>Go to articles →</Link>
                        </p>
                    </div>
                </div>
            </div>


        </GuestNavigation>
    )
}

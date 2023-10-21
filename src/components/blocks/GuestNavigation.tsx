import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'

export default function GuestNavigation({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className='bg-dark text-light'>
                <nav className=' container py-2 d-flex justify-content-between align-items-center'>
                    <div>
                        <h1 className='text-decoration-none fs-6 fw-bold m-0'>
                            <Link href={"/"} className='text-decoration-none text-white'>
                                <Image src={logo} width={22} alt='logo' style={{ position: "relative", top: "-2px" }} />
                                wenaHub
                            </Link>
                        </h1>
                    </div>

                    <div className='fs-tiny'>
                        <Link href={"/articles"} className='text-light text-decoration-none'>BLOG</Link>
                    </div>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer className='bg-dark py-4'>
                <div className="container text-white fs-6">

                    <div>
                        <h2 className='fs-5 fw-bold m-0'>
                            <Image src={logo} alt='logo' width={50} /> <br />
                            OwenaHub<small className='fs-6 fst-italic fw-light'> — The Learner's Hub</small>
                        </h2>
                        <p>
                            <small>
                                Fostering global connections, leveraging experts to empower learners through mentorship.
                            </small>
                        </p>
                    </div>

                    <div className='social-links'>
                        <h2 className='fs-5 m-0'>
                            Contact
                        </h2>
                        <p>
                            <small>
                                hello@owenahub.com <br />
                            </small>
                        </p>
                        <span className="instagram">
                            <i className="bi bi-instagram"></i>
                        </span>
                        &nbsp;
                        <span className="twitter">
                            <i className="bi bi-twitter-x"></i>
                        </span>
                        &nbsp;
                        <span className="facebook">
                            <i className="bi bi-facebook"></i>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

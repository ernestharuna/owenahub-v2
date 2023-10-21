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

                        <div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-warning text-uppercase fw-bold fs-6" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>

                        <a href="https://instagram.com/owenahub?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className='text-white'>
                            <span className="instagram">
                                <i className="bi bi-instagram"></i>
                            </span>
                        </a>

                        &nbsp;
                        <a href="https://x.com/owenahub?t=i4-Iz4K9RaKJ4vWP1QuLlA&s=08" className="text-white">
                            <span className="twitter">
                                <i className="bi bi-twitter-x"></i>
                            </span>
                        </a>

                        &nbsp;
                        <a href="https://www.facebook.com/owenahub?mibextid=ZbWKwL" className="text-white">
                            <span className="facebook">
                                <i className="bi bi-facebook"></i>
                            </span>
                        </a>
                    </div>


                    <div className="fs-6 my-4">
                        <p className="m-0 fs-tiny">
                            &copy; 2023, OwenaHub. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import logo from "../../public/images/logo_2.png";
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
    useEffect(() => {
        console.error(error)
    }, [error]);

    const router = useRouter();

    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='py-3 px-5 rounded border text-center shadow mt-5'>
                <div className='img-fluid mb-4'>
                    <Image src={logo} width={50} alt='OwenaHub' />
                </div>
                <h2 className='text-secondary fs-6 fst-italics mt-3'>Something went wrong!</h2>
                <button onClick={() => reset()} className='btn btn-dark py-1 px-2 rounded rounded-0 fw-medium fs-tiny' type='button'>
                    Try Again
                </button>
                <button onClick={() => router.push('/articles')} className="btn bg-theme py-1 px-2 rounded rounded-0 fw-medium fs-tiny" type='button'>
                    Go Back
                </button>
            </div>
        </div>
    )
}

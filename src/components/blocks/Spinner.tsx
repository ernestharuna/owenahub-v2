import React from 'react'

export default function Spinner() {
    return (
        <div className='w-100 text-center mt-5'>
            <div className="my-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import clsx from 'clsx'

export default function ArticleCategory({ category }: { category: string }) {
    return (
        <span>
            <small className={clsx("fw-medium", "text-uppercase", "fs-tiny", {
                "text-info": category === "Software Engineering",
                "text-primary": category === "Web Development",
                "text-success": category === "Career Advice",
                "text-danger": category === "Product Management"
            })}>
                {category}
            </small>
        </span>
    )
}

import Heading from "@/components/Heading"
import Link from "next/link"

export default function BlogPage() {
    return (
        <>
            <Heading>Blog</Heading>
            <p>list of posts</p>
            <ul>
                <li>
                    <Link href="/blog/belajar-NextJS" prefetch={false}>Learn Next.js</Link>
                </li>
            </ul>
            <div className="flex flex-wrap">
                <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">

                </div>
            </div>
        </>
    )
}

// Access Url this pages : /blog
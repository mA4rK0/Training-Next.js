import Heading from "@/components/Heading"
import Link from "next/link"
import {readFile} from 'node:fs/promises';
import { marked } from "marked";

export default async function BlogPage() {
    const text = await readFile('src/content/blog/nextJS.md', 'utf8');
    const html = marked(text);

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
                    <article dangerouslySetInnerHTML={{__html: html}} className="prose prose-slate" />
                </div>
            </div>
        </>
    )
}

// Access Url this pages : /blog
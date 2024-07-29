import Link from "next/link"

export default function Navbar() {
    return (
        <>
                        <nav>
                            <ul className="flex gap-2">
                                <li>
                                    <Link href="/" prefetch={false} className="hover:underline">Home</Link>
                                </li>
                                <li>
                                    <Link href="/contact" prefetch={false} className="hover:underline">Contact</Link>
                                </li>
                                <li>
                                    <Link href="/blog" prefetch={false} className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </nav>
        </>
    )
}
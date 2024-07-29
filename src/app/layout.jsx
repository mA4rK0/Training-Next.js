import Navbar from "../components/Navbar"
import "./globals.css"

export default function Layout({children}) {
    return (
        <>
            <html lang="en">
                <head>
                    <title>Learn Next.js</title>
                </head>
                <body className="mx-4 my-4">
                    <header>
                        <Navbar />
                    </header>
                    <main className="my-3 min-h-screen">{children}</main>
                    <footer className="text-center grow">
                        <hr />
                        <span>Turu</span>
                    </footer>
                </body>
            </html>
        </>
    )
}
export default function BlogLayout({children}) {
    return (
        <>
           <div className="flex">
                <div>
                    sidebar
                </div>
                <div className="mx-4">{children}</div>
           </div>
        </>
    )
}
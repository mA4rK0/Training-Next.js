import { roboto } from "@/app/fonts"

export default function Heading({children}) {
    return (
        <>
            <h1 className={`text-2xl font-bold mb-3 ${roboto.className}`}>{children}</h1>
        </>
    )
}
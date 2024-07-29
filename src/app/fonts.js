import {Roboto} from "next/font/google";

export const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
    fallback: ["Helvetica", "Arial", "sans-serif"],
    variable: "--font-roboto",
});


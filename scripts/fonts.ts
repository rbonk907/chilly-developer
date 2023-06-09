import { Inter, Chivo_Mono, Rubik } from "next/font/google";

export const rubik = Rubik({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-rubik',
});

export const chivo_mono = Chivo_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-chivo-mono',
});
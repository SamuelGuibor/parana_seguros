'use client';

import { Forum } from 'next/font/google';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const forum = Forum({
    subsets: ['latin'],
    weight: '400',
});
export function Header() {

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-[#1A1A2E] text-white">
            <div className="flex items-center justify-between w-full px-6 py-8 mx-auto max-w-8xl">

                <div className="hidden md:flex w-[140px]" />

                <div className="hidden md:flex flex-1">
                    <Link
                        href="/"
                        className={`${forum.className} text-4xl font-bold tracking-wide`}
                    >
                        Parana seguros
                    </Link>
                </div>

                <div className="text-white pr-10 hidden md:flex items-center gap-4">
                    <Link href="/" className="text-lg font-medium">
                        <FaInstagram size={35} />
                    </Link>
                    <Link href="/" className="text-lg font-medium">
                        <FaLinkedin size={35} />
                    </Link>
                </div>
            </div>
        </header>
    );
}

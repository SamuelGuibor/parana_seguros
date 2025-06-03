'use client';

import { Forum } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const forum = Forum({
    subsets: ['latin'],
    weight: '400',
});

export function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 1) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-[#01020A] via-[#03061D] to-[#01020A] text-white transition-opacity duration-700 ${showHeader ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="flex items-center justify-between w-full px-6 py-8 mx-auto max-w-8xl">
                <div className="hidden md:flex w-[140px]" />

                <div className="hidden md:flex flex-1">
                    <Link
                        href="/"
                        className={`${forum.className} text-4xl font-bold`}
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

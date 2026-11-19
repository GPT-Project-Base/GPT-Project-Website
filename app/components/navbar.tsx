"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

 const links = [
        {href: '/blog', label: 'Blog'},
        {href: '/plan', label: 'Plan'},
        {href: '/aboutus', label: 'About Us'},
        {href: '/installation', label: "Installation"}
    ];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className= "sticky top-0 bg-[#5C4B34] text-[#D4CBB1] shadow-lg px-6 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-3xl font-bold tracking-tight text-[#D4CBB1] hover:text-[#D4CBB1] hover:bg-[#5C4B34] px-4 py-2 rounded-md transition duration-300">
                    GPT Project
                </Link>
                <div className="flex items-center gap-3">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-4 py-2 rounded-md text-xl font-medium ${
                                pathname === link.href
                                    ? "text-[#D4CBB1] hover:bg-[#D4CBB1] hover:text-[#5C4B34]"
                                    : "transition duration-300 text-[#D4CBB1] hover:bg-[#D4CBB1] hover:text-[#5C4B34]"
                            }`}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
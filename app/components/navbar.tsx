"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

 const links = [
        {href: '/', label: 'Home'},
        {href: '/blog', label: 'Blog'},
        {href: '/plan', label: 'Plan'},
        {href: '/aboutus', label: 'About Us'},
        {href: '/installation', label: "Installation"}
    ];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className= "bg-[#5C4B34] text- [#D4CBB1]">
            
        </nav>
    )
}
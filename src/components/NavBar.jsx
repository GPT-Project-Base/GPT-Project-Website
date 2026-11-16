import {Navlink} from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
    { to: '/plan', label: 'Plan' },
    { to: '/aboutus', label: 'About Us' },
    { to: '/installation', label: 'Installation' },
]

function NavBar() {
    return (
        <nav className="sticky bg-[5C4B34] text-white shadow-md">
            <div className="flex items-center justify-between px-4 py-2">
                <span>
                    GPT Project
                </span>
            </div>

        </nav>
    )
}
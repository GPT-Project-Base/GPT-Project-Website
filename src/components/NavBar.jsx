import {NavLink} from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
    { to: '/plan', label: 'Plan' },
    { to: '/aboutus', label: 'About Us' },
    { to: '/installation', label: 'Installation' },
]

function NavBar() {
    return (
        <nav className="sticky top-0 bg-[#5C4B34] text-white shadow-md py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
                <span className="text-3xl font-bold">GPT Project</span>
                <div className="flex items-center gap-1">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md text-xl font-small ${
                                    isActive ? 'text-white hover:bg-[#866D4B]' : 'text-white hover:bg-[#866D4B]'
                                }`
                            }>
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
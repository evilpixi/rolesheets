"use client";

import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar()
{
    return (
        <nav className="fixed top-0 left-0 right-0 flex flex-row justify-between bg-transparent p-4">
            <h1 className="text-xl font-semibold font-playfair hidden">
                Rolesheets
            </h1>
            <button>Menu</button>
            <ThemeSwitcher />
        </nav>
    );
}

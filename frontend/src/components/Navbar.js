import { Link } from "react-router-dom";
import  { useContext } from "react";
import ThemeContext from "../context/ThemeContent";


export default function Navbar() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-gray-200 dark:bg-gray-800 shadow-md">
            <div className="text-2xl font-bold">
                <a href="/" className="text-violet-600 dark:text-violet-400">Logo</a>
            </div>
            <div className="space-x-4">
                <button onClick={toggleTheme} className="rounded-md bg-gray-200 dark:bg-gray-800 p-2 transition hover:scale-110 ease-in duration-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 hover:text-pink-500 dark:text-gray-400 dark:hover:text-gray-100"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 20.75C12.89 20.75 8.75 16.61 8.75 11.5c0-3.25 1.75-6.11 4.75-7.5A9.717 9.717 0 015.5 6.5 9.752 9.752 0 002.25 15c0 5.38 4.37 9.75 9.75 9.75a9.75 9.75 0 009.752-9.748z"
                    />
                </svg>
                </button>
               <li className="transition hover:scale-110 ease-in duration-100">
                   <Link to="/">Home</Link>
               </li>
               <li className="transition hover:scale-110 ease-in duration-100">
                   <Link to="/about">Sobre</Link>
               </li>
               <li className="transition hover:scale-110 ease-in duration-100">
                   <Link to="/account">Cuenta</Link>
               </li>
            </div>
        </nav>
    );
}
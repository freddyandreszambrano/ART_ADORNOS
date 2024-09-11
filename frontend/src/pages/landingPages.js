import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function LandingPage() {
    return (
    <header className="bg-zinc-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white flex flex-col">

        <Navbar />
        <section className="flex-grow text-center my-16 mx-8">
          <h1 className="font-extrabold text-5xl mb-8">Landing Pages</h1>
          <p className="text-lg mb-8">
            va texto formal
          </p>
          <div className="space-x-4">
            <Link 
              to="/account"
              className="cursor-pointer bg-orange-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-orange-700 hover:ring-2 hover:ring-orange-800 hover:shadow-xl hover:shadow-orange-500 focus:ring-orange-300 focus:shadow-orange-400 px-5 py-2"
              >
              Iniciar sesión
            </Link>
            <Link 
              to="/about"
              className="cursor-pointer bg-orange-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-orange-700 hover:ring-2 hover:ring-orange-800 hover:shadow-xl hover:shadow-orange-500 focus:ring-orange-300 focus:shadow-orange-400 px-5 py-2"
              >
              Conoce mas
            </Link>
          </div>
        </section>
        <Footer />
    </header>
    );
  }
  
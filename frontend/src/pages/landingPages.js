import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import 'boxicons';


export default function LandingPage() {
    return (
    <header className="bg-zinc-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white flex flex-col">

        <Navbar />
        <section className="flex-grow text-center my-16 mx-8">
          <h1 className="font-extrabold text-5xl mb-2">Art Home</h1>
          <p className="text-xl mb-8">
          Tu hogar, tu arte.
          </p>
          <div className="flex space-x-40 justify-center mt-10">
          <Link
            to="/account"
            className="cursor-pointer transition-all 
              bg-white text-gray-900 text-2xl px-28 py-12 rounded-lg
              border-orange-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-orange-300 shadow-orange-300 active:shadow-none flex items-center justify-center space-x-4"
          >
            <box-icon name='cog' color='#6b7280' size='lg'></box-icon>
            <span className="font-bold">Usuario</span>
          </Link>

          <Link
            to="/admin"
            className="cursor-pointer transition-all 
              bg-white text-gray-900 text-2xl px-28 py-12 rounded-lg
              border-orange-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-orange-300 shadow-orange-300 active:shadow-none flex items-center justify-center space-x-4"
          >
            <box-icon name='store' color='#6b7280' size='lg'></box-icon>
            <span className="font-bold">Vendedor</span>
          </Link>
          </div>

        </section>
        <Footer />
    </header>
    );
  }
  
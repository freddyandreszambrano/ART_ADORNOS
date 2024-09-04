export default function LandingPage() {
    return (
    <header className="bg-zinc-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white flex flex-col">

        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 bg-gray-200 dark:bg-gray-800 shadow-md">
          <div className="text-2xl font-bold">
            <a href="/" className="text-violet-600 dark:text-violet-400">Logo</a>
          </div>
          <div className="space-x-4">
            <a 
              href="/" 
              className="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
            >
              Iniciar sesión
            </a>
            <a 
              href="/" 
              className="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
            >
              Registrarse
            </a>
          </div>
        </nav>
  
        {/* Main Content */}
        <section className="flex-grow text-center my-16 mx-8">
          <h1 className="font-extrabold text-5xl mb-8">Landing Pages</h1>
          <p className="text-lg mb-8">
            va texto formal
          </p>
          <div className="space-x-4">
            <a 
              href="/" 
              className="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
            >
              Iniciar sesión
            </a>
            <a 
              href="/" 
              className="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
            >
              Registrarse
            </a>
          </div>
        </section>
    </header>
    );
  }
  
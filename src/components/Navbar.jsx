function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          BILAN CARGO
        </h1>

        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-blue-600 cursor-pointer">Home </a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#services" className="hover:text-blue-600 cursor-pointer">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

export const Header = () => {
  return (
    <div className="flex justify-center left-[5%] md:left-[27%] lg:left-[35%] items-center fixed top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="/" className="nav-item">Home</a>
        <a href="/about" className="nav-item">About</a>
        <a href="/contact" className="nav-item">Contact</a>
        <a href="/projects" className="nav-item bg-white/90 text-gray-900 hover:bg-white/70 hover:text-gray-900 transition duration-300">Projects</a>
      </nav>
    </div>
  )
};

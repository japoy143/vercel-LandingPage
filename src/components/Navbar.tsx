import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.tsx";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 border-neutral-700/80 py-3 backdrop-blur-lg">
      <div className="container relative mx-auto px-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-10 w-10" src={logo} alt="logo" />
            <span className="text-xl tracking-wide">VirtualR</span>
          </div>
          <ul className="ml-14 hidden space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center justify-center space-x-12 lg:flex">
            <a href="#" className="rounded-md border px-3 py-2">
              Sign In
            </a>
            <a
              href=""
              className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2"
            >
              Create an Account
            </a>
          </div>
          <div className="flex-col justify-end md:flex lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex w-full flex-col items-center justify-center bg-neutral-900 p-12 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="rounded-md border px-3 py-2">
                Sign In
              </a>
              <a
                href="#"
                className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { navItems } from "../Constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOn, setMobileOn] = useState(false);

  const toggleMobileOn = () => {
    setMobileOn(!mobileOn);
  };
  return (
    <div className="sticky z-50 backdrop-blur-lg top-0 py-3 border-b border-slate-400 border-opacity-35 text-white">
      <div
        className="container mx-auto px-4 relative text-sm"
        style={{ width: "80%" }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="text-xl">
              Tousif Tasrik
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((nav, index) => (
              <li key={index}>
                <a href={nav.href}>{nav.label}</a>
              </li>
            ))}
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMobileOn}>
              {mobileOn ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileOn && (
          <div className="fixed right-0 z-30 w-full p-12 flex flex-col justify-center items-center lg:hidden backdrop-blur-lg bg-gradient-to-t from-blue-500 to-blue-900  ">
            <ul>
              {navItems.map((nav, index) => (
                <li key={index} className="mb-3">
                  <a href={nav.href}>{nav.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

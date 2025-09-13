import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons (you can also use Heroicons or custom SVG)

export default function NavigationSection() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
  { label: "Home", href: '#' },
  { label: "Features", href: "#features" },
  { label: "Product", href: '#product' },
  { label: "Pricing", href: '#pricing' },
  { label: "About", href: '#about' },
  { label: "Contact", href: '#contact' },
];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-[0.6px] border-[#ebebeb] shadow-[0px_0px_32px_#00030514]">
      <nav className="flex items-center w-full justify-between md:px-32 px-5 py-4">
        {/* Logo */}
        <div className="w-[135.58px] h-10 bg-[url(/learn-ai-blue-icon-black-tecx-png.png)] bg-cover bg-[50%_50%]" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-3 shadow-[inset_0px_4px_6px_#ffffff26] rounded-lg h-auto hover:bg-gray-50"
            >
              <span className="font-medium text-gray-500 text-sm whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative hidden md:block">
          <button className="px-6 py-3 bg-bright-blueprimaryb300 border border-[#1f669c] shadow-[inset_0px_4px_16px_#ffffff29,0px_2px_8px_#0e439229] rounded-lg hover:bg-bright-blueprimaryb400">
            <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
              Get Access
            </span>
          </button>

          <img
            className="absolute w-20 h-[45px] top-0 left-[42px] pointer-events-none"
            alt="Rectangle"
            src="/rectangle-12.svg"
          />
          <img
            className="absolute w-20 h-[45px] top-0 left-0 pointer-events-none"
            alt="Rectangle"
            src="/rectangle-13.svg"
          />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col space-y-2 px-5 py-4">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="text-gray-700 text-base font-medium py-2 text-left hover:text-bright-blueprimaryb400"
              >
                {item.label}
              </button>
            ))}
            <button className="px-6 py-3 mt-2 bg-bright-blueprimaryb300 border border-[#1f669c] rounded-lg hover:bg-bright-blueprimaryb400">
              Get Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

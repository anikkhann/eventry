
// import Image from "next/image";
// import Link from "next/link";
// import SignInOut from "./auth/SignInOut";
// const Navbar = () => {
//   return (
//     <nav>
//       <div className="container flex justify-between items-center py-4">
//         <div className="nav-brand">
//           <Link href="/">
//             <Image
//               src="/event.png"
//               alt="Eventry"
//               width={135}
//               height={135} />
//           </Link>
//         </div>

//         <ul className="flex gap-4 text-[#9C9C9C]">
//           <li><SignInOut /></li>
//           {/* <li>About</li>
//           <li>Contact Us</li> */}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import SignInOut from "./auth/SignInOut"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-black shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/event.png"
                alt="Eventry"
                width={100}
                height={100}
                className="w-auto h-8 sm:h-10"
              />
            </Link>
          </div>
          <div className="hidden sm:flex items-center  justify-center space-x-4">
            <ul className="flex gap-4 items-center justify-center text-[#9C9C9C]">
              <li><SignInOut /></li>
              {/* <li>About</li>
              <li>Contact Us</li> */}
            </ul>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <span className="text-2xl" aria-hidden="true">&times;</span>
              ) : (
                <span className="text-2xl" aria-hidden="true">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <SignInOut />
            {/* <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#9C9C9C] hover:text-gray-900 hover:bg-gray-50">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#9C9C9C] hover:text-gray-900 hover:bg-gray-50">Contact Us</a> */}
          </div>
        </div>
      )}
    </nav>
  )
}
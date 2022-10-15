import { NextPage } from "next"
import Link from "next/link";
import { Shopping_bag } from "../../icons/Icons";
import { useState } from "react";
import { Hamburger , Times } from "../../icons/Icons";

const Navbar:NextPage = () => {
    const [isActive,setIsActive] = useState(false);

  return (
    <header className="nav_header">
        <div className="container nav_wrapper">
            <nav className={`nav ${isActive ? 'show' : 'hidden'}`}>
                <ul className="nav_ul">
                    <li>
                        <Link href={'/'}>
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>
                            <a>
                                Contact
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'}>
                            <a>
                                About
                            </a>
                        </Link>
                    </li>
                </ul>
                <div className="nav_shopping_cart">
                    <div className="nav_items_quantity">0</div>
                    <Shopping_bag />
                </div>
            </nav>
            <div className="nav_logo_container">
                <span className="nav_logo">
                    <span className="nav_subLogo">E</span>commerce
                </span>
            </div>

            {/* Hamburger */}
            <div className="hamburger">
                <button onClick={()=> setIsActive(prev => !prev)} className="btn">
                    {
                        isActive ?
                        <Times />
                        :
                        <Hamburger />
                    }
                </button>
            </div>

            {/* Overlay */}
            {isActive && <div className="overlay"></div>}
        </div>
    </header>
  )
}

export default Navbar
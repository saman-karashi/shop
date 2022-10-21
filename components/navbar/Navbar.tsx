import { NextPage } from "next"
import Link from "next/link";
import { Shopping_bag } from "../../icons/Icons";
import { useState,useContext } from "react";
import { Hamburger , Times } from "../../icons/Icons";
import { MyContext } from "../../store/Context";

const Navbar:NextPage = () => {
const [menuIsActive,setMenuIsActive] = useState<boolean>(false);
const {
displayModalHandler,
choosedProducts
} = useContext(MyContext);

  return (
    <header className="nav_header">
        <div className="container nav_wrapper">
            <nav className={`nav ${menuIsActive ? 'show' : 'hidden'}`}>
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
                <div className="nav_shopping_cart" onClick={()=>displayModalHandler(setMenuIsActive)}>
                    <div onClick={()=> setMenuIsActive(false)} className="nav_items_quantity">{choosedProducts.length || 0}</div>
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
                <button onClick={()=> setMenuIsActive(prev => !prev)} className="btn">
                    {
                        menuIsActive ?
                        <Times />
                        :
                        <Hamburger />
                    }
                </button>
            </div>

            {/* Overlay */}
            {menuIsActive && <div className="overlay"></div>}
        </div>
    </header>
  )
}

export default Navbar
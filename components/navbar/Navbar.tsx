import { NextPage } from "next"
import Link from "next/link";
import { Shopping_bag } from "../../icons/Icons";
import { useState,useContext } from "react";
import { Hamburger , Times } from "../../icons/Icons";
import { MyContext } from "../../store/Context";

const Navbar:NextPage = () => {
const {
displayModalHandler,
choosedProducts
} = useContext(MyContext);

const shoppingCartHandler = ()=>{
displayModalHandler();
}

  return (
    <header className="nav_header">
        <div className="container nav_wrapper">
            <nav className={`nav`}>
                <div className="nav_shopping_cart" onClick={shoppingCartHandler}>
                    <div className="nav_items_quantity">{choosedProducts.length || 0}</div>
                    <Shopping_bag />
                </div>
            </nav>
            <div className="nav_logo_container">
                <span className="nav_logo">
                    <span className="nav_subLogo">E</span>commerce
                </span>
            </div>
        </div>
    </header>
  )
}

export default Navbar
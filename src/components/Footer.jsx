import React from "react";
import { Link } from "react-router-dom"

function Footer(){
    const year = new Date().getFullYear();

    function CustomFooterLink({to, children, ...props}){
    

        return(
            <li>
            <Link to={to} {...props}>
            {children}
            </Link>
            </li>
        );
    }

    return (
        <footer className="footer">
            <ul>
                <CustomFooterLink to="/about">About</CustomFooterLink>
                <CustomFooterLink to="/contact">Contact us</CustomFooterLink>
            </ul>
            <p>Copyright © {year}</p>
        </footer>
    );
}

export default Footer;
import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import Dropdown from "./Dropdown";

function Header(){
    return (
        <header>
            <nav className="nav">
                <Link to="/" className="site-title">
                    SneakerLover
                </Link>
                <ul>
                    <CustomLink to="/men">Men</CustomLink>
                    <CustomLink to="/women">Women</CustomLink>
                    <CustomLink to="/kids">Kids</CustomLink>
                    <Dropdown />
                </ul>

            </nav>
        </header>
    );
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname, end:true});

    return(
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
        {children}
        </Link>
        </li>
    );
}

export default Header;
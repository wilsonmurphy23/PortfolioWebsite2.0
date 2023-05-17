import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0 && showNavbar) {
                setShowNavbar(false);
            } else if (window.pageYOffset === 0 && !showNavbar) {
                setShowNavbar(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [showNavbar]);

    return (
        <>
            {showNavbar && (
                <Nav>
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            Resume
                        </NavLink>
                        <NavLink to="/resume" activeStyle>
                            About
                        </NavLink>
                        <NavLink to="/blogs" activeStyle>
                            Blog
                        </NavLink>
                        <NavLink to="/projects" activeStyle>
                            Projects
                        </NavLink>
                    </NavMenu>
                </Nav>
            )}
        </>
    );
};

export default Navbar;

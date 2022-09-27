import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/img/Logo.jpg";
import "../../App.scss";

const Navbar = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark  mb-4" variant="primary">
                <div className="container">
                    <img
                        alt=""
                        src={Logo}
                        width="100"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link to="/" className="navbar-brand fs-3 ubuntu">
                        Rick & Morty <span className="text-primary">Wiki</span>
                    </Link>
                    <style jsx>{`
                    button[aria-expanded="false"] > .close {
                        display: none;
                    }
                    button[aria-expanded="true"] > .open {
                        display: none;
                    }
                    `}</style>
                    <button 
                        className="navbar-toggler border-0 bg-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >   
                        <span class="fas fa-bars open text-dark"></span>
                        <span class="fas fa-times close text-dark"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >

                    <div className="navbar-nav fs-5">
                        <NavLink to="/" className="nav-link">
                            Characters
                        </NavLink>
                        <NavLink to="/episodes" className="nav-link">
                            Episode
                        </NavLink>
                        <NavLink
                        activeClassname="active"
                        className="nav-link"
                        to="/location"
                        >
                            Location
                        </NavLink>
                    </div>     
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
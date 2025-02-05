import React, { useState, useEffect } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { FaBars, FaCartArrowDown } from "react-icons/fa";
import image1 from "/src/assets/logo.png";

function Navbar() {
    const [background, setBackground] = useState("white");
    const [textColor, setTextColor] = useState("black");
    const [logoFilter, setLogoFilter] = useState("");
    const navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBackground("rgba(0,0,0,0.81)");
            setTextColor("white");
            setLogoFilter("brightness(0) invert(1)");
        } else {
            setBackground("white");
            setTextColor("black");
            setLogoFilter("");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="navbar">
            <nav style={{ backgroundColor: background, backdropFilter: "blur(10px)" }}>
                <img
                    src={image1}
                    alt="Logo"
                    className="navbar-logo"
                    style={{ filter: logoFilter, cursor: "pointer" }}
                    onClick={() => {
                        window.scrollTo(0, 0);
                        navigate("/");
                    }}
                />
                <div className="navbar-links">
                    <div
                        className="navbar-link"
                        style={{color: textColor, cursor: "pointer"}}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            navigate("/");
                        }}
                    >
                        Ana səhifə
                    </div>
                    <div
                        className="navbar-link"
                        style={{color: textColor, cursor: "pointer"}}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            navigate("/portfolio");
                        }}
                    >
                        Portfolio
                    </div>
                    <div
                        className="navbar-link"
                        style={{color: textColor, cursor: "pointer"}}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            navigate("/products");
                        }}
                    >
                        Məhsullar
                    </div>
                    <div
                        className="navbar-link"
                        style={{color: textColor, cursor: "pointer"}}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            navigate("/services");
                        }}
                    >
                        Xidmətlər
                    </div>
                    <div
                        className="navbar-link"
                        style={{color: textColor, cursor: "pointer"}}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            navigate("/about");
                        }}
                    >
                        Haqqımızda
                    </div>
                    <div
                        className="navbar-link"
                        style={{color: textColor, cursor: "pointer"}}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            navigate("/contact");
                        }}
                    >
                        Əlaqə
                    </div>
                </div>
                <FaBars className="navbar-menu-icon" style={{color: textColor, cursor: "pointer"}}/>
            </nav>
        </section>
    );
}

export default Navbar;
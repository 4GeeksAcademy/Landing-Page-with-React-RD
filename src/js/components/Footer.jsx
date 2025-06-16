import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"; // Optional: remove if unused

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center text-lg-start">
            <div className="text-center p-3 bg-dark text-white">
                © {new Date().getFullYear()} Your Company Name
            </div>
        </footer>
    );
}
    export default Footer;
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"; // Optional: remove if unused

const Footer = () => {
    return (
        //<footer className="bg-dark text-white text-center text-lg-start">
        //<div className="container ">
        //<div className="row">
        //<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        //<h5 className="text-uppercase">About</h5>
        //<p>This is a simple footer section built with Bootstrap.</p>
        //</div>
        //<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        //<h5 className="text-uppercase">Links</h5>
        //</div>
        ///<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        ///	<h5 className="text-uppercase">Follow Us</h5>
        //</div>
        //</div>
        //</div>
        <footer>
            <div className="text-center p-3 bg-dark text-white">
                © {new Date().getFullYear()} Your Company Name
            </div>
        </footer>

    );
};

export default Footer;
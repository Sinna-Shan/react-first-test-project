import React from "react";

const year = new Date().getFullYear();
export default function Footer(){
    return(
        <footer className="footer">
            <p className="copyright">© Copyright {year}</p>
        </footer>
    );
}
import React from "react";
import { Link } from 'react-router-dom'
import "./assets/scss/footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">

                <div className="container">
                    <div className="row justify-content-between footer-social">
                        <div className="col footer-social-item">
                            <a className="footerlink " href="https://github.com/ksc3899/">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>

                        <div className="col footer-social-item">
                            <a className="footerlink" href="https://www.linkedin.com/in/sai-charan-kommana-b91951174/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>

                        <div className="col footer-social-item">
                            <a className="footerlink" href="https://www.facebook.com/">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around footer-nav">
                    <div className="col footer-nav-item">
                        <Link className="footerlink" to="/Home">
                            Sai Charan Kommana
                        </Link>
                    </div>

                    <div className="col footer-nav-item">
                        <Link className="footerlink" to="/Games">
                            Games
                        </Link>
                    </div>

                    <div className="col footer-nav-item">
                        <Link className="footerlink" to="/Research">
                        Research
                        </Link>
                    </div>

                    <div className="col footer-nav-item">
                        <Link className="footerlink" to="/Contact">
                        Contact
                        </Link>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";
import "./assets/scss/navbar.scss";

class Navbar extends Component {
    constructor(props) {
        super(props);
        // const base_url = process.env.PUBLIC_URL;

        this.state = {
            transparent_paths: [], // [base_url + "", base_url + "/", "/", ""],
            current_path: this.props.location.pathname,
            width: window.innerWidth,
            isTransparent: true
        }
    }

    static propTypes = {
        location: PropTypes.object.isRequired
    }

    handleTransparency = (path) => {
        const windowsScrollTop = window.pageYOffset;
        const navbar = ReactDOM.findDOMNode(this.refs.navbar);

        const bootstrap_media_size = 576;

        if (this.state.width >= bootstrap_media_size) {
            this.setState({ isTransparent: true });
        } else {
            this.setState({ isTransparent: false });
        }

        if (!path) {
            path = this.state.current_path; 
        }

        if (this.state.transparent_paths.includes(path)) {
            // console.log("Current path in Transparent Paths")
            if (windowsScrollTop <= 20 && this.state.isTransparent) {
                navbar.classList.remove("bg-light");
                navbar.classList.remove("navbar-light");
                navbar.classList.add("bg-transparent");
                navbar.classList.add("navbar-dark");
            } else {
                navbar.classList.remove("bg-transparent");
                navbar.classList.remove("navbar-dark");
                navbar.classList.add("bg-light");
                navbar.classList.add("navbar-light");
            }
        }

        //TODO: Remove beore production
        // console.log(this.state);
    }

    handleScroll = () => {
        this.handleTransparency();
    }

    handleResize = () => {
        this.setState({ width: window.innerWidth });
        this.handleTransparency();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // prevState.handleTransparency(nextProps.location.pathname);
        return ({current_path: nextProps.location.pathname});
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.handleResize);

        this.handleTransparency();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top justify-content-around" ref="navbar">
                    <div className="container">
                        <div>
                        <Link className="navbar-brand" to="/">Sai Charan Kommana</Link>
                        </div>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2">
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Research">Research</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Games">Games</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact">Contact</Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav social-links ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href=" https://github.com/ksc3899/">
                                        <i className="fab fa-github" />
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.linkedin.com/in/sai-charan-kommana-b91951174/">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </React.Fragment >
        );
    }
}

export default withRouter(Navbar);

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {



    return (



        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch mx-2">
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        <input className="form-check-input" type="checkbox" onClick={props.modeToggler} role="switch" id="flexSwitchCheckDefault" />
                    </div>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
        ;
}

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: "Sandy"
}

export default Navbar;
import React from 'react';
import logo from '../assets/img/logo.png'

export const Navbar = () =>{
    const total = 25000;  // Asignar un valor a total
    const token = false;  // Asignar un valor a token

    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a className="navbar-brand col-md-2" href="#"><img className='logo-header' src={logo} alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <a className="nav-link" href="#">🍕 Home</a>
                            </li>
                            {token ? (
                                <>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">🔓 Profile</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">🔒 Logout</a>
                                    </li>
                                </>
                                ) : (
                                <>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">🔐 Login</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">🔐 Register</a>
                                    </li>
                                </>
                                )}
                    </ul>
                    <form class="d-flex" role="search">
                        <button className="btn" type="submit">🛒 Total: ${total.toLocaleString()}</button>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
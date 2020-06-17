import React from 'react';
import { NavLink, Link } from "react-router-dom";
import '../../assets/styles/Header.scss';
import Logo from '../../assets/images/Logo.png';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-sm-1 px-md-3 px-lg-5">
            <Link to="/"><img className="navbar-brand" src={Logo} alt="logo Tân Á Châu" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav m-auto">
                    <NavLink to="/" className="nav-item mx-sm-1 mx-md-3 mx-lg-5">
                        <p className="nav-link text-uppercase">Trang chủ</p>
                    </NavLink>
                    <NavLink to="/product" className="nav-item mx-sm-1 mx-md-3 mx-lg-5">
                        <p className="nav-link text-uppercase">Sản phẩm</p>
                    </NavLink>
                    <NavLink to="/blog" className="nav-item mx-sm-1 mx-md-3 mx-lg-5">
                        <p className="nav-link text-uppercase">Bài viết</p>
                    </NavLink>
                    <NavLink to="/contact" className="nav-item mx-sm-1 mx-md-3 mx-lg-5">
                        <p className="nav-link text-uppercase">Liên hệ</p>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
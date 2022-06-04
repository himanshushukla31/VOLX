import React, { useEffect } from "react";
import "./Header.css";
import { ImSearch } from "react-icons/im";
import { CgAdd } from "react-icons/cg";

const Header = () => {

  
  return (
    <>
      <div className="header">
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/OLX_2019.svg"
          alt=""
        />
  
        <div className="header_search">
          <input
            className="header_searchInput"
            placeholder="Find Books,Equipments and more..."
            type="text"
            name=""
            id=""
          />
          <ImSearch className="search_icon" />
        </div>
        <div className="header_Menu">
          <div className="header_MenuOption1">Login</div>
          <div className="header_MenuOption2">
            <CgAdd className="sell_icon" />
            Sell
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <nav className="nav-menu">
        <a className="nav-btn" href="#home" role="button" aria-label="home button">
          <img src="https://img.icons8.com/material-outlined/24/undefined/home--v2.png" />
          <span>Home</span>
        </a>
        <a
          className="nav-btn"
          href="#search"
          role="button"
          aria-label="search button"
        >
          <img src="https://img.icons8.com/external-simple-solid-edt.graphics/50/undefined/external-Plus-add-and-remove-simple-solid-edt.graphics-11.png" />
          <span>Sell</span>
        </a>
        <a
          className="nav-btn"
          href="#favorites"
          role="button"
          aria-label="favorites button"
        >
          <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/undefined/external-login-freelancer-xnimrodx-lineal-xnimrodx.png" />
          <span>Login</span>
        </a>
        <a
          className="nav-btn"
          href="#uploads"
          role="button"
          aria-label="uploads button"
        >
          <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/undefined/external-chats-communication-royyan-wijaya-detailed-outline-royyan-wijaya.png" />
          <span>Chats</span>
        </a>
        <a
          className="nav-btn"
          href="#settings"
          role="button"
          aria-label="settings button"
        >
          <img src="https://img.icons8.com/wired/64/undefined/edit-user-female.png" />
          <span>Profile</span>
        </a>
      </nav>

      {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<nav class="nav">
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">dashboard</i>
    <span class="nav__text">Dashboard</span>
  </a>
  <a href="#" class="nav__link nav__link--active">
    <i class="material-icons nav__icon">person</i>
    <span class="nav__text">Profile</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">devices</i>
    <span class="nav__text">Devices</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">lock</i>
    <span class="nav__text">Privacy</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">settings</i>
    <span class="nav__text">Settings</span>
  </a>
</nav> */}
    </>
  );
};

export default Header;

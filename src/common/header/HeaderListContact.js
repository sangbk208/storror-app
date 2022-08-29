import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

HeaderListContact.propTypes = {};

function HeaderListContact(props) {
  return (
    <div>
      {/* Nav pc */}
      <ul className="header__navbar-list hide-on-mobile-tablet">
        <li className="header__navbar-item">
          <Link to="/" className="header__navbar-item-link">
            HOME
          </Link>
        </li>
        <li className="header__navbar-item">
          <Link to="/parkour-store" className="header__navbar-item-link">
            STORE
          </Link>
          <i className="header__navbar-icon fas fa-chevron-down"></i>
          <div className="header__navbar-menu">
            <ul className="header__navbar-menu-list">
              {productCategoriesMenu.map((category, index) => (
                <li key={index} className="header__navbar-menu-item">
                  <Link to={category.link} className="header__navbar-menu-link">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="header__navbar-item">
          <Link to="" className="header__navbar-item-link">
            BLOG
          </Link>
        </li>
        <li className="header__navbar-item">
          <Link to="" className="header__navbar-item-link">
            LOOKBOOK
          </Link>
        </li>
        <li className="header__navbar-item">
          <Link to="" className="header__navbar-item-link">
            FAQS
          </Link>
        </li>
        <li className="header__navbar-item">
          <Link to="" className="header__navbar-item-link">
            CONTACT
          </Link>
        </li>
      </ul>
      <label htmlFor="nav-mb-input" className="header__navbar-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="svg-inline--fa fa-bars fa-w-14"
          role="img"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
      </label>

      <input
        className="nav-input"
        hidden
        type="checkbox"
        name=""
        id="nav-mb-input"
      />
      <label htmlFor="nav-mb-input" className="header__navbar-overlay"></label>
      {/* Nav mobibe */}
      <nav className="header__navbar-mb">
        <label htmlFor="nav-mb-input">
          <i className="header__navbar-mb-icon-time fas fa-times"></i>
        </label>

        <ul className="header__navbar-mb-list">
          <li className="header__navbar-mb-item">
            <div className="header__navbar-mb-container">
              <Link to="/" className="header__navbar-mb-item-link">
                HOME
              </Link>
            </div>
          </li>
          <li className="header__navbar-mb-item">
            <div className="header__navbar-mb-container">
              <Link to="/parkour-store" className="header__navbar-mb-item-link">
                STORE
              </Link>
              <label
                htmlFor="nav-mb-input-store"
                className="header__navbar-mb-icon fas fa-chevron-down"
              ></label>
            </div>
            <input
              className="nav-input-store"
              hidden
              type="checkbox"
              name=""
              id="nav-mb-input-store"
            />
            <div className="header__navbar-mb-menu">
              <ul className="header__navbar-mb-menu-list">
                {productCategoriesMenu.map((category, index) => (
                  <li key={index} className="header__navbar-mb-menu-item">
                    <Link
                      to={category.link}
                      className="header__navbar-menu-link"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="header__navbar-mb-item">
            <div className="header__navbar-mb-container">
              <Link to="" className="header__navbar-mb-item-link">
                ABOUT
              </Link>
              <label
                htmlFor="nav-mb-input-about"
                className="header__navbar-mb-icon fas fa-chevron-down"
              ></label>
            </div>
            <input
              className="nav-input-store"
              hidden
              type="checkbox"
              name=""
              id="nav-mb-input-about"
            />
            <div className="header__navbar-mb-menu">
              <ul className="header__navbar-mb-menu-list">
                {teamMember.map((name, index) => (
                  <li key={index} className="header__navbar-mb-menu-item">
                    <a href="/#" className="header__navbar-mb-menu-link">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="header__navbar-mb-item">
            <div className="header__navbar-mb-container">
              <Link to="/#" className="header__navbar-mb-item-link">
                BLOG
              </Link>
            </div>
          </li>
          <li className="header__navbar-mb-item">
            <div className="header__navbar-mb-container">
              <Link to="/#" className="header__navbar-mb-item-link">
                LOOKBOOK
              </Link>
            </div>
          </li>
          <li className="header__navbar-mb-item">
            <div className="header__navbar-mb-container">
              <Link to="/#" className="header__navbar-mb-item-link">
                FAQS
              </Link>
            </div>
          </li>
          <li className="header__navbar-mb-item">
            <div className="header__navbar-mb-container">
              <Link to="/#" className="header__navbar-mb-item-link">
                CONTACT
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderListContact;

const teamMember = [
  "MAX CAVE",
  "SACHA POWELL",
  "CALLUM POWELL",
  "TOBY SEGAR",
  "DREW TAYLOR",
  "BENJ CAVE",
];

const productCategoriesMenu = [
  {
    name: "T-SHIRTS",
    link: "/parkour-store/t-shirts",
  },
  {
    name: "HOODIES",
    link: "/parkour-store/hoodies",
  },
  {
    name: "SWEATPANTS",
    link: "/parkour-store/sweatpants",
  },
  {
    name: "JACKETS",
    link: "/parkour-store/jackets",
  },
  {
    name: "SHOES",
    link: "/parkour-store/shoes",
  },
  {
    name: "SOCKS",
    link: "/parkour-store/socks",
  },
  {
    name: "HATS",
    link: "/parkour-store/hats",
  },
  {
    name: "BAGS",
    link: "/parkour-store/bags",
  },
  {
    name: "GIFT CARDS",
    link: "/parkour-store/gift-card",
  },
];

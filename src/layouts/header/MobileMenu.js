import Link from "next/link";
import { Fragment, useState } from "react";
const MobileMenu = ({ logo, extraClass }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <div
        className={`header-navigation d-xl-none d-block breakpoint-on ${extraClass}`}
      >
        <div
          className={`nav-overlay ${toggle ? "active" : ""}`}
          onClick={() => setToggle(false)}
        />
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="site-branding">
              <Link legacyBehavior href="/index">
                <a className="brand-logo">
                  <img
                    src={logo ? logo : "assets/images/logo/logo-black.png"}
                    alt="Tatsuhiko"
                  />
                </a>
              </Link>
            </div>
            <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/index">
                  <a className="brand-logo">
                    <img
                      src={"assets/images/logo/logo-black.png"}
                      alt="Tatsuhiko"
                    />
                  </a>
                </Link>
              </div>
              <nav className="main-menu">
                <ul>
                  <li className="menu-item has-children">
                    <a href="/">Home</a>
                  </li>
                  <li className="menu-item">
                    <Link legacyBehavior href="about">
                      About
                    </Link>
                  </li>
                  <li className="menu-item has-children">
                    <a href="service">Services</a>
                  </li>
                  <li className="menu-item has-children">
                    <a href="faqs">FAQ</a>
                  </li>
                  <li className="menu-item has-children">
                    <a href="blog-standard">Blog</a>
                  </li>
                  <li className="menu-item has-children">
                    <a href="shop">Our Shop</a>
                  </li>
                </ul>
              </nav>
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">Contact Us</a>
                </Link>
              </div>
            </div>
            <div className="nav-right-item d-flex align-items-center">
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">Contact Us</a>
                </Link>
              </div>
              <div
                className="navbar-toggler"
                onClick={() => setToggle(!toggle)}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MobileMenu;

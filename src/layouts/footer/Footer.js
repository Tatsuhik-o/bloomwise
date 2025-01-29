import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer-area footer-wave pt-100 p-r z-1">
      <div className="wave-shapes">
        <img
          src="assets/images/shape/wave-shape-1.png"
          className="w-shape one"
          alt="wave shape"
        />
        <img
          src="assets/images/shape/wave-shape-2.png"
          className="w-shape two"
          alt="wave shape"
        />
      </div>
      <div className="footer-wrapper text-white main-bg p-r z-1">
        <div className="container">
          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyrights© {new Date().getFullYear()}{" "}
                    <a href="https://tatsuhiko.netlify.app/" target="_blank">
                      Tatsuhiko
                    </a>
                    . All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright-nav float-lg-right">
                  <ul>
                    <li>
                      <Link legacyBehavior href="about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="faqs">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

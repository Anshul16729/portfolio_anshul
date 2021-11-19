import React from "react";
import profile_img from "../assets/img/my_img.jpeg";
import SocialIcons from "../utils/Header/SocialIcons";

export default function Header() {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={profile_img}
              alt="Anshul-Shrivastava-pic"
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="/">Anshul Shrivastava</a>
            </h1>
            <div className="social-links mt-3 text-center">
              {SocialIcons.map((item, key) => {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    className={item.class}
                    key={`SocialIcons: ${key}`}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="/" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="/resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="/portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="/services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}

import React from "react";
import '../css/Header.css';
import down from '../public/down.svg'
import search from '../public/search.svg';

export default function Header() {
  return (
    <header className="header">

      <div className="top-panel">
        <div className="top-panel-content">
          <div className="row-fluid">

            <div className="language">
              <span>AM <img src={down} alt="down icon" /></span>
            </div>

            <ul className="text-links">
              <li>
                <a href="#">Առաքում և վճարում</a>
              </li>
              <li>
                <a href="#">կոնտակտներ</a>
              </li>
            </ul>

            <div className="search">
              <img src={search} alt="search" />
            </div>

          </div>
        </div>
      </div>

    </header>
  )
}
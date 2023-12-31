import React from "react";
import '../css/Header.css';
import down from '../public/down.svg'
import search from '../public/search.svg';
import sms from '../public/package.svg'
import phone from '../public/phone.svg'
import like from '../public/like.svg'
import shop from '../public/shop.svg'
import menu from '../public/menu.svg'

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

      <div className="center-panel">
        <div className="center-panel-content">
          <div className="row-fluid">
            <div className="icons">
              <img src={sms} alt="package" />
              <img src={phone} alt="package" />
            </div>

            <div className="main-img">
              <img src="https://want.am/design/themes/wantam/media/images/logo2.png?1700660505" alt="want.am" />
            </div>

            <div className="icons">
              <img src={like} alt="like" />
              <img src={shop} alt="package" />
              <button>ՄՈՒՏՔ</button>
            </div>
          </div>
        </div>
      </div>

      <div className="main-menu">
        <div className="main-menu-content">
          <ul className="menu">
            <li><a className="active" href="#"><img src={menu} alt="menu icon" />Բոլոր նվերները</a></li>
            <li><a href="#">Հոբբի</a></li>
            <li><a href="#">Սեղանի խաղեր</a></li>
            <li><a href="#">Օպտիկա</a></li>
            <li><a href="#">ԿԱՆԱՆՑ ԹՈՊ 50</a></li>
            <li><a href="#">ՏՂԱՄԱՐԴԿԱՆՑ ԹՈՊ 50</a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
      </div>

    </header>
  )
}
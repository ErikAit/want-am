import React from 'react'
import sms from '../public/package.svg'
import vk from '../public/vk.svg'
import facebook from '../public/facebook.svg'
import instagram from '../public/instagram.svg'
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p><img src={sms} alt="sms" /> Բաժանորդագրվել զեղչերի</p>

        <form>
          <input id='text' type="text" placeholder='Էլ․ փոստ' />
          <label htmlFor="text">SUBSCRIBE</label>
        </form>
      </div>

      <div className="footer-main-menu">
        <div className="main-menu">
          <div className="icons">
            <i class='bx bxl-vk'></i>
            <i class='bx bxl-facebook'></i>
            <i class='bx bxl-instagram'></i>

            <div className="text">
              Կարող եք վճարել սուրհանդակին
            </div>
          </div>

          <div className="main-img">
            <img src="https://want.am/design/themes/wantam/media/images/logo-w.png?1700774756" alt="" />
          </div>

          <div className="dop-content">
            <p className='num'>094-092-092</p>
            <div>Աշխատում ենք 10:00-ից մինչեւ 18:00</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-menu">
          <p className='bottom-copyright'>© 2017-2023 Want.am</p>
          <p>Made in <a href='#'> Flatstudio</a></p>
        </div>
      </div>
    </footer>
  )
}

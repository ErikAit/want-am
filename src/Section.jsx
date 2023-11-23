import React from 'react'
import '../css/Section.css';


export default function Section() {
  return (
    <main className="main">
      <div className="main-banner-container">
        <div className="textContent">
          <h1>Մեր հասցեն</h1>
          <p>Մենք ունենք խանութ-սրահ Երևանի կենտրոնում։ Հրավիրում ենք գնումների Հյուսիսային պողոտա 6/2 հասցեում գտնվող Տաշիր Սթրիթ առևտրի կենտրոն՝ -1 հարկ:</p>
          <button><a href="#">ԱՎԵԼԻՆ</a></button>
        </div>

        <img src="https://want.am/images/promo/14/111.jpeg" alt="main img" />
      </div>

      <div className="main-category_container">
        <div className="main-category">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="https://want.am/images/thumbnails/70/70/detailed/5/68292-1.jpeg.webp" alt="man" />

              <div className="about">
                <h2>Կանանց նվերներ</h2>
                <p>216 իր</p>
                <p>Սկսած <span>3900ԴՐ</span></p>
              </div>
            </div>

            <div className="swiper-slide">
              <img src="https://want.am/images/thumbnails/70/70/detailed/2/71102-1.jpeg.webp" alt="man" />

              <div className="about">
                <h2>Տղամարդկանց</h2>
                <p>308 իր</p>
                <p>Սկսած <span>3000ԴՐ</span></p>
              </div>
            </div>

            <div className="swiper-slide">
              <img src="https://want.am/images/thumbnails/70/70/detailed/6/U0437307_big.jpeg.webp" alt="man" />

              <div className="about">
                <h2>Հոբբի</h2>
                <p>1391 իր</p>
                <p>Սկսած <span>3900ԴՐ</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

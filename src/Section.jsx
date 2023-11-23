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
    </main>
  )
}

import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import img15 from "./images/img15.jpg";
import img16 from "./images/img16.jpg";

export default function Gallery() {
  return (
    <section>
      <h2>Project Gallery</h2>
      <div class="grid-container">
        <div class="grid-item">
          <img src={img1} alt="" />
        </div>
        <div class="grid-item">
          <img src={img2} alt="" />
        </div>
        <div class="grid-item">
          <img src={img3} alt="" />
        </div>
        <div class="grid-item">
          <img src={img4} alt="" />
        </div>
        <div class="grid-item">
          <img src={img5} alt="" />
        </div>
        <div class="grid-item">
          <img src={img6} alt="" />
        </div>
        <div class="grid-item">
          <img src={img7} alt="" />
        </div>
        <div class="grid-item">
          <img src={img8} alt="" />
        </div>
        <div class="grid-item">
          <img src={img9} alt="" />
        </div>
        <div class="grid-item">
          <img src={img10} alt="" />
        </div>
        <div class="grid-item">
          <img src={img11} alt="" />
        </div>
        <div class="grid-item">
          <img src={img12} alt="" />
        </div>
        <div class="grid-item">
          <img src={img13} alt="" />
        </div>
        <div class="grid-item">
          <img src={img14} alt="" />
        </div>
        <div class="grid-item">
          <img src={img15} alt="" />
        </div>
        <div class="grid-item">
          <img src={img16} alt="" />
        </div>
      </div>
    </section>
  );
}

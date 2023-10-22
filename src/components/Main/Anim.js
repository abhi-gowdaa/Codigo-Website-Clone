import React from "react";
import "./Anim.css";

const Anim = () => {
  return (
    <section className="con">
      <div
        className="container"
        style={{ backgroundColor: "rgb(255, 255, 101)" }}
      >
        <div className="text">
          <h6>Interface Design</h6>
          <h2 className="h2">We live to design</h2>
          <p class="p">
            We have pixel OCD. We keep ourselves constantly inspired with the
            hype and trends in the design industry to craft gorgeous
            interactions for your brand.{" "}
          </p>
        </div>
        <img
          src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fux.png&w=3840&q=85"
          alt="hiii"
        />
        <div class="un">
          <h2>User Experience</h2>
          <p>How users interact</p>
        </div>
      </div>

      <div
        className="container1"
        style={{ backgroundColor: "rgb(238, 217, 220)" }}
      >
        <div className="text1">
          <h6>Interface Design</h6>
          <h2 className="h2">We live to design</h2>
          <p class="p">
            We have pixel OCD. We keep ourselves constantly inspired with the
            hype and trends in the design industry to craft gorgeous
            interactions for your brand.{" "}
          </p>
        </div>
        <img
          src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fui.png&w=3840&q=85"
          alt="hiii"
        />
        <div class="un">
          <h2>Interface Design</h2>
          <p>We live to design</p>
        </div>
      </div>

      <div
        className="container2"
        style={{
          Color: "rgb(255, 255, 255)",
          backgroundColor: "rgb(179, 38, 46)",
        }}
      >
        <div className="text2">
          <h6>Consultancy</h6>
          <h2 className="h2">We are all users</h2>
          <p class="p">
            With over 200 digital projects and counting, we get what users want
            and need pretty easily. UX is the core to everything we build. In
            Codigo, we take user research, competitive analysis, wireframes,
            user flows, content maps very seriously{" "}
          </p>
        </div>
        <img
          src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fco.png&w=3840&q=85"
          alt="Consultancy"
        />
        <div class="un">
          <h2>Consultancy</h2>
          <p>We can help validate your ideas.</p>
        </div>
      </div>
    </section>
  );
};

export default Anim;

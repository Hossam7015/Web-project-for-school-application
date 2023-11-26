import React from "react";
import image from "../../assets/about2.webp";
import home1 from "../../assets/home2.PNG";
import home2 from "../../assets/home1.webp";
import logo from '../../assets/New ACIC American School LOGO-SME-G_edited.webp'
export default function Home() {
  return (
    <>
      <section className="videoContainer">
        <div className="layout ">
          <h1 className="text-white">ACIC American School</h1>
        </div>
        <video autoPlay loop muted>
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="sc2  p-5">
        <div className="container-fluid bg-white p-5 text-dark">
          <div className="row align-items-center p-5">
            <div className="col-md-6 text-cenetr p-5">
              <h2>Welcome</h2>
              <h5>Admission</h5>
              <p className="w-75 mt-5 text-muted">
                We are an International American School that offers American
                program to students from K-12.
              </p>
              <button className="btnmov">Applay Now</button>
            </div>
            <div className="col-md-6 ">
              <img src={image} className="w-100" alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="sc3 bg-white p-5">
        <div className="container w-50 mx-auto text-center text-dark">
          <div className="row">
            <div className="col-md-6">
              <h1 className=" my-3">Portal</h1>
              <p className="mb-3 ">Welcome to Google Education</p>
              <button className="btnmov">Start Now</button>
            </div>
            <div className="col-md-6">
              <h1 className=" my-3">Skolera</h1>
              <p className="mb-3 ">Welcome to Skolera Platform</p>
              <button className="btnmov">Start Now</button>
            </div>
            <div className="col-md-6">
              <h1 className=" my-3">StudySync</h1>
              <p className="mb-3 ">Welcome to StudySync</p>
              <button className="btnmov">Start Now</button>
            </div>
            <div className="col-md-6">
              <h1 className=" my-3">SAVVAS</h1>
              <p className="mb-3 ">Welcome to SAVVAS</p>
              <button className="btnmov">Start Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sc4">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 back-ground"></div>
            <div className="col-md-6 text-center">
              <h1>KINDERGARTEN</h1>
              <p className="w-75 mx-auto my-4">
                A warm welcome for both you and your child to ACIC’s KG
                Department for theSchool Year 2023-2024! We are honored to be
                considered as one of your top choices for delivering an
                outstanding learning environment for your child. .
              </p>
              <button className="mx-3 btnborder">LEARN MORE</button>
              <button className="mx-3 btnborder">Knowledge Wave</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sc5  mt-5 text-dark text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="chiled bg-white p-3 w-75">
                <h1>M I D D L E</h1>
                <p className="mt-5 mb-3 text-muted">
                  Dear Parents and Students,I would like to welcome you all to a
                  new school year at ACIC. I hope you all have had a relaxing
                  and fun summer break.
                </p>
                <button className="mx-3 btnborder">Learn More</button>
              </div>
            </div>
            <div className="col-md-7">
              <img src={home1} className="w-100" alt="home" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container p-5 mt-5">
          <div className="row align-items-center  p-0">
            <div className="col-md-8  bg-white text-dark text-center p-5">
              <h1>H I G H</h1>
              <p className="w-50 mx-auto my-4">
                Dear Parents and Students of the High School, We’d like to wish
                you all a safe and fulfilling new academic year 2023/2024
              </p>
              <button className="mx-3 btnborder">Learn More</button>
            </div>
            <div className="col-md-4">
              <img src={home2} height={300} className="w-100" alt="sss" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55243.0114161723!2d31.1885824!3d30.0744704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1700508685690!5m2!1sar!2seg"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="sc7">
        <div className="container-fluid text-center text-gold">
        <div className="row align-items-center ">
            <div className="col-md-2 py-5   bg-white">
              <p className="fw-bold">S C H O O L</p>
              <button className="mx-3  btnborder btn-btn">NEWS & EVENTS</button>
            </div>
            <div className="col-md-2 py-5 ">
            <p className="fw-bold">K G</p>
              <button className="mx-3  btnborder btn-btn">NEWS & EVENTS</button>
            </div>
            
            <div className="col-md-2 py-5 bg-white">
            <p className="fw-bold">ELEMENTARY</p>
              <button className="mx-3  btnborder btn-btn">NEWS & EVENTS</button>
            </div>
            
            <div className="col-md-2 py-5 ">
            <p className="fw-bold">MIDDLE</p>
              <button className="mx-3  btnborder btn-btn">NEWS & EVENTS</button>
            </div>
            <div className="col-md-2 py-5 bg-white">
            <p className="fw-bold">hIGH</p>
              <button className="mx-3  btnborder btn-btn">NEWS & EVENTS</button>
            </div>
            <div className="col-md-2 ">
              <img src={logo} className="w-100" alt="log" />
            </div>
            </div>
        </div>
      </section>
    </>
  );
}

import React from 'react'
import image from '../../assets/about2.webp'
export default function Adamiton() {
  return<>
            <section className="videoContainer">
        <div className="layout ">
          <h1 className='text-white'>Admission American School</h1>
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

  </>
}

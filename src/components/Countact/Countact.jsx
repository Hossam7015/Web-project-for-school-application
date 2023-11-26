import React from 'react'
export default function Countact() {
  return<>
  
  <section className="videoContainer">
        <div className="layout ">
          <h1 className='text-white'>Contact Us American School</h1>
        </div>
        <video autoPlay loop muted>
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </section>
  
  <section className='countact text-center '>
    <div className="container-fluid">

    <div className="row align-items-center vh-100">
      <div className="col-md-6">
        <div className="row1 w-50 mx-auto text-start mb-3">
          <span className=' d-block text-gold fw-bold '>Chairman</span>
          <span className=' d-block'>Eng.Mahmoud saad</span>
          <span className=' d-block'>mahmoud.saad@acic.edu.eg</span>
        </div>
        <div className="row1 w-50 mx-auto text-start mb-3">
          <span className=' d-block text-gold fw-bold '>Academic Director</span>
          <span className=' d-block'>Dr.Hany Hamdy</span>
          <span className=' d-block'>hany@acic.edu.eg</span>
        </div>
        <div className="row1 w-50 mx-auto text-start mb-3">
          <span className=' d-block text-gold fw-bold '>KG Director</span>
          <span className=' d-block'>Ms.Olga soliman</span>
          <span className=' d-block'>kg.director@acic.edu.eg</span>
        </div>
        <div className="row1 w-50 mx-auto text-start mb-3">
          <span className=' d-block text-gold fw-bold '>Elementary Director</span>
          <span className=' d-block'>Ms.Nisreen Sayed</span>
          <span className=' d-block'>nisreen.sayed@acic.edu.eg</span>
        </div>
        <div className="row1 w-50 mx-auto text-start mb-3">
          <span className=' d-block text-gold fw-bold '>Middle Director</span>
          <span className=' d-block'>Ms.Lobna Abd El Aziz</span>
          <span className=' d-block'>Lobna@acic.edu.eg</span>
        </div>
        <div className="row1 w-50 mx-auto text-start mb-3">
          <span className=' d-block text-gold fw-bold '>Human Resources</span>
          <span className=' d-block'>Ms. Faten Naeem</span>
          <span className=' d-block'>hr@acic.edu.eg</span>
        </div>
      </div>
      <div className="col-md-6 bg-white vh-100 d-flex justify-content-center align-items-center">
        <div className="bg-light w-75 mx-auto text-start text-dark rounded-5 p-3">
          <h1>Get in touch</h1>
          <div className="row mt-3 ">
                <div className="col-md-6 mb-2">
                  <label htmlFor="last">
                    First Name...<sup>*</sup>
                  </label>
                  <input
                  id="last"
                    type="text"
                    className="form-control  border-0 bg-dark shadow-none text-white"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label htmlFor="name">
                  Last Name...<sup>*</sup>
                  </label>
                  <input
                  id="name"
                    type="text"
                    className="form-control  border-0 bg-dark shadow-none text-white"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <div className="row">
                    <div className="col-md-12">
                    <label htmlFor="email">
                  Last Email...<sup>*</sup>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control  border-0 bg-dark shadow-none text-white"
                  />
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="Phone">
                   Phone...<sup>*</sup>
                  </label>
                  <input
                    id="Phone"
                    type="tel"
                    className="form-control  border-0 bg-dark shadow-none text-white"
                  />
                    </div>
                  </div>
                 
                </div>
                <div className="col-md-6 mb-2">
                  <label htmlFor="Subject">
                  Message...<sup>*</sup>
                  </label>
                  <textarea
                    id="Subject"
                    type="text"
                    className="form-control  border-0 bg-dark shadow-none text-white"
                  />
                </div>
                <div className="col-md-12">
                  <button className='supmit'>Supmit</button>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  </>
}

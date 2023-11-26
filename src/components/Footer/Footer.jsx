import React from "react";
import logo1 from "../../assets/logo.webp";
import logo2 from "../../assets/logo2.webp";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <img src={logo1} className="w-100" alt="f" />
            </div>
            <div className="col-md-3">
              <h2>CONTACT</h2>
              <p className="mb-5">
                First settlement | New Cairo,Behind Police Academy,Infront of
                GehazAl Tagamoa Al Awal | Egypt.​
              </p>
              <p className="p-0">+2 0127 10 11 900 (Reception) </p>
              <p className="p-0">+2 0127 26 44 800 (KG)</p>
              <p className="p-0 mb-5">+2 0127 10 11 900 (Reception) </p>
              <p className="pointer">info@acic.edu.eg</p>
            </div>

            <div className="col-md-4">
              <div className="row ">
                <div className="col-md-6 mb-2">
                  <label htmlFor="last">
                    First Name...<sup>*</sup>
                  </label>
                  <input
                  id="last"
                    type="text"
                    className="form-control bg-transparent border-start-0 border-end-0 border-top-0 rounded-0 shadow-none text-white"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label htmlFor="name">
                  Last Name...<sup>*</sup>
                  </label>
                  <input
                  id="name"
                    type="text"
                    className="form-control bg-transparent border-start-0 border-end-0 border-top-0 rounded-0 shadow-none text-white"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label htmlFor="email">
                  Last Email...<sup>*</sup>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control bg-transparent border-start-0 border-end-0 border-top-0 rounded-0 shadow-none text-white"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label htmlFor="Subject">
                  Last Subject...<sup>*</sup>
                  </label>
                  <input
                    id="Subject"
                    type="text"
                    className="form-control bg-transparent border-start-0 border-end-0 border-top-0 rounded-0 shadow-none text-white"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <label htmlFor="meassage">
                  Last Leave us a message...<sup>*</sup>
                  </label>
                  <textarea
                    id="meassage"
                    type="text"
                    className="form-control bg-transparent border-start-0 border-end-0 border-top-0 rounded-0 shadow-none text-white"
                  />
                </div>
                <button className="btn  text-white text-start fw-bolder fs-4">Supmit</button>
              </div>
            </div>

            <div className="col-md-2">
              <img src={logo1} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

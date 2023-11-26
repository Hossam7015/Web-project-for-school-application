import React from 'react'
import Slider from "react-slick";
import logo from '../../assets/logo.webp'
import about from '../../assets/about1.webp'
import logo2 from '../../assets/text.webp'
import about2 from '../../assets/about2.webp'

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    autoplay:true,
  };
  return<>
        <section className="videoContainer">
        <div className="layout ">
          <h1 className='text-white'>About Us American School</h1>
        </div>
        <video autoPlay loop muted>
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </section>

      <section className='slider p-5 text-start '>
        <div className=" container-fluid">
          <h1 className=' text-gold'>Vision & Mission</h1>
          <div className="row align-items-center">
            <div className="col-md-6">
            <Slider className='bg-white text-dark p-4 ' {...settings}>
          <div>
            <h3 className=' text-gold'>Vision Statement</h3>
            <p>t is our vision to provide a supportive and motivational learning environment, with high academic and moral expectations, empowering our students to thrive in a challenging future</p>
          </div>
          <div>
          <h3 className=' text-gold'>Mission Statement</h3>
          <p>Our mission is to develop respectful critical thinkers, fully embracing the 21st century skills and Islamic ethics, ready to join and excel at highly reputable colleges worldwide. ACIC strongly supports the empowerment of students’ life skills for successful futures.
</p>
          </div>

        </Slider>
            </div>
            <div className="col-md-6 text-center ">
                <img src={logo} className='w-50' alt="" />
                <h3>Core Values</h3>
            </div>
          </div>
        </div>
      
      </section>

      <section className='mt-5'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className='body p-5 bg-white text-dark text-center w-75'>
              <p>We are an American, Islamic devoted, independent school which offers the American Diploma to students from levels, Kindergarten to Grade Twelve. Our mission is to develop the spiritual, academic, personal and physical growth of each student within an atmosphere of care and concern.  ACIC is dedicated to its Islamic and Egyptian heritage, while being open to all faiths and backgrounds.</p>
              <h4 className=' text-gold'>Chairman</h4>
              </div>
            </div>
            <div className="col-md-6 p-5 bg-white d-flex justify-content-center flex-column align-items-center">
              <img src={about} height={250} className='w-75'  alt="" />
              <div className="table bg-dark p-3 w-75">
                <h6>Eng. Mahmoud Saad</h6>
                <p>Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' bg-white '>
      <div className="container p-5 text-dark">
        <div className="row text-center">
          <div className="col-md-6">
            <img src={logo2} className='w-50' alt="" />
            <h2 className=' text-gold'>Accredited</h2>
            <p>www.cognia.org</p>
            <p className='mt-4 w-75 mx-auto'>
            Congratulations ACIC stakeholders,
It’s with great pride and honor, we share the 2022 Cognia School of Distinction Award. The Schools of Distinction program recognizes schools and systems that truly stand out in their service to learners, as demonstrated in meeting the Cognia Performance Standards.
            </p>
            <p className='w-75 mx-auto'>ACIC has been awarded this certificate of distinction in recognition for excelling in implementation of high quality learning, organizational effectiveness, and commitment to continuous improvement.</p>
          </div>
          <div className="col-md-6">
            <img src={about2} className='w-100' alt="" />
          </div>
        </div>
      </div>
      </section>
  </>
}

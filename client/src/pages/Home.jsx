import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Home.css'
import Typewriter from 'typewriter-effect';
const Home = () => {
  let navigate = useNavigate()
  const handleClick =  (e) => {
    e.preventDefault();
    navigate("/signup");
    
};
  return (
    <>
      {/* <section className='blue'>
      <h1>Nice curves</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quas ad temporibus tempora quo cum maxime totam. Distinctio consequuntur vero pariatur nobis necessitatibus reprehenderit eius tempore ipsam possimus? Iste, distinctio.</p>
      <div className='curve'></div>
    </section>
    <section className='red'>
      <h1>Nice curves</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quas ad temporibus tempora quo cum maxime totam. Distinctio consequuntur vero pariatur nobis necessitatibus reprehenderit eius tempore ipsam possimus? Iste, distinctio.</p>
    </section> */}

      {/* <div class="custom-shape-divider-top-1694954227">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div> */}
      <section>
        <div className='spacer layer1'>
          <nav>
            
          </nav>
          <p>
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('HawkEye')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(1500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          /> */}
          HawkEye
          </p>
          <h2 className='tagline'>Unlocking the Power of Insight: Our innovative website leverages advanced technology to decode human behavior, enhancing safety, trust, and decision-making for the Ministry of Defence.</h2>
          {/* <button className='btn'>Start</button> */}
          <button className="button" onClick={handleClick}>
            <span>Start</span>
            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default Home
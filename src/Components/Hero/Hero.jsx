import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='overlay'>
      <div className='secondoverlay'>
        <div className="hero-heading w-full md:w-1/2">
            <div className='hero-header text-white text-2xl md:text-4xl lg:text-5xl'>
            A martech company supporting businesses through
            <span>
            <span className='overflow'>
              <span className='changing-text'>
                <div className='t'>
                  <div class="word1"> digital marketing</div>
                  <div class="word2"> social media</div>
                  <div class="word3"> branding</div>
                </div>
              </span> 
            </span>
            </span>
            </div>
            <div className="hero-subheader text-white">
              Lorem Ipsum Isi dolor emet. Prunet Digital Agency delivers top digital services. The quick brown fox...
            </div>
          
            <div className='button w-1/2 text-white'>
              <a href="#">
                <div className='relative button-color rounded'></div>
                <div className='relative button-text bold'>Contact us</div>
              </a>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero

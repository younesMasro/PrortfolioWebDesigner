import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home
() {
  return (
    <>
    <section className='home'>
        <div className="container flex">
            <div className="left">
                <div className="img">
                    <img src='https://github.com/sunil9813/Resource-One/blob/master/assets/home.png?raw=true'></img>
                </div>
            </div>
            <div className='right topMarign'>
             <h1>I AM A <br /> WEB DESIGNER </h1>
              <div className='scoialIcon'>
              <i><FacebookIcon></FacebookIcon></i>
              <i><InstagramIcon></InstagramIcon></i>
              <i><LinkedInIcon></LinkedInIcon></i>
             </div>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vero delectus amet ad unde qui consequatur illum, quod, ratione id non dolore magni! Fugit itaque perspiciatis voluptates tenetur! Placeat, sequi.</p>
             <button className='primary-btn'>Contact Us</button>
          </div>
        </div>
    </section>
    </>
  )
}

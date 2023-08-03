import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <>
       <footer>
        <div className="container grid1">
         <div className="box">
            <img src="https://github.com/sunil9813/Resource-One/blob/master/assets/logo1.png?raw=true" alt="" />
            <p>j'aimerais connaître le tarif pour faire de la publicité sur votre page. Pourriez-vous me donner les prix </p>
            <div className="socialIcon">
            <i><FacebookIcon></FacebookIcon></i>
              <i><InstagramIcon></InstagramIcon></i>
              <i><LinkedInIcon></LinkedInIcon></i>
            </div>
         </div>
         <div className="box">
            <h2>Quick Links</h2>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
            </ul>
         </div>
         <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
                <p>
                j'aimerais connaître le tarif
                </p>
                <span>02 Aout 2023</span>
            </div>
         </div>
         <div className="box">
            <h2>Get In Touch</h2>
            <p>j'aimerais connaître le tarif pour faire de la publicité sur votre page. Pourriez-vous me donner les prix</p>
            <div className="icon">
            <FacebookIcon></FacebookIcon>
            <label htmlFor="">j'aimerais connaître le tarif pour faire de la publicité</label>  
            </div>
            <div className="icon">
            <FacebookIcon></FacebookIcon>
            <label htmlFor="">Phon :+212 635244363</label>  
            </div>
            <div className="icon">
            <FacebookIcon></FacebookIcon>
            <label htmlFor="">Email :younes.masrour@gmail.com</label>  
            </div>
         </div>
        </div>
        <div className="legal container">
            <p>Copyright @2023 all rights reserved.</p>
            <label htmlFor="">Design & developed <span>youness masrour</span></label>
        </div>
       </footer>
    </>
  )
}

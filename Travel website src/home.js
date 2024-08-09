import "./App.css";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {FaFacebook, FaLinkedin, FaSmile, FaTwitter, FaYoutube,FaRegCopyright} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";




/* const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  } */
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: 'taj2.jpg',
    },
    {
      url: 'kerala.jpg',
    },
    {
      url: 'tiger.jpg',
    },
    {
      url: 'kedarnath.jpg',
    },
    {
      url: 'pic4.jpg',
    },
    {
      url: 'pic5.jpg',
    },
    {
      url: 'pic6.jpg',
    },
    {
      url:  'hills.jpg',
    }
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <img src={slideImage.url} alt={"tourist place"} width={600} style={{ ...divStyle }}/>
              </div>
            ))} 
          </Slide>
        </div>
      );
  }   

function Travel()
{
  
    return(
     <>      
         
     <body>
     
    <Slideshow></Slideshow>
    <div className="joy">
     <p>Moments of Joy! Do less & Enjoy</p> 
     <p>More during the Holidays <FaSmile/></p> </div>
    <p className="summery">One of the oldest civilisations in the world, 
      India is a mosaic of multicultural experiencs.With a rich heritage
      and myraid attractions, the country is among the popular tourist
      destinations in the world.As the 7th largest country in the world.</p>
     <h2 className="explore">Explore Top destinations by Region</h2>
     <div className="package1">
      <a href="http://tourism.rajasthan.gov.in" target="_New"><img src='image1.jpg'  alt='rajastan'></img></a>
      <a href="https://himachaltourism.gov.in/" target="_New"><img src='image2.jpg'  alt='Himachal'></img></a> 
      <a href="https://www.jktdc.co.in/" target="_New"><img src='image3.jpg'  alt='jammu'></img></a>
      <a href="http://www.uptourism.gov.in/" target="_New"><img src='image4.jpg'  alt='up'></img></a>
      <a href="https://www.delhitourism.gov.in/" target="_New"><img src='tajmahal.jpg'  alt='delhi'></img></a>
     </div>
     <div className="package2">
     <a href="http://www.tamilnadutourism.tn.gov.in/" target="_New"><img src='tn.jpg'  alt='tn'></img></a>
     <a href="https://www.meghalayatourism.in/" target="_New"><img src='mega.jpg'  alt='megalaya'></img></a>
     <a href="https://www.keralatourism.org/" target="_New"><img src='kerala1.jpg'  alt='KL'></img></a> 
     <a href="https://www.gujarattourism.com/" target="_New"><img src='guj.jpg'  alt='gujarat'></img></a> 
     <a href="https://www.maharashtratourism.gov.in/" target="_New"><img src='maha.jpg'  alt='maharastra'></img></a>
     </div>
     <div className="read"><h2>Best Time To Visit In India</h2>
     <p>The best time to visit India for holidays depends on the type of experience you seek. 
      The tourism season in India varies across regions due to its diverse climate. The peak tourism
       season in India starts from September to June. For wildlife enthusiasts, winter is ideal as
       national parks are open, and wildlife sightings are abundant. Hill stations are most enjoyable 
      during summer to escape the scorching heat of the plains. For trekking and hiking adventures, winter,
       monsoon, autumn, and spring offer pleasant weather. Plan your trip according to your preferences,
       and you'll discover India's incredible beauty and cultural richness, making it an unforgettable
       holiday destination. September to April can be considered an ideal time to explore India for tourism holidays.</p>
       <img src="gate.jpg" alt ="gate"></img></div>
     
    <h2 className="goal">People Satisfaction is our goal.</h2>
    <h4>Reviews : </h4>
    <div className="review"><img src="review.jpg" alt="review"></img>
        </div>
        </body>
        
        <div className="foot">
        <footer>
          <br/>
         <div className="last">
         <FaLocationPin/>Chennai-Tamilnadu-600000.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <BsTelephone/> +91-9087654321 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <AiOutlineMail/>info@happyholidays.com;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaFacebook/>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaTwitter/>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaLinkedin/>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaYoutube/></div>
         <br/>
         <div className="cookies"><FaRegCopyright/>&nbsp;&nbsp;happyholidays Pvt Ltd.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;Terms Of Platform Use &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Important Links &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Emergency
         </div>
        <br/></footer>
        </div>
        </>
    );   
}
export default Travel;
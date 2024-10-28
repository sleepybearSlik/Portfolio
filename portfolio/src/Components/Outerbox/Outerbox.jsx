import React, { useState,useref } from 'react'
import './Outerbox.css'
import dev from '../../assets/icon-dev.svg'
import app from '../../assets/icon-app.svg'
import des from '../../assets/icon-design.svg'
import photo from '../../assets/icon-photo.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Outerbox = () => {

 

  const [hovered,sethovered]= useState(0);
 
  function handlehover(obj){
   
    if(obj=='right')
    {
      sethovered(Math.min(hovered+50,0))
    }
    else {
      sethovered(Math.max(hovered-50),700)
    }
  }
  

  // var hovered = 'client';
  // function handlehover(obj){
  //   if (obj=='right'){
  //     hovered = 'clientright'
  //   }
  //   else
  //   hovered = 'clientleft'
  // }
  



  




  return (
    <div className='container'>
      <h1 style={{backgroundColor:'#1E1E1F', fontFamily:'sans-serif'}}>About Me</h1>
      <div className='small_line'></div>
      <p style={{ paddingLeft: '40px', color: 'white', backgroundColor:'#1E1E1F', fontFamily:'sans-serif' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat voluptate delectus explicabo id soluta beatae similique ipsum. Nemo nobis illum ipsam optio quas voluptatem illo repudiandae vero amet quisquam.<br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat voluptate delectus explicabo id soluta beatae similique ipsum. Nemo nobis illum ipsam optio quas voluptatem illo repudiandae vero amet quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat voluptate delectus explicabo id soluta beatae similique ipsum. Nemo nobis illum ipsam optio quas voluptatem illo repudiandae vero amet quisquam.
        <br></br></p>
      <h2 style={{ paddingLeft: '40px', color: 'white', fontFamily: 'sans-serif', paddingTop: '20px',backgroundColor:'#1E1E1F' }}>What I'm Doing</h2>

      <div className='Boxes'>

        <div className='inner_box'>

          <h2 style={{backgroundColor:'#222224'}}>Web Design</h2>
          <p style={{backgroundColor:'#222224'}}>The most modern and high-quality design made at a professional level</p>
          <img style={{backgroundColor:'#222224'}} src={des} alt="" />
        </div>

        <div className='inner_box'> <h2 style={{backgroundColor:'#222224'}}>Web Development</h2>
          <p style={{backgroundColor:'#222224'}}>High-quality development of sites at the professional level.</p>
          <img style={{backgroundColor:'#222224'}}src={dev} alt="" />
        </div>

        <div className='inner_box'> <h2 style={{backgroundColor:'#222224'}}>Mobile Apps</h2>
          <p style={{backgroundColor:'#222224'}}>Professional development of applications for iOS and Andriod.</p>
          <img style={{backgroundColor:'#222224'}} src={app} alt="" />
        </div>

        <div className='inner_box'> <h2 style={{backgroundColor:'#222224'}}>Photography</h2>
          <p style={{backgroundColor:'#222224'}}>I make high-quality photos of any category at a professional level</p>
          <img style={{backgroundColor:'#222224'}} src={photo} alt="" />
        </div>


      </div>
      <h1 style={{backgroundColor:'#1E1E1F'}}>Clients</h1>
      

      <div className="client" style={{ transform: `translateX(${hovered}px)`}} >
        
          <div className="t" style={{backgroundColor:'red'}}></div>
          <div className="t" style={{backgroundColor:'blue'}}></div>
          <div className="t" style={{backgroundColor:'white'}}></div>
          <div className="t" style={{backgroundColor:'yellow'}}></div>
          <div className="t" style={{backgroundColor:'pink'}}></div>
          <div className="t" style={{backgroundColor:'grey'}}></div>
          <div className="t" style={{backgroundColor:'hotpink'}}></div>
         
       
      </div>
      <div className="left" onClick={() => handlehover('right')}></div>
      <div className="right" onClick={() => handlehover('left')} ></div>





    </div>
  )
}

export default Outerbox

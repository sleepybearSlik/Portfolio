import React from 'react'
import './Infobox.css'

const Infobox = () => {
  return (
    <div className='Content'>
      <div className='photo'></div>
      <h1  style={{  color: 'white', paddingTop: '80px', fontFamily:'sans-serif', fontSize:'27px', paddingLeft:'17px', backgroundColor:'#1E1E1F', paddingBottom:'0px'}}>Prashant Shrestha</h1>
      <div className='profession'>
        <p style={{color:'white', fontFamily:'sans-serif', fontSize:'13px', paddingLeft:'11px', paddingTop:'5px', backgroundColor:'#2B2B2C', borderRadius:'25px', boxShadow:'0 0 2px white',height:'20px' }}>Web developer</p>
      </div>

      <div className='line'></div>

      <div className='items'>

        <div className='object'>
          <div className='box'></div>
          <div className='information'> <p style={{margin:'0px',fontSize:'15px',color:'#777778', backgroundColor:'#1E1E1F'}}>Email</p> <br />
          <p style={{margin:'0px',fontSize:'14.2px',color:'white', backgroundColor:'#1E1E1F'}}>peashant907@gmail.com</p></div>
        </div>

        <div className='object'>
          <div className='box'></div>
          <div className='information'> <p style={{margin:'0px',fontSize:'13px',color:'#777778',  backgroundColor:'#1E1E1F'}}>Phone</p> <br />
          <p style={{margin:'0px',fontSize:'14.2px',color:'white', backgroundColor:'#1E1E1F'}}>9840503594</p></div>
        </div>

        <div className='object'>
          <div className='box'></div>
          <div className='information'> <p style={{margin:'0px',fontSize:'13px',color:'#777778',  backgroundColor:'#1E1E1F'}}>Age</p> <br />
          <p style={{margin:'0px',fontSize:'14.2px',color:'white', backgroundColor:'#1E1E1F'}}>20</p></div>
        </div>

        <div className='object'>
          <div className='box'></div>
          <div className='information'> <p style={{margin:'0px',fontSize:'13px',color:'#777778',  backgroundColor:'#1E1E1F'}}>Location</p> <br />
          <p style={{margin:'0px',fontSize:'14.2px',color:'white', backgroundColor:'#1E1E1F'}}>Kalimati,Kathmandu</p></div>
        </div>

      </div>
      
    
    </div>
  )
}

export default Infobox

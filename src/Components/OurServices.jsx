import React from 'react'
import "./OurServices.css"

const OurServices = () => {
  return (
    <>
    <header>
    <h1 style={{fontSize: "xxx-large"}} >OUR SERVICE's</h1>
  </header>
    
  
    <nav>
      <ul>
        <li><a  style={{fontSize: "xx-large"}}>Service 1</a>
         
          <div className="image-container tilt ">
            <img src="1.jpg" alt="Your Image"/>
            <div className="text-overlay">
              <h1 style={{fontSize: "x-large"}}>Online Retail</h1>
              <p style={{fontSize: "xxx-medium"}}>
                 Your premier destination for online retail in the world of plants and greenery. Our virtual shelves are
                 tocked with wide variety of plants, trees,flowers, and gardening essential ,all care curated to bring beauty </p>
            </div>
            </div>
        </li>
        
        <li><a  style={{fontSize: "xx-large"}}>Service 2</a>
          
          <div className="image-container tilt">
            <img src="2.jpg" alt="Your Image"/>
            <div className="text-overlay">
              <h1 style={{fontSize: "x-large"}}>B2B</h1>
              <p style={{fontSize: "xxx-medium"}}>
                Partner with Alpine's B2B Plant Nursery Services to elevate your business with the beauty of nature. 
                Let us be your preferred supplier for premium plants that create inviting spaces for your clients and customers</p>
            </div>
          </div>
        </li>
        
        <li><a style={{fontSize: "xx-large"}}>Service 3</a>
          
          <div className="image-container tilt">
          <img src="3.jpg" alt="Your Image"/>
          <div className="text-overlay">
            <h1 style={{fontSize: "x-large"}}>Green Tourism</h1>
            <p style={{fontSize: "xxx-medium"}}>
              Our Green Tourism experiences go beyond typical tourist activities. We partner with local communities and 
              conserved organizations to offer authentic and a responsible travel opportunities that prioritize environment . </p>
          </div>
        </div> 
      </li>
      </ul>
    </nav>
    </>
  )
}

export default OurServices;
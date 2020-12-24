import React from 'react'
import UseFireStore from '../hooks/useFireStore';

const ImgGrid = () => {
 const { docs } = UseFireStore('images')

 return (
  <div className="img-grid">
   <div className="container grid">
   { docs && docs.map((data) =>{
     return(
      <div className="img-gallery-show" key={data.id}>
        <img src={data.url} alt="img" className="img-fluid" />
       </div>
     )
    }) }
   </div>
  </div>
 )
}

export default ImgGrid

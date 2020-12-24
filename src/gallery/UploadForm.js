import React, { useState } from 'react'
import Progress from './Proggress';

const UploadForm = () => {
 const [file, setFile] = useState(null);
 const [error, setError] = useState(null);

const type = ['image/png', 'image/jpeg'];

//onchange handle
 const onChangeHandle = (e) => {
  let seletecd = e.target.files[0];

  if(seletecd && type.includes(seletecd.type)){
   setFile(seletecd)
   setError('')
  } else{
   setError(true)
   setFile(null)
  }
 }

 return (
  <div className="container">
   <form className="img-form"> 
    <label>
    <input type="file" onChange={onChangeHandle} className="img-input"/>
    <span className="input-icon">+</span>
    </label>
    <div className="output">
     {error && <div className="error">
      <p className="error">Please Select correct type of image</p>
     </div>
     }
     {/* {file && (
      <img src={file.name} className="image" alt="images" />
     )} */}
     {file && <Progress file={file} setFile={setFile} /> }
    </div>
   </form>

  </div>
 )
}

export default UploadForm

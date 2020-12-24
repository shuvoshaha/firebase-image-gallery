import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const Proggress = ({ file, setFile }) => {
 const { progress, url } = useStorage(file)
 console.log(progress, url)
 
 //Hide for progress bar
 useEffect(() => {
  if(url){
   setFile(null)
  } 
 }, [url, setFile])

 return (
  <div className="progress" style={{ width: progress + '%' }}>
   
  </div>
 )
}

export default Proggress

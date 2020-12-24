import React from 'react'
import useStorage from '../hooks/useStorage'

const Proggress = ({ file, setFile }) => {
 const { progress } = useStorage(file)
 console.log(progress)
 return (
  <div className="progress">
   Progress
  </div>
 )
}

export default Proggress

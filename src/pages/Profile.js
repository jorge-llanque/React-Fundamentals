import React from 'react'
import {useParams} from 'react-router-dom'


export default function Profile() {
  /*
  useParams -> Devuelve un objeto con los parametros de la url
  */
const params = useParams();
console.log(params)

  return (
    <div>
       <h1>Profile user: {params.username}</h1>
    </div>
  )
}

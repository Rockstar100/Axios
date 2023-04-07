import React from 'react'

import { Outlet, useParams } from 'react-router'



export default function Acount(props) {
  const { id } = useParams();
  
  return (<>
    <div>Acount : Hello {id}</div>
     <Outlet/>
    </>
  )
}

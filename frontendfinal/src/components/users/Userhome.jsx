
import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router'
import Userlogin from './userlogin'
// import Userlogin from '../users/Userlogin'
export default function Userhome() {
    let data = useSelector((d)=>d.user.islogin)
    let ui = <Link to="/addblog" >Add Blog</Link>
  return (
    // <div>{data?"welcome to homepage":< }</div>
    <div>{data?ui:<Userlogin></Userlogin>}</div>
  )
}

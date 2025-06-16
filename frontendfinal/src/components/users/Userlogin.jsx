import React from 'react'

export default function Userlogin() {

  return (
    <div>
      <div>
        <label htmlFor="">Email Address</label>
        <input type="email" name="email"  id="" required/>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name="password"   id="" required/>
      </div>
      <div><input type="submit" value="Login" /></div>
    </div>
  )
}

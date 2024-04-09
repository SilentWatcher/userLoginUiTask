import React from 'react'
import '../../style/Login.css'

function Login() {
  return (
    <div>
         <div className="login_main_container">
         <div className="login_container">
            <h1>Signin to your <br /> PropX account</h1>
            <p>Lorem, ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
            <div className="form-group">
                <fieldset>
                    <legend>Email Address<span className="asterisk">*</span>:</legend>
                    <input type="email" placeholder='Enter email address' className="form_input" />
                </fieldset>
            </div>
            <div className="form-group">
                <fieldset>
                    <legend>Password<span className="asterisk">*</span>:</legend>
                    <input type="password"  placeholder='Enter password'className="form_input" />
                </fieldset>
            </div>

            <button className='button' style={{background:'var(--color-light-grey)', color:'var(--color-white)', marginTop:'0px'}}>Login</button>
         </div>

         </div>
    </div>
  )
}

export default Login
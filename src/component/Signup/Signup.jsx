import React from 'react'
import '../../style/Signup.css'

function Signup() {
  return (
    <div>
        <div className="signup_main_container">
            <h1>Create your <br /> PropX account</h1>
            <div className="form_container">

        <div className="form-group">
          <fieldset>
            <legend>Full Name<span className="asterisk">*</span>:</legend>
            <input type="text" className="form_input" />
          </fieldset>
        </div>
        <div className="form-group">
          <fieldset>
            <legend>Phone Number<span className="asterisk">*</span>:</legend>
            <input type="text" className="form_input" />
          </fieldset>
        </div>
        <div className="form-group">
          <fieldset>
            <legend>Email Address<span className="asterisk">*</span>:</legend>
            <input type="email" className="form_input" />
          </fieldset>
        </div>
        <div className="form-group">
          <fieldset>
            <legend>Password<span className="asterisk">*</span>:</legend>
            <input type="password" className="form_input" />
          </fieldset>
        </div>
        <div className="form-group">
          <fieldset>
            <legend>Company Name:</legend>
            <input type="text" className="form_input" />
          </fieldset>
        </div>


      <div className="form-question">
        <p className="question">Are you an agency? <span className="asterisk">*</span></p>
        <div className="form_radio">
          <div>
            <input type="radio" id="yes" name="experience" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input type="radio" id="no" name="experience" />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </div>

      <button className='button'>Create Account</button>
    </div>
            
        </div>
    </div>
  )
}

export default Signup
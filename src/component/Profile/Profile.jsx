import React from 'react'
import '../../style/Profile.css'

import ProfilePic from '../../assets/profile.jpg'

function Profile() {
  return (
    <div>
        <div className="profile_main_container">
            <div className="profile_container">
                <h3>Account Settings</h3>
                <div className="profile">
                    <div className='photo_usename'>
                        <div className='divImg'><img src={ProfilePic} alt="" /></div>
                        <div style={{marginBlock:'auto'}}>
                            <span><b>Marry Doe</b></span> <br />
                            <span style={{fontSize:'.8rem', fontWeight:'300'}}>Marry@gmail.com</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sint vel amet temporibus nihil dignissimos neque dolorum tenetur quidem omnis!</p>
                </div>
                <div className="dotted-line"></div>
            </div>
        </div>
    </div>
  )
}

export default Profile
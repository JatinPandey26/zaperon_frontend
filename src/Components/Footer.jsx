import React from 'react'
import Logo from '../Assets/ic_zaperon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <h4>Powered by</h4>
                <img src={Logo} alt='Zaperon Logo' />
            </div>
            <div className='footerRight'>
                <h4>
                    Need Help?
                </h4>
                <h4>
                    Privacy Policy <span>&</span> Terms
                </h4>
            </div>
        </div>
    )
}

export default Footer
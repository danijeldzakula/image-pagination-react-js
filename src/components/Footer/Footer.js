import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='container'>
          Footer
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <p className='text-center'>
            <span>Copyright © {new Date().getFullYear()}, All Right Reserved by</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
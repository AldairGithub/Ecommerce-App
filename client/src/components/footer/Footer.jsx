import React from 'react'

import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-display'>
          <p>
            All images come from
             <a
              className='footer-link'
              href='https://www.pexels.com/'
              target='_blank'
              title='Go to pexels.com'
            >pexels.com
            </a>
          </p>
          <p>
            Visit some of my other work at
            <a
              className='footer-link'
              href='https://www.aldaircarneiro.com'
              target='_blank'
              title='Go to aldaircarneiro.com'
            >aldaircarneiro.com
            </a>
          </p>
        </div>
        {/* home / searchbar / sign up / sign in */}
        {/* if already logged in?*/}
        {/* home / searchbar / account / log out */}
      </div>
    </>
  )
}
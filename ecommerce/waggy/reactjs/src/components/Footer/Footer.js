import React from 'react';
import { Icon } from '@iconify/react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <>
      <footer id='footer' className='my-5'>
        <div className='container py-5 my-5'>
          <div className='row'>
            {/* Logo + Social */}
            <div className='col-md-3'>
              <div className='footer-menu'>
                <img src={logo} alt='logo' />
                <p className='blog-paragraph fs-6 mt-3'>
                  Subscribe to our newsletter to get updates about our grand offers.
                </p>
                <div className='social-links'>
                  <ul className='d-flex list-unstyled gap-2'>
                    <li className='social'>
                      <a href='https://www.facebook.com'>
                        <Icon icon='ri:facebook-fill' className='social-icon' />
                      </a>
                    </li>
                    <li className='social'>
                      <a href='https://www.twitter.com'>
                        <Icon icon='ri:twitter-fill' className='social-icon' />
                      </a>
                    </li>
                    <li className='social'>
                      <a href='https://www.pinterest.com'>
                        <Icon icon='ri:pinterest-fill' className='social-icon' />
                      </a>
                    </li>
                    <li className='social'>
                      <a href='https://www.instagram.com'>
                        <Icon icon='ri:instagram-fill' className='social-icon' />
                      </a>
                    </li>
                    <li className='social'>
                      <a href='https://www.youtube.com'>
                        <Icon icon='ri:youtube-fill' className='social-icon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className='col-md-3'>
              <div className='footer-menu'>
                <h3>Quick Links</h3>
                <ul className='menu-list list-unstyled'>
                  <li className='menu-item'><a href='/' className='nav-link'>Home</a></li>
                  <li className='menu-item'><a href='/about' className='nav-link'>About us</a></li>
                  <li className='menu-item'><a href='/offer' className='nav-link'>Offer</a></li>
                  <li className='menu-item'><a href='/services' className='nav-link'>Services</a></li>
                  <li className='menu-item'><a href='/contact' className='nav-link'>Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* Help Center */}
            <div className='col-md-3'>
              <div className='footer-menu'>
                <h3>Help Center</h3>
                <ul className='menu-list list-unstyled'>
                  <li className='menu-item'><a href='/faqs' className='nav-link'>FAQs</a></li>
                  <li className='menu-item'><a href='/payment' className='nav-link'>Payment</a></li>
                  <li className='menu-item'><a href='/refunds' className='nav-link'>Returns & Refunds</a></li>
                  <li className='menu-item'><a href='/checkout' className='nav-link'>Checkout</a></li>
                  <li className='menu-item'><a href='/shipment' className='nav-link'>Delivery Information</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className='col-md-3'>
              <div>
                <h3>Our Newsletter</h3>
                <p className='blog-paragraph fs-6'>
                  Subscribe to our newsletter to get updates about our grand offers.
                </p>
                <div className='search-bar border rounded-pill border-dark-subtle px-2'>
                  <form className='text-center d-flex align-items-center'>
                    <input
                      type='email'
                      id='email-newsletter'
                      className='form-control border-0 bg-transparent'
                      placeholder='Enter your email here'
                    />
                    <Icon icon='tabler:location-filled' className='send-icon' />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div id='footer-bottom'>
        <div className='container'>
          <hr className='m-0' />
          <div className='row mt-3'>
            <div className='col-md-6 copyright'>
              <p className='secondary-font'>
                © 2025 Waggy. All rights reserved.
              </p>
            </div>

            <div className='col-md-6 text-md-end'>
              <p className='secondary-font'>
                Free HTML Template by{' '}
                <a
                  href='https://github.com/faryid'
                  target='_blank'
                  rel='noreferrer'
                  className='text-decoration-underline fw-bold text-black-50'
                >
                  Faryid's GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

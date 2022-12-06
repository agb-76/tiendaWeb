import '../css/footer.css'
import { Link } from 'react-router-dom'
import React, {useState, useEffect, useRef} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Footer() {
    return (
    <>
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>Join the Store newsletter to receive our best deals</p>
                <p className='footer-subscription-text'>You can unsubscribe at any time.</p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
                    </form>
                </div>
            </section>
        </div>
    </>
    );
}
import React, {useEffect, useState, useRef} from 'react';
import './Footer.scss';
export default function Footer() {
    return (
        <footer>
            <div className='footer-frame'>
                <div className="social-net-container">
                    <ul>
                        <li><a href="https://www.instagram.com/coul3/" target='_blank'><img src="/images/icons/instagram.svg" alt=""/></a></li>
                        <li><a href="https://vk.com/mcoul" target='_blank'><img src="/images/icons/vk.svg" alt=""/></a></li>
                        <li><a href="https://join.skype.com/invite/m55LU6wDgKor" target='_blank'><img src="/images/icons/skype.svg" alt=""/></a></li>
                        <li><a href="https://t.me/mr_coul" target='_blank'><img src="/images/icons/telegram.svg" alt=""/></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=79623738935" target='_blank'><img src="/images/icons/whatsapp.svg" alt=""/></a></li>
                    </ul>
                    <p className='language'><a href="">my open source</a></p>
                </div>
            </div>
        </footer>
    );
}
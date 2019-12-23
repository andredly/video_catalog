import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
        <footer>
            <div className="footer-copyright py-3 bg-secondary shadow-sm">
                <div className="container d-flex justify-content-between">
                    <Logo/>
                </div>
            </div>
        </footer>
  );
}

export default Footer;

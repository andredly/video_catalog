import React from 'react';
import Logo from './Logo';
import BackButton from './BackButton';

function Header() {
  return (
        <header>
            <div className="navbar navbar-dark bg-secondary shadow-sm">
                <div className="container d-flex justify-content-between">
                    <Logo/>
                    <BackButton/>
                </div>
            </div>
        </header>
  );
}

export default Header;

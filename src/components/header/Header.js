import React from 'react';

const Header = ({ showDashboard, setShowDashboard, setShowPassword, setValidPassword, setValidEmail }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    setShowDashboard(false);
    setShowPassword(false);
    setValidPassword(false);
    setValidEmail(false);
  }

  const showMenu = (e) => {
    document.body.classList.toggle('menu-open');
  }

  return (
    <header className="header">
      <div className="logo"><a href="https://example.com">Wrapbook</a></div>
      <nav className="main-nav">
        <button onClick={showMenu} className="main-nav__menu">Menu</button>
        <ul className="main-nav__list">
          <li className="main-nav__item"><a href="https://example.com">Link</a></li>
          <li className="main-nav__item"><a href="https://example.com">Link</a></li>
          <li className="main-nav__item"><a href="https://example.com">Link</a></li>
          {showDashboard ?
            <li className="main-nav__item main-nav__item--logout"><button onClick={handleLogout}>Logout</button></li> :
            <li className="main-nav__item main-nav__item--signup"><a href="https://example.com" className="main-nav__signup">Signup</a></li>
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
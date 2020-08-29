import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo"><a href="https://example.com">Wrapbook</a></div>
        <nav className="main-nav">
          <button className="main-nav__menu">Menu</button>
          <ul className="main-nav__list">
            <li className="main-nav__item"><a href="https://example.com">Link</a></li>
            <li className="main-nav__item"><a href="https://example.com">Link</a></li>
            <li className="main-nav__item"><a href="https://example.com">Link</a></li>
            <li className="main-nav__item main-nav__item--signup"><a href="https://example.com" className="main-nav__signup">Signup</a></li>
            <li className="main-nav__item main-nav__item--logout hide"><button data-logout>Logout</button></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

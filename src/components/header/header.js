import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/HelpOutline';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.toggleUserMenu = this.toggleUserMenu.bind(this);
  }

  toggleUserMenu() {
    const { open } = this.state;
    this.setState({ open: !open })

    console.log(open);
  }

  render() {
    const { open } = this.state;
    return(
      <div className={"header"}>
        <div className="header__container">
          <div className="header__logo"></div>
          <nav className="header__nav">
            <input className="header__search" placeholder="Search for event, company or person"></input>
            <a className="header__help-icon" href="/"><HelpIcon /></a>
            <div className={"header__user-menu"}
              onClick={this.toggleUserMenu}
            >
              <div className="header__avatar"><AccountCircleIcon /></div>
              <div className="header__user-name">Hi {this.props.name}!</div>
              {open &&
              <div className="header__user-submenu">
                <ul className="header__list">
                  <li className="header__item">Item 1</li>
                  <li className="header__item">Item 2</li>
                  <li className="header__item">Item 3</li>
                  <li className="header__item">Item 4</li>
                </ul>
              </div>}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
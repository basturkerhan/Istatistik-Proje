import React from 'react';
import {
  MdClearAll
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  Button,
  Nav,
  Navbar,
} from 'reactstrap';
import bn from 'utils/bemnames';

const bem = bn.create('header');


class Header extends React.Component {

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>

                <Link to="/">
                  <span className="ml-3 text-uppercase header-text">
                    İstatistik Hesaplamaları
                  </span>
                </Link>
        
      </Navbar>
    );
  }
}

export default Header;

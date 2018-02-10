import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const NavLink = () => ({
  render() {
    const isActive =
      this.context.router.route.location.pathname === this.props.to;
    const className = isActive ? 'active' : '';

    return (
      <Menu.Item as={Link} className={className} {...this.props}>
        {this.props.children}
      </Menu.Item>
    );
  }
});

NavLink.contextTypes = {
  router: PropTypes.object
};

export default NavLink;

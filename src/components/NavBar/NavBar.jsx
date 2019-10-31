import React, { useState } from 'react'
import './NavBar.scss';
import 'semantic-ui-css/semantic.min.css'

const NavBar = () => {

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">Sauti<span className="logo-dot">.</span></a>
      </div>
      <nav className="nav">
        <div className="links">
          <a href="#">HOME</a>
          <a href="#">DOCS</a>
          <a href="#">TABLE</a>
          <a href="https://www.facebook.com/sautiorg/"></a><i class="facebook f icon" ></i>
          <a href="https://twitter.com/sautiorg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="twitter icon"></i></a>
        </div>

        <div>
          <button class="ui button login-btn">Log In</button>
        </div>
      </nav >
    </div>
  )
}

export default NavBar






{/* <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => {
                      //google analytics event tracking
                      Event('Users', 'Login')
                      loginWithRedirect({})
                    }}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav> */}











//reactstrap navbar

      //       <Navbar color="dark"  expand="md">
      //   <Container>
      //     <NavbarBrand className="navbar-brand">Sauti</NavbarBrand>
      //       <span>.</span>
      //     <NavbarToggler onClick={toggle} />
      //     <Collapse isOpen={isOpen} navbar>
      //       <Nav color="white" className="mr-auto" navbar>
      //         <NavItem>
      //           <NavLink
      //             tag={RouterNavLink}
      //             to="/"
      //             exact
      //             activeClassName="router-link-exact-active"
      //           >
      //             Home
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink
      //             tag={RouterNavLink}
      //             to="/"
      //             exact
      //             activeClassName="router-link-exact-active"
      //           >
      //             ABOUT US
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink
      //             tag={RouterNavLink}
      //             to="/"
      //             exact
      //             activeClassName="router-link-exact-active"
      //           >
      //             SERVICES
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink
      //             tag={RouterNavLink}
      //             to="/"
      //             exact
      //             activeClassName="router-link-exact-active"
      //           >
      //             JOBS
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink
      //             tag={RouterNavLink}
      //             to="/"
      //             exact
      //             activeClassName="router-link-exact-active"
      //           >
      //             OUR TEAM
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink
      //             tag={RouterNavLink}
      //             to="/"
      //             exact
      //             activeClassName="router-link-exact-active"
      //           >
      //             NEWS AND UPDATES
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink
      //             tag={RouterNavLink}
      //             to="/"
      //             exact
      //             activeClassName="router-link-exact-active"
      //           >
      //             CONTACT US
      //           </NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Collapse>
      //   </Container>
      // </Navbar>
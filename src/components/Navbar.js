import React, { Component } from "react";
import { Link } from "react-router-dom";
//import logo from "../logo.svg";
import logo from "../logo.jpeg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../context";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <NavWrapper className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        {/*
      https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
      https://www.iconfinder.com/Makoto_msk 
      */}
        <ProductConsumer>
          {value => (
            <React.Fragment>
              <Link to="/">
                <img
                  src={logo}
                  alt="store"
                  className="navbar-brand mr-0 mr-md-2"
                />
              </Link>
              <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      Stores
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      Sell/Exchange
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="search"
                    id="searchbar"
                    onChange={event => {
                      this.handleChange(event);
                      //value.search(this.state.value);
                    }}
                  />
                </li>
              </ul>
              <Link to="/cart">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                  </span>
                  My Cart
                  <CartCounter>{value.cartCount}</CartCounter>
                </ButtonContainer>
              </Link>
            </React.Fragment>
          )}
        </ProductConsumer>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
  .navbar-brand {
    width: 220px;
    height: 80px;
  }
`;
const CartCounter = styled.span`
  position: absolute;
  top: -15px;
  width: 35px;
  right: -23px;
  border-radius: 50%;
  background: white;
  color: var(--mainBlue);
`;

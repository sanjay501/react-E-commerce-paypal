import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { storeProducts, detailProduct } from "../data";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItem: []
    };
  }
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div
            id="carousel-example-2"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carousel-example-2"
                data-slide-to="0"
                class="active"
              />
              <li data-target="#carousel-example-2" data-slide-to="1" />
              <li data-target="#carousel-example-2" data-slide-to="2" />
            </ol>

            <div class="carousel-inner" role="listbox" />
            <div class="carousel-item active">
              <div class="view">
                <img
                  class="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <div class="mask rgba-black-light" />
              </div>
              <div class="carousel-caption">
                <h3 class="h3-responsive">Samsung</h3>
                <CarouselButton
                  onClick={() => {
                    console.log("storeproducts", storeProducts);
                    value.resetProducts(storeProducts, "SAMSUNG");
                  }}
                  type="button"
                >
                  Explore Samsung Devices
                </CarouselButton>
              </div>
            </div>
            <div class="carousel-item">
              <div class="view">
                <img
                  class="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <div class="mask rgba-black-strong" />
              </div>
              <div class="carousel-caption">
                <h3 class="h3-responsive">Apple</h3>
                <CarouselButton
                  onClick={() => {
                    console.log("storeproducts", storeProducts);
                    value.resetProducts(storeProducts, "apple");
                  }}
                  type="button"
                >
                  Explore Apple Devices
                </CarouselButton>
              </div>
            </div>
            <div class="carousel-item">
              <div class="view">
                <img
                  class="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide"
                />
                <div class="mask rgba-black-slight" />
              </div>
              <div class="carousel-caption">
                <h3 class="h3-responsive">Google</h3>
                <CarouselButton
                  onClick={() => {
                    console.log("storeproducts", storeProducts);
                    value.resetProducts(storeProducts, "google");
                  }}
                  type="button"
                >
                  Explore Google Devices
                </CarouselButton>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
const CarouselButton = styled.button`
background: transparent;
color: white;
border: none;
border: 1px solid transparent;
}
&:hover{
    border: 1px solid white;
}
`;
